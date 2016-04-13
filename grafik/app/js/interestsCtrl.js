// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
whatDoApp.controller('interestsCtrl', function ($scope, WhatDo) {
	
	$scope.addInterest = function(interest){
		WhatDo.addInterest(interest);
	}
	
	$scope.setBtn = function(value) {
		if (value){
			return 'btn btn-default btn-lg knappar';
		}else{
			return'btn btn-default btn-lg knappTryckt';
		}
	}

	$scope.btnStatus = function(btn){
		return WhatDo.getBtnStatus(btn);
	}

	$scope.btnSwitch = function(btn){
		WhatDo.setBtnStatus(btn);
	}
});