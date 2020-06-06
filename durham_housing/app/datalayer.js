require([
      
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/views/layers/LayerView",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen", 
      "esri/widgets/TimeSlider",
      "esri/widgets/Legend",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
   //   "esri/geometry/Extent",
  //    "esri/SpatialReference"
         
    ], function(WebMap, MapView, FeatureLayer, LayerView, Home, Fullscreen, TimeSlider, Legend, PopupTemplate)  {
    
  //--------------------------------------------------------------------------

        var layer = new FeatureLayer({
          url:
            url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0",
          // don't show precincts that didn't record any votes
         
          title: "Year2019"
        });

        var view = new MapView({
          webmap: new WebMap({
            basemap: {
              portalItem: {
                id: "3582b744bba84668b52a16b0b6942544"
              }
            },
            layers: [layer]
          }),
          container: "mapid",
          constraints: {
            snapToZoom: false
          },
          center: [-78.871866,43.914656], zoom: 10
        });
