//---------------esri rquirements ---------------
require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/layers/Layer",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen",
      "esri/widgets/LayerList",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/core/watchUtils",
      "esri/widgets/TimeSlider",
    
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer,  Layer, Home, Fullscreen, LayerList, Legend, Expand, watchUtils,
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
       url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/0",
          popupTemplate: {       
                  title: "The census boundary: {infilling2019_csv_Census_Tract}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer1); 
        var layer2 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/1",
          
      popupTemplate: {       
                  title: "The census boundary: {infilling2018_csv_Census_Tract}",
                  content: "<p>has  {infilling2018_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer2);
        var layer3 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/2",
                    popupTemplate: {       
                  title: "The census boundary: {infilling2017_csv_Census_Tract}",
                  content: "<p>has  {infilling2017_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer3);
        var layer4 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/3",

      popupTemplate: {       
                  title: "The census boundary: {infilling2016_csv_Census_Tract}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer4);
      
        var layer5 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/4",

      popupTemplate: {       
                  title: "The census boundary: {infilling2015_csv_Census_Tract}",
                  content: "<p>has  {infilling2015_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer5);
      
      var layer6 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/5",

      popupTemplate: {       
                  title: "The census boundary: {infilling2014_csv_Census_Tract}",
                  content: "<p>has  {infilling2014_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer6);
      
      var layer7 = new FeatureLayer({ 
      url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/6",

      popupTemplate: {       
                  title: "The census boundary: {infilling2013_csv_Census_Tract}",
                  content: "<p>has  {infilling2013_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "Date", // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer7);
      
      var layer8 = new FeatureLayer({ 
      url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/7",

      popupTemplate: {       
                  title: "The census boundary: {infilling2012_csv_Census_Tract}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer8);
      
      var layer9 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/8",
      popupTemplate: {       
                  title: "The census boundary: {infilling2011_csv_Census_Tract}",
                  content: "<p>has  {infilling2011_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer9);
      
      var layer10 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units_1/FeatureServer/9",
      popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: {Date}, // name of the date field
            interval: {        
              unit: "months",
              value: 1
            }}
        });
      mymap.add(layer10);
      
       mymap.layers.addMany([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]);
     // mymap.layers.reorder([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]);

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
        
      
      const bookmarks = new Bookmarks ({
   view : myview,
   bookmarks : [
     new Bookmark ({
       name : "Oshawa" ,
       extent : {
         spatialReference : {
           wkid : 102100
        },
        xmin : -78.790409 ,
         ymin : 43.868072 ,
         xmax : -78.940272 ,
         ymax : 43.95708
      }
    }) // other bookmarks ...   
   ]




});


const bkExpand = new Expand ({
   view : myview,
   content : bookmarks,
   expanded : false
});
         myview.ui.add {position: "top-right", index:1 };
      
      
      
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
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Legend",
           view: myview,
              content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true, // Legend widget is visible when the UI is loaded
        }); //Expand 
        myview.ui.add(mylegend, {position: "top-left", index:3});
      
        //--------------TimeSlider---------------
      
      const mytimeSlider = new TimeSlider({
          //container: "timeSlider",
          playRate: 1000,
        /*  stops: {
            interval: {
              value: 1,
              unit: "months"
            }
          }*/
        });
        myview.ui.add(mytimeSlider, "bottom-right");

        // wait till the layer view is loaded
         myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]).then(function(lv) {
          watchUtils.whenFalseOnce(layerView, "updating", function(){
            layerView = lv;
          //});
        //});
      
       // myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]).then(function(lv) {
       //   layerView = lv;

          // start time of the time slider the first day of 2010
          const start = new Date(2009, 12, 31);
          // set time slider's full extent to 2019/12/31 - until end date of layer's fullTimeExtent
          mytimeSlider.fullTimeExtent = {
            start: start,
            end: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ].timeInfo.fullTimeExtent.end
          };

          // We will be showing sum of units with one month interval when the app is loaded the sum of units between next month.
          const end = new Date(start);
          // end of current time extent for time slider  showing next units built  with one month interval
          end.setDate(end.getDate() + 1);

          // Values property is set the first month. 
          mytimeSlider.values = [start, end];
          });
          });//lv

        // watch for time slider timeExtent change
        mytimeSlider.watch("timeExtent", function() {
          // only show units built up until the end of timeSlider's current time extent.
          [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ].definitionExpression =
                {Date} + mytimeSlider.timeExtent.end.getTime();

          // now gray out sum of units before the time slider's current timeExtent
          layerView.effect = {
            filter: {
              timeExtent: mytimeSlider.timeExtent,
              geometry: myview.extent
            },
            excludedEffect: "grayscale(45%) opacity(25%)"
          };
        });//function()
      
}); //require
