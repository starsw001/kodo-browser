angular.module('web')
  .controller('codeModalCtrl', ['$scope', '$uibModalInstance','$translate','$timeout', '$uibModal', 'bucketInfo', 'objectInfo', 'fileType', 'showFn', 'reload', 'Toast', 'DiffModal', 's3Client', 'downloadUrl',
    function ($scope, $modalInstance,$translate, $timeout, $modal, bucketInfo, objectInfo, fileType, showFn, reload, Toast, DiffModal, s3Client, downloadUrl) {
      const T = $translate.instant,
            urllib = require('urllib');
      angular.extend($scope, {
        bucketInfo: bucketInfo,
        objectInfo: objectInfo,
        fileType: fileType,
        afterCheckSuccess: afterCheckSuccess,
        afterRestoreSubmit: afterRestoreSubmit,

        previewBarVisible: false,
        showFn: showFn,

        cancel: cancel,
        getContent: getContent,
        saveContent: saveContent,
        //showDownload: showDownload,
        MAX_SIZE: 5 * 1024 * 1024
      });

      function afterCheckSuccess() {
        $scope.previewBarVisible = true;
        if (objectInfo.size < $scope.MAX_SIZE) {
          // 修复ubuntu下无法获取的bug
          $timeout(getContent, 100);
        }
      }

      function afterRestoreSubmit() {
        showFn.callback(true);
      }

      function saveContent() {
        var originalContent = $scope.originalContent;
        var v = editor.getValue();
        $scope.content = v;

        if (originalContent != v) {
          DiffModal.show('Diff', originalContent, v, function (v) {
            Toast.info(T('saving')); //'正在保存...'

            s3Client.saveContent(bucketInfo.region, bucketInfo.bucket, objectInfo.path, v).then(function (result) {
              Toast.success(T('save.successfully'));//'保存成功'
              cancel();
              reload();
            });
          });
        } else {
          Toast.info(T('content.isnot.modified')); //内容没有修改
        }
      }

      function getContent() {
        $scope.isLoading = true;
        urllib.request(downloadUrl, { method: 'GET' }, (err, body) => {
          $scope.isLoading = false;
          if (err) {
            Toast.error(err);
            return;
          }

          const data = body.toString();
          $scope.originalContent = data;
          $scope.content = data;
          editor.setValue(data);
        });
      }

      function cancel() {
        $modalInstance.dismiss('close');
      }

      $scope.codeOptions = {
        lineNumbers: true,
        lineWrapping: true,
        autoFocus: true,
        readOnly: false,
        mode: fileType.mode
      };

      var editor;
      $scope.codemirrorLoaded = function (_editor) {
        editor = _editor;
        // Editor part
        var _doc = _editor.getDoc();
        _editor.focus();

        // Options
        _editor.setSize('100%', 500);

        _editor.refresh();

        _doc.markClean();
      };

    }
  ]);
