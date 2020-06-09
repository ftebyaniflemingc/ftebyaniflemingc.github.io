//---------------esri rquirements ---------------
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
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
        function(WebMap, MapView, FeatureLayer, Layer, Home, Fullscreen, LayerList, Legend, Expand, TimeSlider, PopupTemplate ){
    
      //---------------FeatureLayers---------------
   /// Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "a9e79e4ea2a047d5b4f38a2b7d3de689",
                  //id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a"
                  }
      }); //webmap
      
     
     
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
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {  // set time interval to one month
              unit: "months",
              value: 1
            }}},
         {id: 8, title: "Year2011",  visible: true, 
          definitionExpression: "(CensusBoundary2011_CT> 0) AND (infilling2011_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: { 
              unit: "months",
              value: 1
            }}},
         {id: 7, title: "Year2012",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2012_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 6, title: "Year2013",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2013_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 5, title: "Year2014",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2014_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 4, title: "Year2015",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2015_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 3, title: "Year2016", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2016_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 2, title: "Year2017", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2017_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
               unit: "months",
              value: 1
            }}},
           
         {id: 1, title: "Year2018", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2018_csv_Census_Tract > 0)",
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 0, title: "Year2019", visible: true, 
         definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2019_csv_Census_Tract > 0)",         
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
           }}}
         ]}    
                 
  }); //FeatureLayer
webmap.add(layer);    
  
      
      
      // Mapview, referencing WebMap instance
      var myview = new MapView({
            map: webmap,    // The WebMap instance created above
            layers: [layer],
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 11
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
      });
           
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
      
     //---------------Time Slider--------------- 
    const mytimeSlider = new TimeSlider({
          container: "timeSlider",
            stops: {
            interval: {
              value: 1,
              unit: "months"
           } }
        });
        myview.ui.add(mytimeSlider, "manual");
        // wait till the layer view is loaded
        myview.whenLayerView(layer).then(function(mylv) {
          layerView = mylv;
          // starts time of the time slider from layer Year2010 first date: 2009/12/31
          const thestart = new Date("12/31/2009, 7:00 PM");
          // sets time slider's full extent to 2019/12/31 - until end date of layer's fullTimeExtent
          mytimeSlider.fullTimeExtent = {
            start: thestart,
            end: layer.timeInfo.fullTimeExtent.end
          };

          // TimeSlider shows the sum of units in any census tract with one month interval
          // when the app is loaded will show comulative units between 2010/01/01 - 2019/12/31
          const end = new Month(thestart);
          // end of current time extent for time slider with one month interval
          end.setMonth(end.getMonth() + 1);

          // Values property show the first day in timeSlider
          mytimeSlider.values = [thestart, end];
        });//function(mylv)

        // watch for time slider timeExtent change
        mytimeSlider.watch("timeExtent", function() {
        
        // only show sum of units until the end of timeSlider's current date extent.
        layer.definitionExpression =
            "date <= " + mytimeSlider.timeExtent.end.getDate();

       });//watch
      
      /*
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
              /*
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
*/
 
}); //require
