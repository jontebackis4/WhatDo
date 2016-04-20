whatDoApp.controller("homeCtrl", function($scope, WhatDo, fbService, auth, store, $location) {

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

});