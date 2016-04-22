whatDoApp.controller('favoritCtrl', function ($scope, WhatDo, fbService, auth) {
	/*WhatDo.addFavourite("1336");*/
	
	fbService.getFavourites().then(function(response){
		console.log(response);
	})
	$scope.favouriteDict = WhatDo.favourites;
});
