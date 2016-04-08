// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
whatDoApp.factory('WhatDo',function ($resource) {
    // TODO in Lab 5: Add your model code from previous labs
  	// feel free to remove above example code
  	// you will need to modify the model (getDish and getAllDishes) 
  	// a bit to take the advantage of Angular resource service
  	// check lab 5 instructions for details

//TODO Lab 2 implement the data structure that will hold number of guest
  	// and selected dinner options for dinner menu

  	return this;
});