
//---------------esri rquirements ---------------
require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen", 
      "esri/widgets/Search", 
      "esri/widgets/ScaleBar",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(WebMap, MapView, Home, Fullscreen, Search, ScaleBar ){
    
      // Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a"
                  }
      }); //webmap
      
      // Mapview, referencing WebMap instance
      var myview = new MapView({
            map: webmap,    // The WebMap instance created above
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
      
      
 
}); //require
