
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Home", 
      "wsri/widgets/Fullscreen",
      "dojo/dom",
      "dojo/domReady!"
   //   "esri/geometry/Extent",
  //    "esri/SpatialReference"
     // "esri/widgets/LayerList",
  //    "esri/widgets/Feature",
    
    ], function(WebMap, MapView, FeatureLayer, Home, Fullscreen, dom)  {
      
  //Map view set up
   var webmap = new WebMap({
        basemap: "gray-vector"
      });
    //  var layer = new FeatureLayer({
      //    url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer"               });

       // CensusTracs feature Year 2010 layer (polygon)
      var year10Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9",
      definitionExpression: "(SumOfUnits > 0)",
          title: "The numbers of units in census tract"
      });
      webmap.add(year10Layer);
      
        // CensusTracs feature Year 2011 layer (polygon)
      var year11Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8",
            
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year11Layer);
    
    // CensusTracs feature Year 2012 layer (polygon)
      var year12Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7"
      });
      webmap.add(year12Layer);
    
    // CensusTracs feature Year 2013 layer (polygon)
      var year13Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6"
      });
      webmap.add(year13Layer);
    
   //  CensusTracs feature Year 2014 layer (polygon)
      var year14Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5"
      });
    webmap.add(year14Layer);

// CensusTracs feature Year 2015 layer (polygon)
      var year15Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4"
      });
     webmap.add(year15Layer);
    
   // CensusTracs feature Year 2016 layer (polygon)
      var year16Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3"
      });
      webmap.add(year16Layer);
    
// CensusTracs feature Year 2017 layer (polygon)
      var year17Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2"
      });
      webmap.add(year17Layer);
    
// CensusTracs feature Year 2018 layer (polygon)
      var year18Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
      });
      webmap.add(year18Layer);

    // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
      url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0"
      });
      webmap.add(year19Layer); 
 
      //using web map by Esri as basemap
        var view = new MapView({
          map: new WebMap({
            basemap: { portalItem: { 
                    id: "3582b744bba84668b52a16b0b6942544"
               //   id: "a37abf36893f42bbaccb0cef64fb28ab"
              }
            },
            layers: [year19Layer, year18Layer, year17Layer, year16Layer, year15Layer, year14Layer, year13Layer, year12Layer, year11Layer, year10Layer]
          }),
          container: "mapid",
          constraints: {
            snapToZoom: false
          },
         center: [-78.871866,43.914656],
         zoom: 10
  
        });
      //Home Button 
        var homeB = new Home({
            map: webmap,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        view.ui.add(homeB,  "top-right");

      //FullScreen Button                 
       var fulls = new Fullscreen({
           map: webmap,
            visible: true //show the button
         }"Fullscreen");
        view.ui.add(fulls, "top-right");
                

});

