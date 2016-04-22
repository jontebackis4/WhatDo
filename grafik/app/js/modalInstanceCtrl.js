whatDoApp.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', 'WhatDo', 'fbService', function($scope, $uibModalInstance, WhatDo, fbService) {

	$scope.info = WhatDo.selectedPlaceInfo;

	$scope.$on('update', function(){
		$scope.info = WhatDo.selectedPlaceInfo;
	});
	
	$scope.close = function(){
		$uibModalInstance.dismiss('close');
	};

	$scope.addFavourite = function(id, name){
		WhatDo.addFavourite(id, name);
		console.log(WhatDo.favourites);
		fbService.setFavourites(WhatDo.favourites);
	}

	$scope.removeFavourite = function(id, name){
		WhatDo.removeFavourites(id, name);
		console.log(WhatDo.favourites);
		fbService.setFavourites(WhatDo.favourites);
	}
}]);