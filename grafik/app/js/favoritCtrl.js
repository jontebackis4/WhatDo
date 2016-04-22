whatDoApp.controller('favoritCtrl', function ($scope, WhatDo, fbService, auth) {
	WhatDo.addFavourite("1336");
	WhatDo.addFavourite("1337");
	fbService.setFavourites(WhatDo.favourites);
	fbService.getFavourites().then(function(response){
		console.log(response);
	})
});
