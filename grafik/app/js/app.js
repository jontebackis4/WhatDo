// We setup the main Angular model that we will use for our application
// Good Angular practice is to organize your code in different modules, 
// for instance, one module per feature. However, since our App is
// simple we will keep all the code in the "dinnerPlanner" module
//
// Notice the 'ngRoute' and 'ngResource' in the module declaration. Those are some of the core Angular
// modules we are going to use in this app. If you check the index.html you will
// also see that we included separate JavaScript files for these modules. Angular
// has other core modules that you might want to use and explore when you go deeper
// into developing Angular applications. For this lab, these two will suffice.



var whatDoApp = angular.module('whatDo', ['ngRoute','ngResource', 'firebase', 'auth0', 'angular-storage', 'angular-jwt', 'ui.bootstrap']);

whatDoApp.config(['$routeProvider', 'authProvider', '$locationProvider',
  function($routeProvider, authProvider, $locationProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        pageTitle: 'Home',
        controller: 'homeCtrl'
      }).
      when('/interests', {
        templateUrl: 'partials/interests.html',
        pageTitle: 'Interests',
        controller: 'interestsCtrl',
        requiresLogin: true
      }).
      when('/search', {
        templateUrl: 'partials/map.html',
        pageTitle: 'Search',
        controller: 'mapCtrl',
        requiresLogin: true
      }).
      when('/favorit', {
      templateUrl: 'partials/favorit.html',
      controller: 'favoritCtrl',
      requiresLogin: true
      }).
      when('/current', {
      templateUrl: 'partials/current.html',
      requiresLogin: true
      }).
      otherwise({
        redirectTo: '/home',
      });

    authProvider.init({
      domain: 'whatdo.eu.auth0.com',
      clientID: 'RbZdbivO8xiFCv3XLo7rNO0zi56luzgR',
      callbackUrl: location.href,
      loginUrl: '/home'
    });

    authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
      console.log("Login Success");
      profilePromise.then(function(profile) {
        store.set('profile', profile);
        store.set('token', idToken);
      });
      $location.path('/interests');
    });

    authProvider.on('loginFailure', function() {
       console.log("Error login");
    });
  }])
  .run(function($rootScope, auth, store, jwtHelper, $location){
    auth.hookEvents();

    var refreshingToken = null;
    $rootScope.$on('$locationChangeStart', function() {
      var token = store.get('token');
      var refreshToken = store.get('refreshToken');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (!auth.isAuthenticated) {
            auth.authenticate(store.get('profile'), token);
          }
        } else {
          // Either show the login page or use the refresh token to get a new idToken
          if (refreshToken) {
            if (refreshingToken === null) {
                refreshingToken =  auth.refreshIdToken(refreshToken).then(function(idToken) {
                  store.set('token', idToken);
                  auth.authenticate(store.get('profile'), idToken);
                }).finally(function() {
                    refreshingToken = null;
                });
            }
            return refreshingToken;
          } else {
            $location.path('/home');
          }
        }
      }
    });
  });