
whatDoApp.factory('fbService',function ($resource, $firebaseArray, auth) {
console.log("firebase service");
	//var users = new Firebase("https://sverigeguiden.firebaseio.com/users");
	//var users = $firebaseArray(users);
	
	this.addUser = function (){
		var users = new Firebase("https://worldguide.firebaseio.com/users");
		var users = $firebaseArray(users);
		users.$add({'namn': "emmeli"});
	}

	this.addSpecificUser = function (username){
	var users = new Firebase("https://worldguide.firebaseio.com/users/" + username);
		
	users.set({name: username,
			favoritplats: ['hej', 'grisfest','heeeej']});
	}

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
		});
		
	}



	
	return this;

});
