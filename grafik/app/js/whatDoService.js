

whatDoApp.factory('WhatDo',function ($resource, auth, $rootScope) {
	/*The arrays under are synched such as interest [1] is the result [1]*/
  	this.selectedPlaceId;
    this.selectedPlaceInfo;
    this.placeService;
    this.marker;
  	this.interests = [];
  	this.displayDict = {};
    this.favourites = {};
    
    this.btnStatus = {
      'btn1': true,
      'btn2': true,
      'btn3': true,
      'btn4': true,
      'btn5': true, 
      'btn6': true,
      'btn7': true,
      'btn8': true,
      'btn9': true,
      'btn10': true,
      'btn11': true,
      'btn12': true,
      'btn13': true,
      'btn14': true
    }
  	this.searchTerms = {
  	'AMUSEMENT PARKS' : ["amusement_park"], 
		'ZOO' : ["aquarium","zoo"],
		'ART GALLERIES': ["art_gallery"],
		'CLUBS & BARS' : ["bar", "night_club"],
		'MUSEUM' : ["museum"],
		'SHOPPING' : ["shopping_mall"],
		'MOVIE THEATER' : ["movie_theater" ],
		'BOWLING' : ["bowling_alley"],
		'PARKS': ["park"],
		'ARCHITECTURE':["mosque","church", "synagogue", "hindu_temple", "city_hall" ],
		'CEMETERY' : ["cemetery"],
		'CAFÉ': ["cafe"],
		'RESTAURANTS': ["restaurant"], 
		'LIBRARY': ["library"]
  	};

    /*adds an id(string) to favourites(array), if it alredy exists it returns true then synch with firebase*/
    this.addFavourite = function(id, name){
      for(var fav in  this.favourites){
        if(this.favourites[fav] === id){
          return true;
        }
      }
      this.favourites[name] = id;
    }

    /*remove an id(string), then synch with firebase*/
    this.removeFavourites = function(id, name){
      for(var fav in  this.favourites){
        if(this.favourites[fav] === id && fav === name){
          delete this.favourites[fav];
          break;
        }
      }
    }

  	/*Interest is a string and result is an array with googlePlaces/Maps-objects*/
  	this.getSearchTerms = function(){
  		return this.searchTerms;
  	}

    this.getBtnStatus = function(btn) {
      return this.btnStatus[btn];
    }

    this.setBtnStatus = function(btn){
      this.btnStatus[btn] = !this.btnStatus[btn];
    }

  	this.resetCityData = function(){
  		this.interests = [];
  		this.interestInfo = [];
  	}

  	this.setDisplayDict = function(result, interest){
      if(result){
    		if(Array.isArray(this.displayDict[interest])){
  	  		for (var i = 0; i < result.length; i++) {
  	  			this.displayDict[interest].push(result[i])
  	  		}
    		}
    		else{
    			this.displayDict[interest] = [];
  	  		for (var i = 0; i < result.length; i++) {
  	  			this.displayDict[interest].push(result[i]);
  	  		}
    		}
      }
  	}
  	
  	this.getDisplayDict = function(){
  		return this.displayDict;
  	}

    this.resetDisplayDict = function(){
      for (var interest in this.displayDict){
        delete this.displayDict[interest];
      }
    }

  	this.getInterestInfo = function(){
  		return this.interestInfo;
  	}


  	this.addInterest = function(interest){
  		var found = false;
  		for(i = 0; i < this.interests.length; i++){
  			if(this.interests[i] === interest){
  				found = true;
  				this.interests.splice(i, 1);
  				break;
  			}
  		}
  		if (found === false){
  			this.interests.push(interest);
  		}
  	}

  	this.getInterests = function(){
  		return this.interests;
  	}

    this.update = function(){
      $rootScope.$broadcast('update');
    }

  	return this;
});