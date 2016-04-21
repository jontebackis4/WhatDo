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
//jdsgksd

// Here we configure our application module and more specifically our $routeProvider. 
// Route provider is used to tell angular to load a specific partial (view) for an individual
// specific address that is provided in the browser. This enables us to change the browser address
// even if we are not reloading the page. We can also use back and forward button to navigate between
// our screens. The paths that you use in the conditions of $routeProvider will be shown in the address
// bar after the # sign. So, for instance, the home path will be 'http://localhost:8000/#/home'.
//
// In index.html you will notice the <div ng-view></div> tag. This is where the specific view sill be
// loaded. For instance when you go to http://localhost:8000/, since your path does not match any
// of the when conditions, the otherwise condition is triggered and tells the app to redirect to '/home'.
// The '/home' condition then loads the 'partials/home.html'. 
//
// Apart from specifying the partial HTML that needs to be loaded with your app, you can also specify which
// controller should be responsible for that view. In the controller you will setup the initial data or 
// access the data from the model and create the methods that you will link to events. Remember, controllers 
// can be nested, so you can have one controller responsible for the whole view, but then another one for 
// some sub part of the view. In such way you can reuse your controller on different parts of the view that 
// might have similar logic.
//
// In some cases we want the path to be variable (e.g. contain the dish id). To define the variable part of 
// the path we use the ":" sign. For instance, our '/dish/:dishId' will be triggered when we access 
// 'http://localhost:8000/#/dish/12345'. The 12345 value will be stored in a dishId parameter, which we can
// then access through $routeParams service. More information on this in the dishCtrl.js 
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

    $rootScope.$on('$locationChangeStart', function() {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (!auth.isAuthenticated) {
            auth.authenticate(store.get('profile'), token);
          }
        } else {
          // Either show the login page or use the refresh token to get a new idToken
          $location.path('/home');
        }
      }
    });
  });