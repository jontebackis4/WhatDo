
whatDoApp.factory('WhatDo',function ($resource) {

	/*The arrays under are synched such as interest [1] is the result [1]*/
  	this.bin;
  	this.interests = [];
  	this.displayDict = {};
  	this.searchTerms = {
  	Nöjesfält : ["amusement_park"], 
		Djur : ["aquarium","zoo"],
		Konst: ["art_gallery"],
		Nattliv : ["bar", "night_club"],
		Museum : ["museum"],
		Shopping : ["shopping_mall"],
		Bio : ["movie_theater" ],
		Sport: ["bowling_alley"],
		Parker: ["park"],
		Byggnader:["mosque","church", "synagogue", "hindu_temple", "city_hall" ],
		Kyrkogård : ["cemetery"],
		Fika: ["cafe"],
		Mat: ["restaurant"], 
		Litteratur: ["library"]
  	};

  	/*Interest is a string and result is an array with googlePlaces/Maps-objects*/
  	this.getSearchTerms = function(){
  		return this.searchTerms;
  	}

  	this.resetCityData = function(){
  		this.interests = [];
  		this.interestInfo = [];
  	}

  	this.setInterestInfo = function(result, interest){
      console.log(result);
  		if(Array.isArray(this.displayDict[interest])){
	  		for (var i = 0; i < result.length; i++) {
	  			this.displayDict[interest].push(result[i]);
	  		}
  		}
  		else{
  			this.displayDict[interest] = [];
	  		for (var i = 0; i < result.length; i++) {
	  			this.displayDict[interest].push(result[i]);
	  		}
  		}
  		console.log(this.displayDict);
  	}
  	
  	this.getDisplayDict = function(){
  		return this.displayDict;
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