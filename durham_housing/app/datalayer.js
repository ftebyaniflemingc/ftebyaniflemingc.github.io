
//---------------esri rquirements ---------------
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/layers/Layer",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen", 
      "esri/widgets/TimeSlider",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(WebMap, MapView, FeatureLayer, Layer, Legend, Expand, Home, Fullscreen, TimeSlider, PopupTemplate ){
    
      // Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "a9e79e4ea2a047d5b4f38a2b7d3de689"
            }
      }); //webnap
      
      // Mapview, referencing WebMap instance
      var myview = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 12
      }); //mapview
     
   
  //---------------FeatureLayers---------------
        
  var layer = new FeatureLayer({ 
         portalItem: { // autocasts as new PortalItem()
         id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a",
      //url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer",
            sublayers:[
  
        {id: 0, title: "Year2019", visible: true, 
                  popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2019_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 1, title: "Year2018", visible: true, 
                  popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2018_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 2, title: "Year2017", visible: true, 
                  popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2017_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 3, title: "Year2016", visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 4, title: "Year2015",  visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2015_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 5, title: "Year2014",  visible: true, 
                  popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 6, title: "Year2013",  visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2013_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 7, title: "Year2012",  visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }, 
         {id: 8, title: "Year2011",  visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }},
         {id: 9, title: "Year2010",  visible: true, 
                 popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2010_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
         }
         ],
         }
  }); //FeatureLayer
webmap.add(layer);
      
      
      //---------------Legend---------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true
        }); //Expand
        myview.ui.add(mylegend, "bottom-right");
      
       //---------------Home Button---------------
        var homeB = new Home({
            view: myview,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(homeB,  "top-right");

      //---------------FullScreen Button---------------
      
       var fulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(fulls, "top-right");
                
      
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
timeSlider.fullTimeExtent = layer.timeInfo.fullTimeExtent;

  timeSlider.stops = {
    interval: {
          value: 1, unit: "years"
    },
        timeExtent:{
              start: layer.timeInfo.fullTimeExtent.start,
              end: layer.timeInfo.fullTimeExtent.end
        }//timeExtent
  }//timeSlider.stops
});//function(mylv)

timeSlider.watch("timeExtent", function(value){
  // update layer view filter to reflect current timeExtent
  timeLayerView.filter = {
    timeExtent: value
  };
});
myview.ui.add(timeSlider, "manual");
      timeSlider.watch("timeExtebt", function(value){
            timeLayerView.filter = {
                  timeExtent: value
            };//filter
      });//function(value)
      
      //---------------Time Play--------------- 
      
   timeSlider.set({ loop: false,
                         PlayRate: 100
                        });
         timeSlider.play();  
      
 
}); //require
