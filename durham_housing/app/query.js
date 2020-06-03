require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
     // "esri/geometry/Extent"
      //"esri/SpatialReference"
    //  "esri/widgets/Legend", //to define Legend
     // "esri/widgets/LayerList",
  //    "esri/widgets/Feature",
      
    //  "esri/views/ui/DefaultUI"
   ], function(Map, MapView, FeatureLayer, Extent, SpatialReference, Legend, LayerList, Feature, DefaultUI)  {
   
      
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

  
    
