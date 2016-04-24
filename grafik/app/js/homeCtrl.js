whatDoApp.controller("homeCtrl", function($scope, WhatDo, fbService, auth, store, $location) {
  
  $scope.isCollapsed = true;

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

  $scope.auth = auth;

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/home');
  }

  $scope.toSearch = function(){
    var res = true;
    for (var k in WhatDo.btnStatus){
      if (WhatDo.btnStatus.hasOwnProperty(k)) {
        if(!WhatDo.btnStatus[k]){
          res = false;
        }
      }
    }
    if(res){
      return "not-active";
    }
    else{
      return "";
    }
  }

  $scope.resetDisplayDict = function(){
    WhatDo.resetDisplayDict();
  };


  $scope.active = function(position){

    if (position == $location.path()){
      return {"text-shadow":"-1px -1px 0 #999999, 1px -1px 0 #999999,-1px 1px 0 #999999,1px 1px 0 #999999", "font-size":"20px", "color":"white"}
    }

    return {"background-color":"transparent"}
  }


});