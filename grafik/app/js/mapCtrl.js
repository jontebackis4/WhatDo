// Search controller that we use whenever we have a search inputs
// and search results
whatDoApp.controller('mapCtrl', function ($scope,WhatDo) {

  $scope.init = function() {

    //Create styles for the map
    var mapStyleArray = [
      {
        "stylers": [
        { "visibility": "off" }
        ]
      }
      ];

      //Create map options
      var options ={
      center: {
        lat: 62.573276,
        lng: 16.942265
      },
      zoom: 4,
      maxZoom: 7,
      minZoom: 4,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOption: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
        style: google.maps.ZoomControlStyle.Small
      },
      streetViewControl: false,
      mapTypeControl: false,
      styles: mapStyleArray,
      backgroundColor: "#ccffcc"
      };

      //Create a map and bind it to 'map-canvas'
      var map = new google.maps.Map(document.getElementById('map-canvas'), options);

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
        }]
      });

      layer.setMap(map);


      //Create PlaceService 

      placeService = new google.maps.places.PlacesService(map);

      var towns = WhatDo.towns;

      //Create marker for a list of towns
      for(key in towns){
        createMarker(towns, key)
      }
     
      //List with interests from service     
      var interests = WhatDo.getInterests();
      var searchTerms = WhatDo.getSearchTerms();
      console.log(interests);
      
      function createMarker(towns, key){
        var marker = new google.maps.Marker({
          position: towns[key],
          map: map,
          Title: key
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
      //Add listener to marker





      function callback(result, status, interest){
        $scope.$apply(function(){
          WhatDo.setDisplayDict(result, interest);
        });
      }
      
  }

  $scope.interestList = WhatDo.getInterests();

  $scope.displayDict = WhatDo.displayDict;

});

