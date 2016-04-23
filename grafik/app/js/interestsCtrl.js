// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
whatDoApp.controller('interestsCtrl', function ($scope, WhatDo) {
	
	$scope.addInterest = function(interest){
		WhatDo.addInterest(interest);
	}
	
	$scope.setBtn = function(value) {
		if (value){
			return 'btn btn-default btn-lg theBtn';
		}else{
			return'btn btn-default btn-lg presBtnt';
		}
	}

	$scope.toSearch = function(currentClass){
		var res = true;
		for (var k in WhatDo.btnStatus){
    		if (WhatDo.btnStatus.hasOwnProperty(k)) {
        		if(!WhatDo.btnStatus[k]){
        			res = false;
        		}
    		}
		}
		if(res){
			return currentClass + " disabled";
		}
		else{
			return currentClass;
		}
	}

	$scope.btnStatus = function(btn){
		return WhatDo.getBtnStatus(btn);
	}

	$scope.btnSwitch = function(btn){
		WhatDo.setBtnStatus(btn);
	}
});