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

      service = new google.maps.places.PlacesService(map);


      //Create marker for Göteborg

      var GBG = {lat: 57.708859, lng: 11.974583};

      var marker = new google.maps.Marker({
        position: GBG,
        map: map,
        Title: 'Göteborg'
      });
     
      //List with interests from service     
      var interests = WhatDo.getInterests();
      var searchTerms = WhatDo.getSearchTerms();
      console.log(interests);

      //Add listener to marker

      marker.addListener('click', function(){
        //WhatDo.resetCityData();
        WhatDo.setBin(-1);
        for(var i = 0; i < interests.length; i++){
          //console.log(searchTerms[interests[i]]);
          for(j = 0; j < searchTerms[interests[i]].length; j++){
            var request = {
              location: GBG,
              radius: 10000,
              types:  searchTerms[interests[i]][j]
            };
            service.nearbySearch(request, function(result, status){
              WhatDo.setBin(WhatDo.getBin()+1);
              callback(result, status, interests[WhatDo.getBin()])
            });
          }
        }
        
      });

      function callback(result, status, interest){
        WhatDo.setInterestInfo(result, interest);
        //console.log(status);
        //console.log(result);
      }
      $scope.interestList = WhatDo.getInterests();

      $scope.displayList = function(){
        return WhatDo.displayDict;
      }

      
  }

});

