
whatDoApp.factory('fbService',function ($resource, $firebaseArray, auth) {

	this.setFavourites = function(idDict){
		
		var users = new Firebase("https://worldguide.firebaseio.com/users/" + auth.profile.user_id);
		if(idDict){
			users.set({idDict});
		}
		
	}
	this.getFavourites = function(){
		var user =  new Firebase("https://worldguide.firebaseio.com/users/" + auth.profile.user_id);
		var user = $firebaseArray(user);
		return user.$loaded().then(function(response){
			return response;
		}, function(error){
			console.log("error i firebase");
		});
		
	}
	return this;

});
