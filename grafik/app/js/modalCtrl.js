
whatDoApp.controller('modalCtrl', ['$scope', '$uibModal', 'WhatDo', function($scope, $uibModal, WhatDo){

	$scope.getPlaceInfo = function(placeId){
		//$scope.loading = true;
		WhatDo.selectedPlaceId = placeId;
		var request = {
			placeId: placeId
		};

	    WhatDo.placeService.getDetails(request, callbackPlaceInfo)
	};

    function callbackPlaceInfo(place, status){
    	$scope.$apply(function(){
    		$scope.loading = false;
    		WhatDo.selectedPlaceInfo = place;
    	});
    };

    //$scope.loading = false;

	$scope.open = function(size){

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/placeInfo.html',
			controller: 'modalInstanceCtrl',
			size: size,
			resolve: {
				loading = function() {
					return $scope.loading;
				}
			}

			modalInstance.result.then(function (loading) {
		      $scope.loading = loading;
		    });
		});
	}
}])