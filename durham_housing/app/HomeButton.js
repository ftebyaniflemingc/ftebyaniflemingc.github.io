  //--- Testing HomeButton
        require([
      "esri/map", 
      "esri/dijit/HomeButton",
      "dojo/domReady!"
    ], function(
      Map, HomeButton
    )  {
    
// Testing the HomeButton
        var home = new HomeButton({
                map: mapid,
                visible: true // show the buttom
        }, "HomeButton");
        home.startup();
