(function(window, google) {
  
	//map options
	//Sätt max zoom och min zoom

	var options ={
		center: {
			lat: -34.834431,
			lng: 138.688760
		},
		zoom: 16
	}

	//map
	// Lägg till en tagg så att sverige är regionen som arbetas med.

	map = new google.maps.Map(document.getElementById('map-canvas'), options)
  
}(window, google));