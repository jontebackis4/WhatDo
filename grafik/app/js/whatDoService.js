

whatDoApp.factory('WhatDo',function ($resource, auth, $rootScope) {

  	this.loadingMap = 0;
    this.loadingModal = 0;
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
  	'Amusement parks' : ["amusement_park"], 
		'Zoo' : ["aquarium","zoo"],
		'Art galleries': ["art_gallery"],
		'Clubs & Bars' : ["bar", "night_club"],
		'Museum' : ["museum"],
		'Shopping' : ["shopping_mall"],
		'Movie theater' : ["movie_theater" ],
		'Bowling' : ["bowling_alley"],
		'Parks': ["park"],
		'Architecture':["mosque","church", "synagogue", "hindu_temple", "city_hall" ],
		'Cemetery' : ["cemetery"],
		'Café': ["cafe"],
		'Restaurants': ["restaurant"], 
		'Library': ["library"]
  	};

    
  this.getNrOfCalls= function(){
    var calls = 0;
    for(var i = 0; i < this.interests.length; i++){
      for(var j = 0; j < this.searchTerms[this.interests[i]].length; j++){
        calls ++;
      }
    }
    return calls;
  }


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

  	return this;
});