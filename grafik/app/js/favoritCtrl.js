
whatDoApp.controller('favoritCtrl', function ($scope, $rootScope, WhatDo, fbService, auth) {
	/*WhatDo.addFavourite("1336");*/
	
	$scope.checkResult = function(){
		if(Object.keys(WhatDo.favourites).length === 0){
			return true;
		}
		else{
			return false;
		}
	}

	$scope.$on("update", function(){
		$scope.favouriteDict = WhatDo.favourites;
	})
	$scope.favouriteDict = WhatDo.favourites;
});
