  require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer"
    ], function(Map, MapView, FeatureLayer) {
      
      var map = new Map({
        basemap: "gray-vector"
      });

      var view = new MapView({
        //container: "viewDiv",  
        container: "mapid",  
        map: map,
        center: [-78.871866,43.914656],
        zoom: 11           
      });

        // CensusTracs feature layer (polygon)
  //    var year19Layer = new FeatureLayer({
        //url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
   //     url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region/FeatureServer/0"
   //   });

  //    map.add(year19Layer);
      
      //  feature layer (polygon)
    //  var trailsLayer = new FeatureLayer({
//        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
//      });

//      map.add(trailsLayer, 0);

      // Parks and open spaces (polygons)
//      var parksLayer = new FeatureLayer({
      //  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
//      });

  //    map.add(parksLayer, 0);

    });
