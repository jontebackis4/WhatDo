// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
whatDoApp.controller('interestsCtrl', function ($scope, WhatDo) {
	
	$scope.addInterest = function(interest){
		WhatDo.addInterest(interest);
	}
	
});