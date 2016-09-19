whatDoApp.controller('interestsCtrl', function ($scope, WhatDo, fbService) {
	
	$scope.initFavourites = function(){
	    fbService.getFavourites().then(function(response){
	      
		    if(response[0]){
		        for(var res in response[0]){
		          	if(!(res.charAt(0) == "$")){
		            	WhatDo.favourites[res] = response[0][res];
		          	}
		        }
	    	}
	      
	   	});
	}

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

	$scope.resetDisplayDict = function(){
    	WhatDo.resetDisplayDict();
  	};
});