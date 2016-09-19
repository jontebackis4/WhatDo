
whatDoApp.controller('modalCtrl', ['$scope', '$uibModal', 'WhatDo', function($scope, $uibModal, WhatDo){

	$scope.getPlaceInfo = function(placeId){
		WhatDo.selectedPlaceId = placeId;
		var request = {
			placeId: placeId
		};
		WhatDo.loadingModal = 1;
	    WhatDo.placeService.getDetails(request, callbackPlaceInfo)
	};

    function callbackPlaceInfo(place, status){
    	$scope.$apply(function(){
    		WhatDo.selectedPlaceInfo = place;
    		WhatDo.loadingModal = 0;
    	});
    };

	$scope.open = function(size){

		WhatDo.selectedPlaceInfo = null;

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/placeInfo.html',
			controller: 'modalInstanceCtrl',
			size: size,
		});
	}
}])