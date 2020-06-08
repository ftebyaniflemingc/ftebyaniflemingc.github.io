//---------------esri rquirements ---------------
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/layers/Layer",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen", 
      "esri/widgets/Search", 
      "esri/widgets/ScaleBar",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/widgets/TimeSlider",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(WebMap, MapView, FeatureLayer, Layer, Home, Fullscreen, Search, ScaleBar, Legend, Expand, TimeSlider, PopupTemplate ){
    
      //---------------FeatureLayers---------------
   /// Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "a9e79e4ea2a047d5b4f38a2b7d3de689",
                  //id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a"
                  }
      }); //webmap
      
      // Mapview, referencing WebMap instance
      var myview = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 11
      }); //mapview
     
  var layer = new FeatureLayer({ 
         portalItem: { // autocasts as new PortalItem()
                    id: "a9e79e4ea2a047d5b4f38a2b7d3de689",
                 // id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a",
      //url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer",
           
               sublayers:[
         {id: 9, title: "Year2010",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2010_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },

         {id: 8, title: "Year2011",  visible: true, 
          definitionExpression: "(CensusBoundary2011_CT> 0) AND (infilling2011_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
            },
         {id: 7, title: "Year2012",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2012_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 6, title: "Year2013",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2013_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 5, title: "Year2014",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2014_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 4, title: "Year2015",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2015_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 3, title: "Year2016", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2016_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 2, title: "Year2017", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2017_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
           
         {id: 1, title: "Year2018", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2018_csv_Census_Tract > 0)",
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         },
         {id: 0, title: "Year2019", visible: true, 
         definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2019_csv_Census_Tract > 0)",         
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            }
         }
         ],
         }
        
  }); //FeatureLayer
webmap.add(layer);    

       //---------------Home Button---------------
        var myhome = new Home({
            view: myview,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(myhome,  {position: "top-right", index:1 });

          
      
      //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-right", index:2 });
                
      
      //---------------Search---------------
      
       var mysearch = new Search({
           view: myview,
            visible: true //show the button
         }, "Search");
        myview.ui.add(mysearch, {position: "top-left", index:3 });
      
      //---------------Search---------------
      
      const myscale = new ScaleBar({
          view: myview,
         style: "line",
         unit: "metric"
       }, "ScaleBar");
      myview.ui.add(myscale, {position: "bottom-right", index: 1});      
      
      //---------------Legend---------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true,
                      
        }); //Expand 
        myview.ui.add(mylegend, "bottom-left"
         );
 /*
 var arcadeExpressionInfos = [{
          name: "lethality-arcade",
          title: "",
          expression: document.getElementById("lethality-arcade").text
        },
        // Get Arcade expression returning the share of the total comprised
        // by the predominant category
      ];
      
 var template = {
        // autocasts as new PopupTemplate()
        title: "{CensusBoundary2016_CTNAME}", // Show attribute value
        content: [
          {type: "text",
            text: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
          },
          {type: "fields",
            fieldInfos: [{
                fieldName: "Census_Tract",
                label: "The Census Tract Per Year",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {fieldName: "SumOfUnits",
                label: "Som of Units Starts in the Year",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {fieldName: "expression/lethality-arcade",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              }]
          }],
        expressionInfos: arcadeExpressionInfos
      };  
       layer.popupTemplate = template;
       
       */
      
     //---------------Time Slider--------------- 
   
      // Create a time slider to update layerView filter
const timeSlider = new TimeSlider({
  container: "timeSlider",
  mode: "time-window",
      view: myview
});
myview.ui.add(timeSlider, "manual");

// wait until the layer view is loaded
let timeLayerView;
myview.whenLayerView(layer).then(function(mylv) {
  timeLayerView = mylv;
// set up time slider properties based on layer timeInfo
   
const fullTimeExtent = layer.timeInfo.fullTimeExtent;
/*      
  timeSlider.stops = {interval: {value: 1, unit: "years"
    },
        timeExtent:{
              start: layer.timeInfo.fullTimeExtent.start,
              end: layer.timeInfo.fullTimeExtent.end
        }//timeExtent
  }//timeSlider.stops 
     */
   
  const start = fullTimeExtent.start;
  // set up time slider properties based on layer timeInfo
  timeSlider.fullTimeExtent = fullTimeExtent;
  timeSlider.values = [start];
  timeSlider.stops = {
    interval: layer.timeInfo.interval
  };
});//function(mylv)

      //---------------Time Play--------------- 
      
   timeSlider.set({ loop: false,
                         PlayRate: 100
                        });
         timeSlider.play();  

 
}); //require
