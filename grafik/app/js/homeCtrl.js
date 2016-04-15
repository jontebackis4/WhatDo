whatDoApp.controller("homeCtrl", function($scope, WhatDo, fbService) {
  console.log("i homectrl");

  $scope.setUser = function (){
    fbService.addUser();
  };

  $scope.setspcUser = function (){
    fbService.addSpecificUser("Jonas");
  };


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

function signOut(gapi) {
  console.log(gapi);
    var auth2 = gapi.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

$scope.signIn = function (googleUser){
  onSignIn(googleUser);
}

$scope.signO = function (gapi){
  console.log(gapi);
  signOut(gapi);
}
/*
  var ref = new Firebase("https://sverigeguiden.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below

 var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");


  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);
  // login with Facebook
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });*/

});