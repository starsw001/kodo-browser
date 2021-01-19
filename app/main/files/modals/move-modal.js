angular.module('web')
  .controller('moveModalCtrl', ['$scope', '$uibModalInstance', '$translate', '$timeout', 'items', 'isCopy', 'renamePath', 'fromInfo', 'moveTo', 'callback', 'QiniuClient', 'Toast', 'safeApply', 'AuditLog',
    function ($scope, $modalInstance, $translate, $timeout, items, isCopy, renamePath, fromInfo, moveTo, callback, QiniuClient, Toast, safeApply, AuditLog) {
      const path = require("path"),
            T = $translate.instant;

      angular.extend($scope, {
        renamePath: renamePath,
        fromInfo: fromInfo,
        items: items,
        isCopy: isCopy,
        step: 2,

        cancel: cancel,
        start: start,
        stop: stop,

        moveTo: {
          region: moveTo.regionId,
          bucket: moveTo.bucketName,
          key: moveTo.key,
        },
      });

      start();

      function stop() {
        //$modalInstance.dismiss('cancel');
        $scope.isStop = true;
        QiniuClient.stopMoveOrCopyFiles();
      }

      function cancel() {
        $modalInstance.dismiss('cancel');
      }

      function start() {
        $scope.isStop = false;
        $scope.step = 2;
        safeApply($scope);

        var target = angular.copy($scope.moveTo);
        var items = angular.copy($scope.items).filter((item) => {
          if (fromInfo.bucketName !== target.bucket) {
            return true;
          }
          var entries = [target.key, item.name].filter((name) => name);
          var path = entries.map((name) => name.replace(/^\/*([^/].+[^/])\/*$/, '$1'));
          if (item.itemType === 'folder') {
            return item.path !== path + '/';
          }
          return item.path !== path;
        });

        if (items.length === 0) {
          cancel();
          callback();
          return;
        }

        AuditLog.log('moveOrCopyFilesStart', {
          regionId: fromInfo.regionId,
          from: items.map((item) => {
            return { bucket: item.bucket, path: item.path };
          }),
          to: {
            bucket: target.bucket,
            path: target.key
          },
          type: isCopy ? 'copy' : 'move'
        });

        //复制 or 移动
        QiniuClient.moveOrCopyFiles(fromInfo.regionId, items, target, (prog) => {
          //进度
          $scope.progress = angular.copy(prog);
          safeApply($scope);
        }, isCopy, renamePath).then((terr) => {
          //结果
          $scope.step = 3;
          $scope.terr = terr;
          AuditLog.log('moveOrCopyFilesDone');
          callback();
          safeApply($scope);
        });
      }
    }
  ]);
