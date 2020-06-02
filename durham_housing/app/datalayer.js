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

        // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });

      map.add(year19Layer);
      
        // CensusTracs feature Year 2019 layer (polygon)
      var year18Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
      });

      map.add(year18Layer);
    

    });
