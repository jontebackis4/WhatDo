(function(window, google) {
  
	//Create styles for the map
	var mapStyleArray = [
		{
			"stylers": [
			{ "visibility": "off" }
			]
		}/*,

		{
			"featureType": "water",
			"stylers": [ 
				{ "visibility": "on" } 
			]
		}*/
	];

	/*[ 
		{
			"featureType": "landscape",
			"stylers": [ 
				{ "visibility": "off" } 
			] 
		}, { 
			"featureType": "road",
			"stylers": [ 
				{ "visibility": "off" } 
			] 
		}, { 
			"featureType": "poi",
			"stylers": [ 
				{ "visibility": "off" } 
			] 
		}
	];*/

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
		styles: mapStyleArray
	};

	//Create a map and bind it to 'map-canvas'

	map = new google.maps.Map(document.getElementById('map-canvas'), options);


	//Create a fusion table layer to highlight sweden

	var layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'geometry',
			from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
			where: "ISO_2DIGIT IN ('SE')"
		},
		styles: [{
			polygonOptions: {
				fillColor: '#e6e6e6',
				fillOpacity: 0.3
			}
		}, {
			where: "ISO_2DIGIT IN ('SE')",
			polygonOptions: {
				fillColor: '#00ff00',
				fillOpacity: 0.3
			}
		}]
	});

	layer.setMap(map);
  
}(window, google));

/*
	-Skapa en funktion som skapar marker på en viss lng&lat. Kolla events i guider.
	-Det går att logga in med google-konto s¨att information sparas.
	-Det finns något i bokmärken som kanske kan fungera för att göra snyggare karta.
	-Lägg till .gitignore med textfil för att skriva vad du tänker.
	-Skapa marker för Stockholm, Göteborg och Malmö och kör funktion om man klickar på marker
	-On hover på marker, visa stadsnamn
*/