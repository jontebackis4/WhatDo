(function(window, google) {
  
	//Create styles for the map
	var mapStyleArray = [
		{
			"stylers": [
			{ "visibility": "off" }
			]
		}
	];

	//Create map options
	//Det går ändra så att det inte går att dra i kartan eller zooma med scrollern.

	var options ={
		center: {
			lat: 62.173276,
			lng: 14.942265
		},
		zoom: 5,
		disableDefaultUI: false,
		maxZoom: 7,
		minZoom: 4,
		zoomControl: true,
		zoomControlOption: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM,
			style: google.maps.ZoomControlStyle.Small
		},
		streetViewControl: false,
		mapTypeControl: false,
		styles: mapStyleArray,
		backgroundColor: "#00ff00"
	};

	//Create a map and bind it to 'map-canvas'

	map = new google.maps.Map(document.getElementById('map-canvas'), options);


	//Create a fusion table layer to highlight sweden

	var layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'geometry',
			from: '1tv_FBqVJNF2q0yqZJiS1YAw3kpNDsfifBtQp7ns',
			where: "'Countryname' = 'Sweden'"
		},
		styles: [{
			polygonOptions: {
				fillColor: '#00ff00',
				fillOpacity: 0.3
			}
		}/*, {
			where: "ISO_2DIGIT IN ('SE')",
			polygonOptions: {
				fillColor: '#00ff00',
				fillOpacity: 0.3
			}
		}*/]
	});

	layer.setMap(map);


	//Create PlaceService 

	service = new google.maps.places.PlacesService(map);


	//Create marker for Göteborg

	var GBG = {lat: 57.708859, lng: 11.974583};

	var marker = new google.maps.Marker({
		position: GBG,
		map: map,
		Title: 'Göteborg'
	});

	var request = {
		location: GBG,
		radius: 10000,
		types: ['library']
	};

	//Add listener to marker

	marker.addListener('click', function(){
		service.nearbySearch(request, callback);
	});

	function callback(result, status){
		console.log(status);
		console.log(result);
	};
  
}(window, google));

      //Create a fusion table layer to highlight sweden

      /*var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'geometry',
          from: '1tv_FBqVJNF2q0yqZJiS1YAw3kpNDsfifBtQp7ns',
          where: "'Countryname' = 'Sweden'"
        },
        styles: [{
          polygonOptions: {
            fillColor: '#00ff00',
            fillOpacity: 0.3
          }
        }]
      });

      layer.setMap(map);*/

      //Create marker for a list of towns
      /*for(key in towns){
        createMarker(towns, key)
      }*/

/*    this.towns = {
      'Göteborg': {lat: 57.708859, lng: 11.974583},
      'Stockholm': {lat: 59.329324, lng: 18.068604},
      'Malmö': {lat: 55.604971, lng: 13.003902},
      'Uppsala': {lat: 59.858564, lng: 23.554690},
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
      'Björklinge': {lat: 60.031777, lng: 17.552102},
      'Åre': {lat: 63.399042, lng: 13.081506}
    }

      function createMarker(towns, key){
        var marker = new google.maps.Marker({
          position: towns[key],
          map: map,
          Title: key,
          draggable: true
        });

        marker.addListener('click', function(){
          WhatDo.resetDisplayDict();
          for(var i = 0; i < interests.length; i++){
            (function(i){
              for(j = 0; j < searchTerms[interests[i]].length; j++){
                console.log(searchTerms[interests[i]][j]);
                var request = {
                  location: towns[key],
                  radius: 10000,
                  types:  [searchTerms[interests[i]][j]]
                };
                placeService.nearbySearch(request, function(result, status){
                  callback(result, status, interests[i])
                })
              }
            })(i);
          }
        }); 
      };

	<a class="info" data-toggle="modal" data-target="#myModal">{{place.name}}</a>

      */