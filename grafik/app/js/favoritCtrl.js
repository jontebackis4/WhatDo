
whatDoApp.controller('favoritCtrl', function ($scope, $rootScope, $location, WhatDo, fbService, auth) {
	/*WhatDo.addFavourite("1336");*/
	
	if (WhatDo.interests.length === 0){
    	$location.path("/interests");
  	}

	$scope.checkResult = function(){
		if(Object.keys(WhatDo.favourites).length === 0){
			return true;
		}
		else{
			return false;
		}
	}

	$scope.favouriteDict = function(){
		return WhatDo.favourites;
	}

});
