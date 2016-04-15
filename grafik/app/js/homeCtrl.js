whatDoApp.controller("homeCtrl", function($scope, WhatDo, fbService, auth) {
  console.log("i homectrl");

  $scope.setUser = function (){
    fbService.addUser();
  };

  $scope.setspcUser = function (){
    fbService.addSpecificUser("Jonas");
  };

  $scope.auth = auth;


});