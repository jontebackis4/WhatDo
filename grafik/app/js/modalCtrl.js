
whatDoApp.controller('modalCtrl', ['$scope', '$uibModal', 'WhatDo', function($scope, $uibModal, WhatDo){

	$scope.getPlaceInfo = function(placeId){
		console.log(placeId);
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
    	})
    };

	$scope.open = function(size){

		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'partials/placeInfo.html',
			controller: 'modalInstanceCtrl',
			size: size,
		});

		//modalInstance.result.then(function())
	}
}])