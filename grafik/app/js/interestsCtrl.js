// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
whatDoApp.controller('interestsCtrl', function ($scope, WhatDo, fbService) {
	
	$scope.initFavourites = function(){
	    fbService.getFavourites().then(function(response){
	      
		    if(response[0]){
		        for(var res in response[0]){
		          	if(!(res.charAt(0) == "$")){
		            	console.log(res + "  " + response[0][res]);
		            	WhatDo.favourites[res] = response[0][res];
		          	}
		        }	
	        	WhatDo.update();
	    	}
	      
	   	});
	    $scope.$on("update", function(){
	      	$scope.favouriteDict = WhatDo.favourites;
	    })
	}

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