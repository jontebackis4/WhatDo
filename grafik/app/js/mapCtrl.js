// Search controller that we use whenever we have a search inputs
// and search results
whatDoApp.controller('mapCtrl', function ($scope,WhatDo) {

  $scope.init = function() {

      //Create map options
      var options ={
      center: {
        lat: 62.573276,
        lng: 16.942265
      },
      zoom: 5,
      maxZoom: 15,
      minZoom: 3,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOption: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
        style: google.maps.ZoomControlStyle.Small
      },
      streetViewControl: false,
      mapTypeControl: false,
      };

      //Create a map and bind it to 'map-canvas'
      var map = new google.maps.Map(document.getElementById('map-canvas'), options);

      //Create PlaceService to map
      placeService = new google.maps.places.PlacesService(map);

      //Stuff from service     
      var interests = WhatDo.getInterests();
      var searchTerms = WhatDo.getSearchTerms();

      //Add click-listener to create marker on click
      map.addListener('click', function(e){
        if(WhatDo.marker){
          WhatDo.marker.setMap(null);
        }
        createMark(e.latLng, map)
      });

      function createMark(latLng, map){
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          Title: 'I´m draggable',
          draggable: true
        });

        googleNearbySearch(marker);

        google.maps.event.addListener(marker, 'dragend', function(){
          googleNearbySearch(marker);
        })

        WhatDo.marker = marker; 
      }

      //Make nearby search
      function googleNearbySearch(marker){
        WhatDo.resetDisplayDict();
        for(var i = 0; i < interests.length; i++){
          (function(i){
            for(j = 0; j < searchTerms[interests[i]].length; j++){
              var request = {
                location: marker.getPosition(),
                radius: 10000,
                types:  [searchTerms[interests[i]][j]]
              };
              placeService.nearbySearch(request, function(result, status){
                callback(result, status, interests[i])
              })
            }
          })(i);
        }
      }

      var towns = WhatDo.towns;

      function callback(result, status, interest){
        $scope.$apply(function(){
          WhatDo.setDisplayDict(result, interest);
        });
      }
      
  }

  $scope.interestList = WhatDo.getInterests();

  $scope.displayDict = WhatDo.displayDict;

});

