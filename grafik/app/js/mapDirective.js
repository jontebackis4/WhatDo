//Contains the created directive for the map

whatDoApp.directive('map', function(){
	return{
		restrict: 'E',
		template: '<div></div>',
		replace: true,
		link: function(scope, element, attrs, ctrl){
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

			map = new google.maps.Map(document.getElementById(attrs.id), options);

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

		}
	};
});
