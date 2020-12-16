angular.module('web')
  .controller('mediaModalCtrl', ['$scope', '$uibModalInstance', '$timeout','$sce', '$uibModal', 'QiniuClient', 'selectedDomain', 'showFn', 'bucketInfo', 'objectInfo', 'fileType',
    function ($scope, $modalInstance, $timeout, $sce, $modal, QiniuClient, selectedDomain, showFn, bucketInfo, objectInfo, fileType) {

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
        genURL();
      }

      function cancel() {
        $modalInstance.dismiss('close');
      }

      function genURL() {
        selectedDomain.domain.signatureUrl(objectInfo.path).then((url) => {
          $scope.src_origin = url.toString();
          $scope.src = $sce.trustAsResourceUrl(url.toString());

          $timeout(function(){
            const ele = $('#video-player');
            if(parseInt(ele.css('height')) > parseInt(ele.css('width'))){
               ele.css('height', $(document).height()-240);
               ele.css('width', 'auto');
            }
          }, 1000);
        });
      }
    }
  ]);
