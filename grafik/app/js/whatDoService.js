
whatDoApp.factory('WhatDo',function ($resource, $firebaseArray, auth) {
	/*The arrays under are synched such as interest [1] is the result [1]*/

  	this.marker;
  	this.interests = [];
  	this.displayDict = {};
    this.favourites = [];
    
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
  	Nöjesfält : ["amusement_park"], 
		Djur : ["aquarium","zoo"],
		Konst: ["art_gallery"],
		Nattliv : ["bar", "night_club"],
		Museum : ["museum"],
		Shopping : ["shopping_mall"],
		Bio : ["movie_theater" ],
		Bowling : ["bowling_alley"],
		Parker: ["park"],
		Byggnader:["mosque","church", "synagogue", "hindu_temple", "city_hall" ],
		Kyrkogård : ["cemetery"],
		Fika: ["cafe"],
		Mat: ["restaurant"], 
		Litteratur: ["library"]
  	};

    /*adds an id(string) to favourites(array), if it alredy exists it returns true then synch with firebase*/
    this.addFavourite = function(id){
      for(var i = 0; i < this.favourites.length; i++){
        if(this.favourites[i] === id){
          return true;
        }
      }
      this.favourites.push(id);
    }

    /*remove an id(string), then synch with firebase*/
    this.removeFavourite = function(id){
      for(var i = 0; i < this.favourites.length; i++){
        if(this.favourites[i] === id){
          this.favourites.splice(i, 1);
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