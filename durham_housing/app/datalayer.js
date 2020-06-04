
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
   //   "esri/geometry/Extent",
  //    "esri/SpatialReference"
     // "esri/widgets/LayerList",
  //    "esri/widgets/Feature",
    
    ], function(WebMap, MapView, FeatureLayer)  {
      
  //Map view set up
  
      var layer = new FeatureLayer({
          url:
            "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/WebLayer2/FeatureServer"
               });

        var view = new MapView({
          map: new WebMap({
            basemap: {
              portalItem: {
                id: "eacc0e3c88554172a485d997fa21987d"
              }
            },
            layers: [layer]
          }),
          container: "mapid",
          constraints: {
            snapToZoom: false
          },
         center: [-78.871866,43.914656],
         zoom: 10
  
        });

      
     // var webmap = new WebMap({
     //   basemap: "gray-vector"
     // });

      //var view = new MapView({
      //  container: "mapid",  
      //  map: webmap,
      //  center: [-78.871866,43.914656],
      //  zoom: 10
      //  });
      
      
            //set the extent on the view
        //var extent = new Extent({
          // xmax: -78.627, ymax: 44.072, xmin: -79.145, ymin: 43.775,
        //spatialReference: new esri.SpatialReference ({"wkid": 102100 })
      //});
        

 /*  

        // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      webmap.add(year19Layer);
      
        // CensusTracs feature Year 2018 layer (polygon)
      var year18Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
      });
      webmap.add(year18Layer);
    
    // CensusTracs feature Year 2017 layer (polygon)
      var year17Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2"
      });
      webmap.add(year17Layer);
    
    // CensusTracs feature Year 2016 layer (polygon)
      var year16Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3"
      });
      webmap.add(year16Layer);
    
   //  CensusTracs feature Year 2015 layer (polygon)
      var year15Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4"
      });
    webmap.add(year15Layer);

// CensusTracs feature Year 2014 layer (polygon)
      var year14Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5"
      });
     webmap.add(year14Layer);
    
   // CensusTracs feature Year 2013 layer (polygon)
      var year13Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6"
      });
      webmap.add(year13Layer);
    
// CensusTracs feature Year 2012 layer (polygon)
      var year12Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7"
      });
      webmap.add(year12Layer);
    
// CensusTracs feature Year 2011 layer (polygon)
      var year11Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8"
      });
      webmap.add(year11Layer);

    // CensusTracs feature Year 2010 layer (polygon)
      var year10Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      webmap.add(year10Layer); */
 });
    
