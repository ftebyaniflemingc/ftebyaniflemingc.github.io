//---------------esri rquirements ---------------
require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/views/layers/FeatureLayerView",
      "esri/layers/Layer",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen",
      "esri/widgets/LayerList",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/widgets/TimeSlider",
    
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer, FeatureLayerView, Layer, Home, Fullscreen, LayerList, Legend, Expand, 
                  TimeSlider, PopupTemplate ){
    let layerView;
      //---------------FeatureLayers---------------
   /// Creates a Map instance
      const mymap = new Map({
          basemap: {//basemap source: https://www.arcgis.com/home/item.html?id=3582b744bba84668b52a16b0b6942544
            portalItem: {
              id: "3582b744bba84668b52a16b0b6942544" 
            }
          }
        });
       
   // create ten new instances of feature layers based on the following definitions
       var layer1 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9",
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer1); 
        var layer2 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8",
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      popupTemplate: {       
                  title: "The census boundary: {infilling2011_csv_Census_Tract}",
                  content: "<p>has  {infilling2011_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer2);
        var layer3 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7",

      popupTemplate: {       
                  title: "The census boundary: {infilling2012_csv_Census_Tract}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer3);
        var layer4 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6",

      popupTemplate: {       
                  title: "The census boundary: {infilling2013_csv_Census_Tract}",
                  content: "<p>has  {infilling2013_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer4);
      
        var layer5 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5",

      popupTemplate: {       
                  title: "The census boundary: {infilling2014_csv_Census_Tract}",
                  content: "<p>has  {infilling2014_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer5);
      
      var layer6 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4",

      popupTemplate: {       
                  title: "The census boundary: {infilling2015_csv_Census_Tract}",
                  content: "<p>has  {infilling2015_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer6);
      
      var layer7 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3",

      popupTemplate: {       
                  title: "The census boundary: {infilling2016_csv_Census_Tract}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer7);
      
      var layer8 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2",

      popupTemplate: {       
                  title: "The census boundary: {infilling2017_csv_Census_Tract}",
                  content: "<p>has  {infilling2017_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer8);
      
      var layer9 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1",

      popupTemplate: {       
                  title: "The census boundary: {infilling2018_csv_Census_Tract}",
                  content: "<p>has  {infilling2018_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer9);
      
      var layer10 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0",

      popupTemplate: {       
                  title: "The census boundary: {infilling2019_csv_Census_Tract}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "days",
              value: 1
            }}
        });
      mymap.add(layer10);
      
       mymap.layers.addMany([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]);

      // Mapview, referencing WebMap instance
      var myview = new MapView({
             map: mymap,    // The WebMap instance created above
            layers: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10],
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview 
       //---------------Home Button---------------
        var myhome = new Home({
            view: myview,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(myhome,  {position: "top-left", index:1 });
        
      
      //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-left", index:2 });
                
      
      //-------------------Layer List-------------------------------
      myview.when(function() {
            var layerList = new LayerList({
                  view: myview,
                  visible: true // show the button
            }, "Layer");
  
            // Add widget to screen
            myview.ui.add(layerList, {position: "top-right", index:3});
      });//LayerList
           
        //---------------Legend---------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true,
        }); //Expand 
        myview.ui.add(mylegend, "bottom-left");
      
     
}); //require
