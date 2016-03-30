(function(window, google) {
  
	//map options
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
		mapTypeControl: false
	}

	//map

	map = new google.maps.Map(document.getElementById('map-canvas'), options)
  
}(window, google));

/*
	-Skapa en funktion som skapar marker på en viss lng&lat. Kolla events i guider.
	-Det går att logga in med google-konto s¨att information sparas.
	-Läser på singed in maps.
*/