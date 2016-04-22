whatDoApp.controller("homeCtrl", function($scope, WhatDo, fbService, auth, store, $location) {
  
  $scope.isCollapsed = true;

  $scope.setUser = function (){
    fbService.addUser();
  };

  $scope.setspcUser = function (){
    fbService.addSpecificUser("Jonas");
  };

  $scope.auth = auth;

  $scope.logout = function() {
    console.log("LOGUT");
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

/* Emmeli */
  $scope.active = function(position){

    if (position == $location.path()){
      return {"text-shadow":"-1px -1px 0 #999999, 1px -1px 0 #999999,-1px 1px 0 #999999,1px 1px 0 #999999", "font-size":"20px", "color":"white"}
    }

    return {"background-color":"transparent"}
  }


});