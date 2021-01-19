angular.module('web')
  .controller('customizeCloudModalCtrl', ['$scope', '$translate', '$uibModalInstance', 'Config', 'QiniuClient',
    function ($scope, $translate, $modalInstance, Config, QiniuClient) {
      const T = $translate.instant;

      let config = { ucUrl: '', regions: [{}] };
      if (Config.exists()) {
        try {
          config = Config.load(false);
        } catch (e) {
          // do nothing;
        }
      }
      config.regions.forEach((region) => {
        if (region.s3Urls && region.s3Urls.length > 0) {
          region.endpoint = region.s3Urls[0];
        }
      });

      angular.extend($scope, {
        editRegions: editRegions,
        queryAvailable: false,
        ucUrl: config.ucUrl,
        regions: config.regions,
        addRegion: addRegion,
        removeRegion: removeRegion,
        onSubmit: onSubmit,
        cancel: cancel,
        onUcUrlUpdate: onUcUrlUpdate,
      });
      normalizeRegions();
      onUcUrlUpdate();

      function editRegions() {
        return $scope.regions && $scope.regions.length || !$scope.queryAvailable;
      }

      function onUcUrlUpdate() {
        if (!$scope.ucUrl) {
          $scope.queryAvailable = false;
          normalizeRegions();
          return;
        }
        const ucUrl = $scope.ucUrl;
        QiniuClient.isQueryRegionAPIAvaiable($scope.ucUrl).then((result) => {
          if (ucUrl === $scope.ucUrl) {
            $scope.queryAvailable = result;
            normalizeRegions();
          }
        }, (err) => {
          if (ucUrl === $scope.ucUrl) {
            $scope.queryAvailable = false;
            normalizeRegions();
          }
        });
      }

      function normalizeRegions() {
        if (($scope.regions === null || $scope.regions.length === 0) && !$scope.queryAvailable) {
          $scope.regions = [{}];
        }
      }

      function addRegion() {
        if ($scope.regions === null) {
          $scope.regions = [];
        }
        $scope.regions.push({});
      }

      function removeRegion(index) {
        if ($scope.regions === null) {
          $scope.regions = [];
        }
        $scope.regions.splice(index, 1);
      }

      function onSubmit(form) {
        if (!form.$valid) return false;

        let ucUrl = $scope.ucUrl;
        let regions = null;
        if (editRegions()) {
          regions = angular.copy($scope.regions);
          regions.forEach((region) => {
            if (region.endpoint) {
              region.s3Urls = [region.endpoint];
            }
          });
        }
        Config.save(ucUrl, regions);
        cancel();
      }

      function cancel() {
        $modalInstance.dismiss('close');
      }
    }
  ]);
