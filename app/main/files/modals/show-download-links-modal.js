angular.module('web')
  .controller('showDownloadLinksModalCtrl', ['$scope', '$timeout', '$translate', '$uibModalInstance', 'safeApply', 'QiniuClient', 'items', 'current', 'domains', 'showDomains', 'Toast', 'Domains',
    function($scope, $timeout, $translate, $modalInstance, safeApply, QiniuClient, items, current, domains, showDomains, Toast, Domains) {
      const T = $translate.instant,
            fs = require('fs'),
            path = require('path'),
            csvStringify = require('csv-stringify'),
            downloadsFolder = require("downloads-folder");

      initCurrentDomain(domains);

      angular.extend($scope, {
        items: items,
        current: current,
        domains: domains,
        showDomains: showDomains,
        sec: 600,
        cancel: cancel,
        onSubmit: onSubmit,
      });

      function cancel() {
        $modalInstance.dismiss('close');
      }

      function initCurrentDomain(domains) {
        let found = false;
        if (current.domain !== null) {
          domains.forEach((domain) => {
            if (current.domain.name() === domain.name()) {
              current.domain = domain;
              found = true;
            }
          });
        }
        if (!found) {
          domains.forEach((domain) => {
            if (domain.default()) {
              current.domain = domain;
            }
          });
        }
      }

      function onSubmit(form1){
        if(!form1.$valid) return;
        const lifetime = $scope.sec;

        const fileName = `kodo-browser-download-links-${moment().utc().format('YYYYMMDDHHmmSS')}`;
        let filePath = path.join(downloadsFolder(), `${fileName}.csv`);
        for (let i = 1; fs.existsSync(filePath); i++) {
          filePath = path.join(downloadsFolder(), `${fileName}.${i}.csv`);
        }
        const csvFile = fs.createWriteStream(filePath);
        const csvStringifier = csvStringify();

        csvStringifier.on('readable', function() {
          let row;
          while(row = csvStringifier.read()) {
            csvFile.write(row);
          }
        });
        csvStringifier.on('error', function(err) {
          Toast.error(err.message)
          cancel();
        });
        csvStringifier.on('finish', function() {
          csvFile.end();
          Toast.success(T('exportDownloadLinks.message', {path: filePath}), 5000);
          cancel();
        });
        csvStringifier.write(['BucketName', 'ObjectName', 'URL']);
        const promises = [];
        loopItems(current.info.regionId, current.info.bucketName, items,
          (item) => {
            promises.push($scope.current.domain.signatureUrl(item.path, lifetime).then((url) => {
                            csvStringifier.write([current.info.bucketName, item.path, url.toString()]);
                          }));
          }, () => {
            Promise.all(promises).then(() => { csvStringifier.end(); });
          });
      }

      function refreshDomains() {
        const info = $scope.current.info;
        Domains.list(info.regionId, info.bucketName).
                then((domains) => {
                  $scope.domains = domains;
                  initCurrentDomain(domains);
                  safeApply($scope);
                });
      }

      function loopItems(region, bucket, items, eachCallback, doneCallback) {
        let waitForDirs = 0;
        loopItemsInDirectory(items, eachCallback, doneCallback);

        function loopItemsInDirectory(items, eachCallback, doneCallback) {
          items.forEach((item) => {
            if (item.itemType === 'folder') {
              waitForDirs += 1;
              loadFilesFromDirectory(
                item,
                (items) => {
                  loopItemsInDirectory(items, eachCallback, doneCallback);
                },
                () => {
                  waitForDirs--;
                  if (waitForDirs == 0) {
                    doneCallback();
                  }
                })
            } else {
              eachCallback(item);
            }
          });
          if (waitForDirs == 0) {
            doneCallback();
          }
        }

        function loadFilesFromDirectory(item, handleItems, doneCallback, marker) {
          QiniuClient
            .listFiles(region, bucket, item.path, marker)
            .then((result) => {
                handleItems(result.data || []);
                if (result.marker) {
                  loadFilesFromDirectory(item, handleItems, doneCallback, result.marker);
                } else {
                  doneCallback();
                }
            });
        }
      }
    }
  ]);
