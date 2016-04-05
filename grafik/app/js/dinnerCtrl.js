// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

	// NUMBER OF GUESTS!
  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }


  // FULL MENU!!!
  $scope.menu = Dinner.getFullMenu();

  $scope.getFullMenu = function(){
    return Dinner.getFullMenu();
  }


  // PRICE !!

  //en rätt
  try{
  //$scope.price = Dinner.getDishPrice(object);

    $scope.getDishPrice = function(obj){
    return Dinner.getDishPrice(obj);
  }
	}
catch (err){
	console.log(err);
}


  //alla rätter på den valda menyn.
  /*$scope.totalPrice = Dinner.getTotalMenuPrice();

  $scope.getTotalMenuPrice = function(){
    return Dinner.getTotalMenuPrice();
  }
*/

});