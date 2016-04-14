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
          for(var i = 0; i < interests.length; i++){
            (function(i){
              for(j = 0; j < searchTerms[interests[i]].length; j++){
                console.log(searchTerms[interests[i]][j]);
                var request = {
                  location: GBG,
                  radius: 10000,
                  types:  [searchTerms[interests[i]][j]]
                };
                service.nearbySearch(request, function(result, status){
                  callback(result, status, interests[i])
                })
              }
            })(i);
          }
      });



      function callback(result, status, interest){
        WhatDo.setDisplayDict(result, interest);
        $scope.$apply(function(){});
      }
      
  }

  $scope.interestList = WhatDo.getInterests();

  $scope.displayDict = WhatDo.displayDict;



  /*$scope.$watch('displayDict', function(newVal, oldVal, scope){
    console.log(newVal);
    scope.displayDict = WhatDo.getDisplayDict();
  }, true)*/

  /*$scope.$watch(function () { return WhatDo.displayDict }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
      $scope.displayList = WhatDo.displayDict;
      console.log (WhatDo.displayDict);
    }
  });*/

  /*$scope.displayList = function(){
    return WhatDo.getDisplayDict();
  }*/

});

