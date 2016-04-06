// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  //$routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
	Dinner.Dish.get({id:$routeParams.dishId},function(data){
    	$scope.cdo=data;
   	},function(data){
    	$scope.status = "There was an error";
   	});

 $scope.add = function() {
   $scope.status = "Adding dish to menu...";
   Dinner.addDishToMenu($scope.cdo);
   $scope.status = "Dish added to menu!";
   };


});