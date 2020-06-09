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
    let mytimeSlider, mychart;
      //---------------FeatureLayers---------------
   /// Creates a WebMap instance
      const webmap = new WebMap({
          basemap: {
            portalItem: {
              id: "3582b744bba84668b52a16b0b6942544"
            }
          }
        });
            
      // Mapview, referencing WebMap instance
      const myview = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 11
      }); //mapview
      
   // create ten new instances of feature layers based on the following definitions
        const url =
          "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
        const definitions = [
         {id: 9, title: "Year2010",  visible: true, offset: 0},
         {id: 8, title: "Year2011",  visible: true, offset: 1},
         {id: 7, title: "Year2012",  visible: true, offset: 2},
         {id: 6, title: "Year2013",  visible: true, offset: 3},
         {id: 5, title: "Year2014",  visible: true, offset: 4},
         {id: 4, title: "Year2015",  visible: true, offset: 5},
         {id: 3, title: "Year2016", visible: true, offset: 6},
         {id: 2, title: "Year2017", visible: true, offset: 7},
         {id: 1, title: "Year2018", visible: true, offset: 8},
         {id: 0, title: "Year2019", visible: true, offset: 6}
          ];    
      
      const layer = definitions.map(function(definition) {
          return tenLayers(definition);
        });
        // add the california fire layers
        webmap.addMany(layer);
      webmap.reorder(layer);
      
      // Ten instances of feature layers between 2010 - 2019
        function tenLayers(definition) {
          const year = definition.year;

          return new FeatureLayer({
            url: url + definition.id,
            timeOffset: {
              value: definition.offset,
              unit: "years"
            },
            outFields: ["*"],
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            }
          });//FeatureLayer
        }//tenLayer 
      
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
      /*
     //---------------Time Slider--------------- 
    const mytimeSlider = new TimeSlider({
          container: "timeSlider",
          mode: "time-window",
          playRate: 100,  
          view: myview
        });//mytimeSlider
        myview.ui.add(mytimeSlider, "manual");
        
      // wait till the layer view is loaded
      let timeLayerView;  
      myview.whenLayerView(layer).then(function(mylv) {
          timeLayerView = mylv;

          // starts time of the time slider from layer Year2010 first date: 2009/12/31
            const thestart = layer.timeInfo.fullTimeExtent.start;       
          //const thestart = new Date("12/31/2009, 7:00 PM");
          // sets time slider's full extent to 2019/12/31 - until end date of layer's fullTimeExtent
          mytimeSlider.fullTimeExtent = {
            start: thestart,
            end: layer.timeInfo.fullTimeExtent.end
          };

          // TimeSlider shows the sum of units in any census tract with one month interval
          // when the app is loaded will show comulative units between 2010/01/01 - 2019/12/31
          const theend = new Date(thestart);
          
         //var year = end.getFullYear();
         //var month = end.getMonth();
         //var day = end.getDate();
         //var ny = new Date(year + 1, month, day);

          // end of current time extent for time slider with one month interval
          //theend.setYear(theend.getYear() + 1);
 
          // Values property show the first day in timeSlider
          mytimeSlider.values = [thestart, theend];
             // mytimeSlider.values = [thestart];
              mytimeSlider.createStopsByInterval(
              mytimeSlider.fullTimeExtent, {
             value: 1,
             unit: "years"
              }
              );//Interval
              });//mylv

      
    // watch for time slider timeExtent change
        mytimeSlider.watch("timeExtent", function() {
        
        // only show sum of units until the end of timeSlider's current date extent.
        layer.definitionExpression = "Date <= " + mytimeSlider.timeExtent.theend.getDate();

       });//watch
         
     
*/
 
}); //require
