  require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer"
    ], function(Map, MapView, FeatureLayer) {
      
      var map = new Map({
        basemap: "topo-vector"
      });

      var view = new MapView({
        container: "viewDiv",  
        map: map,
        center: [-78.871866,43.914656],
        zoom: 10           
      });

        // CensusTracs feature layer (points)
      var trailheadsLayer = new FeatureLayer({
        //url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
      });

      map.add(trailheadsLayer);
      
      // Trails feature layer (lines)
      var trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
      });

      map.add(trailsLayer, 0);

      // Parks and open spaces (polygons)
      var parksLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
      });

      map.add(parksLayer, 0);

    });
