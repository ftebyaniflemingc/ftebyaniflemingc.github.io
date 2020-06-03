require([
       "esri/widgets/Legend"
    ], function(Legend)  {
      
     
  //Legend & Title setup
    var titleDivWidget = new titleDiv({ view: view });
    var legendWidget = new legend({view: view,});
      //content.classList.add("esri-widget");
      
    view.ui.add(titleDiv, "top-right");
    view.ui.add(legend, "bottom-right");
       
  /*
 var  = new titleDiv({ view: view });
  view.ui.add(titleDiv, "top-right");
        view.ui.add(
          new Expand({view: view, content: new Legend({
              view: view
            })
          }), "top-right"
        );
 */ 
     
       
  
      
    
  
