angular.module('web').factory('QiniuClient', [
  '$q',
  '$rootScope',
  '$translate',
  '$timeout',
  '$state',
  'Toast',
  'Config',
  'AuthInfo',
  function ($q, $rootScope, $translate, $timeout, $state, Toast, Config, AuthInfo) {
    const { Qiniu, Region, KODO_MODE, S3_MODE, RegionService } = require('kodo-s3-adapter-sdk'),
          path = require('path'),
          { Semaphore } = require('semaphore-promise'),
          T = $translate.instant,
          kodoAdaptersCache = {},
          s3AdaptersCache = {},
          regionServicesCache = {};

    return {
      isQueryRegionAPIAvaiable: isQueryRegionAPIAvaiable,
      listAllBuckets: listAllBuckets,
      createBucket: createBucket,
      deleteBucket: deleteBucket,

      listFiles: listFiles,
      listDomains: listDomains,
      createFolder: createFolder,

      checkFileExists: checkFileExists,
      checkFolderExists: checkFolderExists,
      getFrozenInfo: getFrozenInfo,

      getContent: getContent,
      saveContent: saveContent,

      //重命名
      moveOrCopyFile: moveOrCopyFile,

      //复制，移动
      moveOrCopyFiles: moveOrCopyFiles,
      stopMoveOrCopyFiles: stopMoveOrCopyFiles,

      //解冻
      restoreFile: restoreFile,

      //删除
      deleteFiles: deleteFiles,
      stopDeleteFiles: stopDeleteFiles,

      parseKodoPath: parseKodoPath,
      signatureUrl: signatureUrl,
      getRegions: getRegions,
      clientBackendMode: clientBackendMode,
    };

    function isQueryRegionAPIAvaiable(opt) {
      return new Promise((resolve) => {
        Region.query({ accessKey: '', bucketName: '', ucUrl: getAdapterOption(opt).ucUrl }).then(() => {
          resolve(true);
        }, (err) => {
          if (err.res && err.res.statusCode === 404) {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      });
    }

    function listAllBuckets(opt) {
      return getDefaultClient(opt).listBuckets().catch(handleError);
    }

    function createBucket(region, bucket, opt) {
      return getDefaultClient(opt).createBucket(region, bucket).catch(handleError);
    }

    function deleteBucket(region, bucket, opt) {
      return getDefaultClient(opt).deleteBucket(region, bucket).catch(handleError);
    }

    function listFiles(region, bucket, key, marker, opt) {
      return new Promise((resolve, reject) => {
        const items = [];
        const option = {
          nextContinuationToken: marker,
          delimiter: '/',
          maxKeys: 1000,
          minKeys: 1000,
        };
        let prefix = key;
        if (!prefix.endsWith('/')) {
          prefix = prefix.substring(0, prefix.lastIndexOf('/') + 1);
        }
        getDefaultClient(opt).listObjects(region, bucket, key, option).then((listedObjects) => {
          if (listedObjects.commonPrefixes) {
            listedObjects.commonPrefixes.forEach((item) => {
              items.push({
                bucket: item.bucket,
                name: item.key.substring(prefix.length).replace(/\/$/, ''),
                path: item.key,
                itemType: 'folder',
              });
            });
          }
          if (listedObjects.objects) {
            const ONE_HOUR = 60 * 60 * 1000;
            listedObjects.objects.forEach((item) => {
              if (!key.endsWith('/') || item.key != key) {
                items.push({
                  bucket: bucket,
                  name: item.key.substring(prefix.length),
                  path: item.key,
                  size: item.size,
                  storageClass: item.storageClass,
                  lastModified: item.lastModified,
                  itemType: 'file',
                  withinFourHours: (new Date() - item.lastModified) <= 4 * ONE_HOUR,
                });
              }
            });
          }
          resolve({ data: items, marker: listedObjects.nextContinuationToken });
        }, reject).catch(handleError);
      });
    }

    function listDomains(region, bucket, opt) {
      return getDefaultClient(opt).listDomains(region, bucket).catch(handleError);
    }

    function createFolder(region, bucket, prefix, opt) {
      prefix = path.normalize(prefix);
      const basename = path.basename(prefix);
      if (path.sep == '\\') {
        prefix = prefix.replace(/\\/g, '/');
      }

      return getDefaultClient(opt)
                .putObject(region, { bucket: bucket, key: prefix }, Buffer.alloc(0), basename)
                .catch(handleError);
    }

    function checkFileExists(region, bucket, key, opt) {
      return getDefaultClient(opt)
                .isExists(region, { bucket: bucket, key: key })
                .catch(handleError);
    }

    function checkFolderExists(region, bucket, prefix, opt) {
      return new Promise((resolve, reject) => {
        getDefaultClient(opt).listObjects(region, bucket, prefix, { maxKeys: 1 }).then((results) => {
          if (results.objects && results.objects.length > 0 && results.objects[0].key.startsWith(prefix)) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, reject);
      }).catch(handleError);
    }

    function getFrozenInfo(region, bucket, key, opt) {
      return getDefaultClient(opt)
                .getFrozenInfo(region, { bucket: bucket, key: key })
                .catch(handleError);
    }

    function getContent(region, bucket, key, domain, opt) {
      return new Promise((resolve, reject) => {
        getDefaultClient(opt).getObject(region, { bucket: bucket, key: key }, domain).then((result) => {
          resolve(result.data);
        }, reject);
      }).catch(handleError);
    }

    function saveContent(region, bucket, key, content, opt) {
      return new Promise((resolve, reject) => {
        const client = getDefaultClient(opt);
        client.getObjectHeader(region, { bucket: bucket, key: key }).then((headers) => {
          client.putObject(region, { bucket: bucket, key: key },
            Buffer.from(content), { metadata: headers.metadata },
          ).then(() => { resolve(); }, reject);
        }, reject);
      }).catch(handleError);
    }

    function moveOrCopyFile(region, bucket, oldKey, newKey, isCopy, opt) {
      const client = getDefaultClient(opt);
      const transferObject = {
        from: { bucket: bucket, key: oldKey },
        to: { bucket: bucket, key: newKey },
      };

      if (isCopy) {
        return client.copyObject(region, transferObject).catch(handleError);
      } else {
        return client.moveObject(region, transferObject).catch(handleError);
      }
    }

    var stopCopyFilesFlag = false;

    function moveOrCopyFiles(region, items, target, progressFn, isCopy, renamePrefix, opt) {
      const progress = { total: 0, current: 0, errorCount: 0 };
      stopCopyFilesFlag = false;

      return new Promise((resolve, reject) => {
        const client = getDefaultClient(opt);
        const newProgressFn = (progress) => {
          if (progressFn) {
            try {
              progressFn(progress);
            } catch (err) {
              handleError(err);
            }
          }
        };
        newProgressFn(progress);

        deepForEachItem(client, region, items, target, progress, newProgressFn, isCopy, renamePrefix, new Semaphore(3))
          .then(resolve, reject)
          .catch(handleError);
      });

      function deepForEachItem(client, region, items, target, progress, progressFn, isCopy, renamePrefix, semaphore) {
        const errorItems = [];

        if (stopCopyFilesFlag) {
          reject(new Error('User Cancelled'));
          return;
        }

        const transferObjects = items.map((item) => {
          let toPrefix = renamePrefix;

          if (!renamePrefix) {
            toPrefix = target.key.replace(/\/$/, '');
            if (toPrefix && toPrefix.length) {
              toPrefix += '/';
            }
            toPrefix += item.name;
          }

          return {
            from: { bucket: item.bucket, key: item.path },
            to: { bucket: target.bucket, key: toPrefix },
            item: item,
          };
        });
        const moveOrCopyFileCallback = (index, error) => {
          if (error) {
            errorItems.push({ item: transferObjects[index].item, error: error });
            progress.errorCount += 1;
          } else {
            progress.current += 1;
          }
          progressFn(progress);
          if (stopCopyFilesFlag) {
            return false;
          }
        };

        const transferFileObjects = transferObjects.filter((transferObject) => transferObject.item.itemType === 'file');
        let promises = [];
        if (transferFileObjects && transferFileObjects.length > 0) {
          if (isCopy) {
            promises.push(client.copyObjects(region, transferFileObjects, moveOrCopyFileCallback));
          } else {
            promises.push(client.moveObjects(region, transferFileObjects, moveOrCopyFileCallback));
          }
          progress.total += transferFileObjects.length;
          progressFn(progress);
        }

        const transferFolderObjects = transferObjects.filter((transferObject) => transferObject.item.itemType === 'folder');
        promises = promises.concat(transferFolderObjects.map((transferObject) => {
          return doCopyFolder(client, region, transferObject, progress, progressFn, isCopy, semaphore, moveOrCopyFileCallback);
        }));
        return new Promise((resolve, reject) => {
          Promise.all(promises).then(() => { resolve(errorItems); }, reject);
        });
      }

      function doCopyFolder(client, region, transferObject, progress, progressFn, isCopy, semaphore, moveOrCopyFileCallback) {
        return new Promise((resolve, reject) => {
          semaphore.acquire().then((release) => {
            _doCopyFolder(client, region, transferObject, progress, progressFn, isCopy, undefined, moveOrCopyFileCallback)
              .then(resolve, reject)
              .finally(() => { release(); });
          });
        });

        function _doCopyFolder(client, region, transferObject, progress, progressFn, isCopy, marker, moveOrCopyFileCallback) {
          return new Promise((resolve, reject) => {
            if (stopCopyFilesFlag) {
              reject(new Error('User Cancelled'));
              return;
            }
            client.listObjects(region, transferObject.from.bucket, transferObject.from.key, { nextContinuationToken: marker }).then((listedObjects) => {
              if (stopCopyFilesFlag) {
                reject(new Error('User Cancelled'));
                return;
              } else if (!listedObjects.objects || listedObjects.objects.length === 0) {
                resolve();
                return;
              }

              const transferObjects = listedObjects.objects.map((object) => {
                let toKey = transferObject.to.key.replace(/\/$/, '');
                if (toKey && toKey.length) {
                  toKey += '/';
                }
                toKey += object.key.substring(transferObject.from.key.length);
                return { from: object, to: { bucket: transferObject.to.bucket, key: toKey } };
              });

              progress.total += transferObjects.length;
              progressFn(progress);

              let promise;
              if (isCopy) {
                promise = client.copyObjects(region, transferObjects, moveOrCopyFileCallback);
              } else {
                promise = client.moveObjects(region, transferObjects, moveOrCopyFileCallback);
              }
              promise.then(() => {
                if (listedObjects.nextContinuationToken) {
                  _doCopyFolder(client, region, transferObject, progress, progressFn, isCopy, listedObjects.nextContinuationToken, moveOrCopyFileCallback)
                    .then(resolve, reject);
                } else {
                  resolve();
                }
              }, reject);
            }, reject);
          });
        }
      }
    }

    function stopMoveOrCopyFiles() {
      stopCopyFilesFlag = true;
    }

    function restoreFile(region, bucket, key, days, opt) {
      return getDefaultClient(opt).unfreeze(region, { bucket: bucket, key: key }, days).catch(handleError);
    }

    var stopDeleteFilesFlag = false;

    function deleteFiles(region, bucket, items, progressFn, opt) {
      const progress = { total: 0, current: 0, errorCount: 0 };
      stopDeleteFilesFlag = false;

      const errorItems = [];
      const client = getDefaultClient(opt);
      const newProgressFn = (progress) => {
        if (progressFn) {
          try {
            progressFn(progress);
          } catch (err) {
            handleError(err);
          }
        }
      };
      newProgressFn(progress);

      const deleteCallback = (index, error) => {
        if (error) {
          errorItems.push({ item: items[index], error: error });
          progress.errorCount += 1;
        } else {
          progress.current += 1;
        }
        newProgressFn(progress);
        if (stopDeleteFilesFlag) {
          return false;
        }
      };

      const toDeleteObjects = items.filter((item) => item.itemType === 'file');
      let promises = [];
      if (toDeleteObjects && toDeleteObjects.length > 0) {
        promises.push(client.deleteObjects(region, bucket, toDeleteObjects.map((item) => item.path), deleteCallback));
        progress.total += toDeleteObjects.length;
        newProgressFn(progress);
      }

      const toDeleteFolders = items.filter((item) => item.itemType === 'folder');
      const semaphore = new Semaphore(3);
      promises = promises.concat(toDeleteFolders.map((toDeleteFolder) => {
        return doDeleteFolder(client, region, toDeleteFolder, progress, newProgressFn, semaphore, deleteCallback);
      }));
      return new Promise((resolve, reject) => {
        Promise.all(promises).then(() => { resolve(errorItems); }, reject);
      })

      function doDeleteFolder(client, region, folderObject, progress, progressFn, semaphore, deleteCallback) {
        return new Promise((resolve, reject) => {
          semaphore.acquire().then((release) => {
            _doDeleteFolder(client, region, folderObject, progress, progressFn, undefined, deleteCallback)
              .then(resolve, reject)
              .finally(() => { release(); });
          });
        });

        function _doDeleteFolder(client, region, folderObject, progress, progressFn, marker, deleteCallback) {
          return new Promise((resolve, reject) => {
            if (stopDeleteFilesFlag) {
              reject(new Error('User Cancelled'));
              return;
            }
            client.listObjects(region, folderObject.bucket, folderObject.path, { nextContinuationToken: marker }).then((listedObjects) => {
              if (stopDeleteFilesFlag) {
                reject(new Error('User Cancelled'));
                return;
              } else if (!listedObjects.objects || listedObjects.objects.length === 0) {
                resolve();
                return;
              }

              progress.total += listedObjects.objects.length;
              progressFn(progress);

              client.deleteObjects(region, folderObject.bucket, listedObjects.objects.map((object) => object.key), deleteCallback).then(() => {
                if (listedObjects.nextContinuationToken) {
                  _doDeleteFolder(client, region, folderObject, progress, progressFn, listedObjects.nextContinuationToken, deleteCallback)
                    .then(resolve, reject);
                } else {
                  resolve();
                }
              }, reject);
            }, reject);
          });
        }
      }
    }

    function stopDeleteFiles() {
      stopDeleteFilesFlag = true;
    }

    function parseKodoPath(s3Path) {
      const KODO_ADDR_PROTOCOL = 'kodo://';

      if (!s3Path || s3Path.indexOf(KODO_ADDR_PROTOCOL) == -1 || s3Path == KODO_ADDR_PROTOCOL) {
        return {};
      }

      const str = s3Path.substring(KODO_ADDR_PROTOCOL.length);
      const index = str.indexOf('/');
      let bucketName, key = '';
      if (index == -1) {
        bucketName = str;
      } else {
        bucketName = str.substring(0, index);
        key = str.substring(index + 1);
      }

      return { bucketName: bucketName, key: key };
    }

    function signatureUrl(region, bucket, key, domain, expires, opt) {
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + expires || 60);

      return getDefaultClient(opt)
              .getObjectURL(region, { bucket: bucket, key: key }, domain, deadline)
              .catch(handleError);
    }

    function getRegions(opt) {
      return getRegionService(opt).getAllRegions();
    }

    function clientBackendMode(opt) {
      const adapterOption = getAdapterOption(opt);
      if (adapterOption.regions && adapterOption.regions.length > 0 && !adapterOption.preferKodoAdapter || adapterOption.preferS3Adapter) {
        return S3_MODE;
      } else {
        return KODO_MODE;
      }
    }

    function getRegionService(opt) {
      const adapterOption = getAdapterOption(opt);
      const cacheKey = makeAdapterCacheKey(adapterOption.accessKey, adapterOption.secretKey, adapterOption.ucUrl);

      if (regionServicesCache[cacheKey]) {
        return regionServicesCache[cacheKey];
      } else {
        const regionService = new RegionService(adapterOption);
        regionServicesCache[cacheKey] = regionService;
        return regionService;
      }
    }

    function getDefaultClient(opt) {
      switch(clientBackendMode(opt)) {
      case S3_MODE:
        return getS3Client(opt);
      case KODO_MODE:
        return getKodoClient(opt);
      }
    }

    function getKodoClient(opt) {
      const adapterOption = getAdapterOption(opt);
      const cacheKey = makeAdapterCacheKey(adapterOption.accessKey, adapterOption.secretKey, adapterOption.ucUrl);

      if (kodoAdaptersCache[cacheKey]) {
        return kodoAdaptersCache[cacheKey];
      } else {
        const qiniuAdapter = getQiniuAdapter(adapterOption.accessKey, adapterOption.secretKey, adapterOption.ucUrl, adapterOption.regions);
        const kodoClient = qiniuAdapter.mode(KODO_MODE);
        kodoAdaptersCache[cacheKey] = kodoClient;
        return kodoClient;
      }
    }

    function getS3Client(opt) {
      const adapterOption = getAdapterOption(opt);
      const cacheKey = makeAdapterCacheKey(adapterOption.accessKey, adapterOption.secretKey, adapterOption.ucUrl);

      if (s3AdaptersCache[cacheKey]) {
        return s3AdaptersCache[cacheKey];
      } else {
        const qiniuAdapter = getQiniuAdapter(adapterOption.accessKey, adapterOption.secretKey, adapterOption.ucUrl, adapterOption.regions);
        const s3Client = qiniuAdapter.mode(S3_MODE);
        s3AdaptersCache[cacheKey] = s3Client;
        return s3Client;
      }
    }

    function getQiniuAdapter(accessKey, secretKey, ucUrl, regions) {
      if (!accessKey || !secretKey) {
        throw new Error('`accessKey` or `secretKey` is unavailable');
      }
      return new Qiniu(accessKey, secretKey, ucUrl, `Kodo-Browser/${Global.app.version}`, regions);
    }

    function getAdapterOption(opt) {
      const result = {};

      if (typeof opt === 'object' && opt.id && opt.secret) {
        result.accessKey = opt.id;
        result.secretKey = opt.secret;
        config = Config.load(opt.isPublicCloud);
      } else {
        result.accessKey = AuthInfo.get().id;
        result.secretKey = AuthInfo.get().secret;
        config = Config.load();
      }

      if (config.ucUrl) {
        result.ucUrl = config.ucUrl;
      }
      result.regions = config.regions || [];
      if (opt && opt.preferS3Adapter) {
        result.preferS3Adapter = opt.preferS3Adapter;
      }
      return result;
    }

    function makeAdapterCacheKey(accessKey, secretKey, ucUrl) {
      return `${accessKey}:${secretKey}:${ucUrl}`;
    }

    function handleError(err) {
      if (err.code === 'InvalidAccessKeyId') {
        $state.go('login');
      } else {
        if (!err.code) {
          if (err.message.indexOf('Failed to fetch') != -1) {
            err = {
              code: 'Error',
              message: 'Connection Error'
            };
          } else
            err = {
              code: 'Error',
              message: err.message
            };
        }

        console.error(err);
        if (err.code === 'Forbidden') {
          Toast.error(T('permission.denied'));
        } else {
          Toast.error(err.code + ': ' + err.message);
        }
      }
    }
  }
]);
