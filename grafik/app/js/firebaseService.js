
whatDoApp.factory('fbService',function ($resource, $firebaseArray, auth) {
console.log("firebase service");
	//var users = new Firebase("https://sverigeguiden.firebaseio.com/users");
	//var users = $firebaseArray(users);
	this.res;
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

	this.setFavourite = function(idList){
		var users = new Firebase("https://worldguide.firebaseio.com/users/" + auth.profile.clientID);
		users.set({idList})
	}
	this.getFavourites = function(){
		
		var user =  new Firebase("https://worldguide.firebaseio.com/users/" + auth.profile.clientID);
		user.child("idList").on("value", function(snapshot) {

		});
		
	}



	
	return this;

});
