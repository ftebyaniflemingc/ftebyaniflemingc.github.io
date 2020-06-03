
require([
      "esri/Map",
      "esri/views/MapView",
    //  "esri/layers/FeatureLayer",
     // "esri/geometry/Extent"
      //"esri/SpatialReference"
     // "esri/widgets/LayerList",
  //    "esri/widgets/Feature",
    
    ], function(Map, MapView)  {
      
  //Map view set up
  
      var webmap = new Map({
        basemap: "gray-vector"
      });

      var view = new MapView({
        container: "mapid",  
        map: webmap,
        center: [-78.871866,43.914656],
        zoom: 10
      
            //set the extent on the view
        //  var extent = new esri.geometry.Extent({
          //  xmax: -78.510,
          //  ymax: 43.840,
          //  xmin: -79.270,
          //  ymin: 44.076,
       // spatialReference: new SpatialReference ({ "wkid": 32617 })
   //   });
   });
/*
        // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      map.add(year19Layer);
      
        // CensusTracs feature Year 2018 layer (polygon)
      var year18Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
      });
      //map.add(year18Layer);
    
    // CensusTracs feature Year 2017 layer (polygon)
      var year17Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2"
      });
      map.add(year17Layer);
    
    // CensusTracs feature Year 2016 layer (polygon)
      var year16Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3"
      });
      //map.add(year16Layer);
    
   //  CensusTracs feature Year 2015 layer (polygon)
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
   //   map.add(year12Layer);
    
// CensusTracs feature Year 2011 layer (polygon)
      var year11Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8"
      });
      map.add(year11Layer);

    // CensusTracs feature Year 2010 layer (polygon)
      var year10Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
      });
      map.add(year10Layer); */
 });
    
