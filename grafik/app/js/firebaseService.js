
whatDoApp.factory('fbService',function ($resource, $firebaseArray) {
console.log("firebase service");
	//var users = new Firebase("https://sverigeguiden.firebaseio.com/users");
	//var users = $firebaseArray(users);

	this.addUser = function (){
		var users = new Firebase("https://sverigeguiden.firebaseio.com/users");
		var users = $firebaseArray(users);
		users.$add({'namn': "emmeli"});
	}

		this.addSpecificUser = function (username){
		var users = new Firebase("https://sverigeguiden.firebaseio.com/users/" + username);
		
		users.set({name: username,
			favoritplats: ['hej', 'grisfest','heeeej']});
	}



	
	return this;

});
