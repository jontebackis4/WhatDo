
whatDoApp.controller('modalCtrl', ['$scope', '$uibModal', 'WhatDo', function($scope, $uibModal, WhatDo){

	$scope.getPlaceInfo = function(placeId){
		WhatDo.selectedPlaceId = placeId;
		var request = {
			placeId: placeId
		};

	    WhatDo.placeService.getDetails(request, callbackPlaceInfo)
	};

    function callbackPlaceInfo(place, status){
    	console.log(place);
    	$scope.$apply(function(){
    		WhatDo.selectedPlaceInfo = place;
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