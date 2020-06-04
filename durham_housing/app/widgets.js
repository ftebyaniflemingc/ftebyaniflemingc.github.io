require([
        "esri/views/ui/DefaultUI"
        "esri/widgets/Legend",
        "esri/widgets/Home",
        "esri/widgets/Fullscreen",
        "esri/widgets/TimeSlider",
        "esri/widgets/Expand"
        "dojo/domReady!"
      ], function(DefaultUI, Legend, Home, Fullscreen, TimeSlider,Expand
      ) {
        //--- Testing HomeButton
        require([
      "esri/map", 
      "esri/dijit/HomeButton",
      "dojo/domReady!"
    ], function(
      Map, HomeButton
    )  {
/*
view.ui.empty("top-left");

        var fulls = document.getElementById("fulls");
        var tmValue = document.getElementById("tmValue");
        var playPause = document.getElementById("playPause");
        var title = document.getElementById("title");
        var animation = null;
       
        //----------------Time Slider----------
        
        // source codes: JavaScript - Time Slider
        //https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html
        // Time slider to update layerView filtering - time windoe by year
        const timerStart = new Date();
        const timerEnd = new Date();
        timerStart.setYear(timerStart.getYear() - 2);
        const timerStartDefault = new Date();
        timerStartDefault.setMonth(timerEnd.getMonth() -12);

        var timeSlider = new TimeSlider({
         container: "timeSlider",
         mode: "time-window"
         
        });
        view.ui.add(timeSlider, "manual");

      // wait until the layer view is loaded
      let timeLayerView;
     view.whenLayerView(layers).then(function(layVi) {
       timeLayerView = layVi;
      const fullTimeExtent = layers.timeInfo.fullTimeExtent;
      const start = fullTimeExtent.start;

    // set up time slider properties based on layer timeInfo
      timeSlider.fullTimeExtent = fullTimeExtent;
      timeSlider.values = [start];
      timeSlider.stops = {
       interval: layers.timeInfo.interval
     };
   });

    timeSlider.watch("timeExtent", function(value){
    // update layer view filter to reflect current timeExtent
    timeLayerView.filter = {
    timeExtent: value
    };
   });   
     */
    //------------Title, Home, and Full Screen Widgets -----------
        
        view.ui.add(
                title, "top-left"
        );
        
        view.ui.add(
          new Expand({
            view: view, content: new Legend({
              view: view
            })
          }),
          position: "top-right"
        );
//Home Button 
        var homeB = new Home({
            view: view;
        }): 
        
// Testing the HomeButton
        var map = new Map("map", {
                center: [-78.871866,43.914656],
                zoom: 10
        });
                
        var home = new HomeButton({
                map: map
        }, "HomeButton");
        home.startup();
               
//Add the widget to the top right of screen
        view.ui.add(homeB,  position: "top-right")

//FullScreen Button                 
       var fulls = new Fullscreen({
           view: view
         });
        view.ui.add(fulls, "top-right");
                
//Zoom Button
        var view = new MapView({
            container: "viewDiv",
            map: webmap
        });

        var zoom = new Zoom({
           view: view
        });
                
