require([
       "esri/widgets/Legend"
    ], function(Legend)  {
      
        view.when(function() {
          // get the first layer from the layers in the WebMap
          // when the resources in the MapView have loaded.
          var featureLayer = webmap.layers.getItemAt(0);

          var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Souht Durham Region Sum of Units"
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
        });
      });    
       
       /*
       
       
  //Legend & Title setup
    var titleDivWidget = new titleDiv({ view: view });
    var legendWidget = new legend({view: view,});
      //content.classList.add("esri-widget");
      
    view.ui.add(titleDiv, "top-right");
    view.ui.add(legend, "bottom-right");
 
       
  
 var  = new titleDiv({ view: view });
  view.ui.add(titleDiv, "top-right");
        view.ui.add(
          new Expand({view: view, content: new Legend({
              view: view
            })
          }), "top-right"
        );
 */ 
     
       
  
      
    
  
