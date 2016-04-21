whatDoApp.controller('favoritCtrl', function ($scope, WhatDo,  auth) {
	console.log(WhatDo.favourites);
	console.log(auth);
	//WhatDo.addFavourite("1337");
	WhatDo.getFavourites();
	console.log(WhatDo.favourites);

});
