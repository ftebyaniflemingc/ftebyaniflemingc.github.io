  //--- Testing HomeButton
        require([
      "esri/map", 
      "esri/dijit/HomeButton",
      "dojo/domReady!"
    ], function(
      Map, HomeButton
    )  {
    
// Testing the HomeButton
        var map = new Map("map", {
                center: [-78.871866,43.914656],
                zoom: 10
        });
                
        var home = new HomeButton({
                map: map,
                visible: true // show the buttom
        }, "HomeButton");
        home.startup();
