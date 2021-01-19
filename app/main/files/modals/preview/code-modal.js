angular.module('web')
  .controller('codeModalCtrl', ['$scope', '$uibModalInstance','$translate','$timeout', '$uibModal', 'bucketInfo', 'objectInfo', 'selectedDomain',
             'fileType', 'showFn', 'reload', 'Toast', 'DiffModal', 'QiniuClient',
    function ($scope, $modalInstance,$translate, $timeout, $modal, bucketInfo, objectInfo, selectedDomain, fileType, showFn, reload, Toast, DiffModal, QiniuClient) {
      const T = $translate.instant,
            urllib = require('urllib');
      angular.extend($scope, {
        bucketInfo: bucketInfo,
        objectInfo: objectInfo,
        fileType: fileType,
        afterCheckSuccess: afterCheckSuccess,

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

      function saveContent() {
        var originalContent = $scope.originalContent;
        var v = editor.getValue();
        $scope.content = v;

        if (originalContent != v) {
          DiffModal.show('Diff', originalContent, v, function (v) {
            Toast.info(T('saving')); //'正在保存...'

            QiniuClient.saveContent(bucketInfo.regionId, bucketInfo.bucketName, objectInfo.path, v).then(function (result) {
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
        QiniuClient.getContent(bucketInfo.regionId, bucketInfo.bucketName, objectInfo.path, selectedDomain.domain.toQiniuDomain()).then((data) => {
          $scope.originalContent = data;
          $scope.content = data;
          editor.setValue(data);
        }).finally(() => {
          $scope.isLoading = false;
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
