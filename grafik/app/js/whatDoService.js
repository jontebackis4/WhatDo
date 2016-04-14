
whatDoApp.factory('WhatDo',function ($resource) {
	/*The arrays under are synched such as interest [1] is the result [1]*/
  	this.bin;
  	this.interests = [];
  	this.displayDict = {};
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
	  			this.displayDict[interest].push(result[i]);
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

    this.towns = {
      'Göteborg': {lat: 57.708859, lng: 11.974583},
      'Stockholm': {lat: 59.329324, lng: 18.068604},
      'Malmö': {lat: 55.604971, lng: 13.003902},
      'Uppsala': {lat: 42.032970, lng: 23.554690},
      'Pajala': {lat: 67.212805, lng: 23.367330},
      'Jönköping': {lat: 57.782614, lng: 14.161788},
      'Karlstad': {lat: 59.402181, lng: 13.511498}, 
      'Karlskrona': {lat: 56.161224, lng: 15.586900},
      'Kalmar': {lat: 56.663445, lng: 16.356779},
      'Visby': {lat: 57.634800, lng: 18.294840},
      'Sundsvall': {lat: 62.390811, lng: 17.306926},
      'Umeå': {lat: 63.825847, lng: 20.263034},
      'Skellefteå': {lat: 64.750244, lng: 20.950917},
      'Lund': {lat: 55.704660, lng: 13.191006},
      'Luleå': {lat: 65.584819, lng: 22.156703},
      'Falun': {lat: 60.606460, lng: 15.635500},
      'Gävle':{lat: 60.674879, lng: 17.141272},
      'Mora': {lat: 61.004878, lng: 14.537003},
      'Östersund': {lat: 63.176684, lng: 14.636068},
      'Kiruna': {lat: 67.855799, lng: 20.225282},
      'Örebro': {lat: 59.275262, lng: 15.213411},
      'Linköping': {lat: 58.410807, lng: 15.621374},
      'Norrköping': {lat: 58.587744, lng: 16.192421},
      'Västerås': {lat: 59.609900, lng: 16.544809},
      'Torpshammar': {lat: 62.475592, lng: 16.324513},
      'Björklinge': {lat: 60.031777, lng: 17.552102}
    }


  	return this;
});