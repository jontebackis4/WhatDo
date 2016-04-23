
whatDoApp.controller('favoritCtrl', function ($scope, $rootScope, WhatDo, fbService, auth) {
	/*WhatDo.addFavourite("1336");*/
	
	$scope.$on("update", function(){
		$scope.favouriteDict = WhatDo.favourites;
	})
	$scope.favouriteDict = WhatDo.favourites;
});
