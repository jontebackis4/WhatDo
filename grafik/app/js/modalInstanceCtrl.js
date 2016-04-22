whatDoApp.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', 'WhatDo', 'fbService', function($scope, $uibModalInstance, WhatDo, fbService) {

	$scope.info = WhatDo.selectedPlaceInfo;

	$scope.$on('update', function(){
		$scope.info = WhatDo.selectedPlaceInfo;
	});

	$scope.getPhoto = function(photos){
		return photos[0].getUrl({'maxWidth': photos[0].width, 'maxHeight': photos[0].height});
	};
	
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