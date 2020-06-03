
require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/geometry/Extent",
      "esri/SpatialReference"
    //  "esri/widgets/Legend", //to define Legend
     // "esri/widgets/LayerList",
  //    "esri/widgets/Feature",
      
    //  "esri/views/ui/DefaultUI"
    ], function(Map, MapView, FeatureLayer, Extent, SpatialReference, Legend, LayerList, Feature, DefaultUI)  {
    
  //Map view set up
  
      var map = new Map({
        basemap: "gray-vector"
      });

      var view = new MapView({
        container: "mapid",  
        map: map,
        //center: [-78.871866,43.914656],
        zoom: 10
            view.extent = new Extent({
            xmin: -78.510,
            ymin: 43.840,
            xmax: -79.270,
            ymax: 44.076,
        "spatialReference": {
        "wkid": 32617,
         }
      });
  //Legend & Title setup
      // var titleDivWidget = new titleDiv({ view: view });
      // var legendWidget = new legend({view: view,});
      //content.classList.add("esri-widget");
      
      //  view.ui.add(titleDiv, "top-right");
       //  view.ui.add(legend, "bottom-right");
       
      
    
  /*
 var  = new titleDiv({ view: view });
  view.ui.add(titleDiv, "top-right");
        view.ui.add(
          new Expand({view: view, content: new Legend({
              view: view
            })
          }), "top-right"
        );
  */

        // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      map.add(year19Layer);
      
        // CensusTracs feature Year 2018 layer (polygon)
      var year18Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
      });
      map.add(year18Layer);
    
    // CensusTracs feature Year 2017 layer (polygon)
      var year17Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2"
      });
      map.add(year17Layer);
    

    // CensusTracs feature Year 2016 layer (polygon)
      var year16Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3"
      });
      map.add(year16Layer);
    
    // CensusTracs feature Year 2015 layer (polygon)
      var year15Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4"
      });
      map.add(year15Layer);
  

// CensusTracs feature Year 2014 layer (polygon)
      var year14Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5"
      });
      map.add(year14Layer);
    
   // CensusTracs feature Year 2013 layer (polygon)
      var year1Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6"
      });
      map.add(year13Layer);
    

// CensusTracs feature Year 2012 layer (polygon)
      var year12Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7"
      });
      map.add(year12Layer);
    
// CensusTracs feature Year 2011 layer (polygon)
      var year11Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8"
      });
      map.add(year11Layer);

    // CensusTracs feature Year 2010 layer (polygon)
      var year10Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      map.add(year10Layer);
 });
 /*

// Query Feature Layer

// Client-side queries 
      function queryFeatureLayerView(point, distance, spatialRelationship, sqlExpression) {
        // Add the layer if it is missing
        if (!map.findLayerById(featureLayer.id)) {
          featureLayer.outFields = ["*"];
          map.add(featureLayer,0);
        }

        / Set up the query
        var query = {
          geometry: point,
          distance: distance,
          spatialRelationship: spatialRelationship,
          outFields: ["*"],
          returnGeometry: true,
          where: sqlExpression
        };
        // Wait for the layerview to be ready and then query features
        view.whenLayerView(featureLayer).then(function(featureLayerView) {
          if (featureLayerView.updating) {
            var handle = featureLayerView.watch("updating", function(isUpdating){
              if (!isUpdating) {
                // Execute the query
                featureLayerView.queryFeatures(query).then(function(result) {
                  addGraphics(result)
                });
                handle.remove();
              }
            });
          } else {
            // Execute the query
            featureLayerView.queryFeatures(query).then(function(result) {
              addGraphics(result);
            });
          }
        });
      }
*/
    
