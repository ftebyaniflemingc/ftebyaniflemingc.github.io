require([
      "esri/Map",
      "esri/views/MapView",
      "esri/views/legend"  
   
    ], function(Map, MapView, Legend)  {
      
  
    
  //Legend & Title setup
    var titleDivWidget = new titleDiv({ view: view });
    var legendWidget = new legend({view: view,});
      //content.classList.add("esri-widget");
      
    view.ui.add(titleDiv, "top-right");
    view.ui.add(legend, "bottom-right");
       
      
    
  
