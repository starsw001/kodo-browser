angular.module('web')
  .controller('pictureModalCtrl', ['$scope', '$uibModalInstance', '$timeout', '$uibModal', 'showFn', 'selectedDomain', 'QiniuClient', 'bucketInfo', 'objectInfo','AuthInfo', 'fileType',
    function ($scope, $modalInstance, $timeout, $modal, showFn, selectedDomain, QiniuClient, bucketInfo, objectInfo, AuthInfo, fileType) {

      angular.extend($scope, {
        bucketInfo: bucketInfo,
        objectInfo: objectInfo,
        fileType: fileType,
        afterCheckSuccess: afterCheckSuccess,

        previewBarVisible: false,
        showFn: showFn,
        cancel: cancel,

        MAX_SIZE: 5 * 1024 * 1024 //5MB
      });

      function afterCheckSuccess() {
        $scope.previewBarVisible = true;
        if (objectInfo.size < $scope.MAX_SIZE) {
          getContent();
        }
      }

      function cancel() {
        $modalInstance.dismiss('close');
      }

      function getContent() {
        selectedDomain.domain.signatureUrl(objectInfo.path).then((url) => {
          $scope.imgsrc = url.toString();
        });
      }
    }
  ]);
