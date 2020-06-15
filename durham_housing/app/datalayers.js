//---------------esri rquirements ---------------
require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/layers/Layer",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen",
      "esri/widgets/LayerList",
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer,  Layer, Home, Fullscreen, LayerList, Legend, Expand,  PopupTemplate ){
   let layerView;
      //---------------FeatureLayers---------------
   /// Creates a Map instance
      const mymap = new Map({
          basemap: {//basemap source: https://www.arcgis.com/home/item.html?id=3582b744bba84668b52a16b0b6942544
            portalItem: {
              id: "3582b744bba84668b52a16b0b6942544" 
            }
          }
        });
       
   // create ten new instances of feature layers based on the following definitions
       var layer1 = new FeatureLayer({ 
       url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/9",
          popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
          });
      mymap.add(layer1); 
        var layer2 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/8",
          
      popupTemplate: {       
                  title: "The census boundary: {infilling2011_csv_Census_Tract}",
                  content: "<p>has  {infilling2011_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer2);
        var layer3 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/7",
                    popupTemplate: {       
                  title: "The census boundary: {infilling2012_csv_Census_Tract}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer3);
        var layer4 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/6",

      popupTemplate: {       
                  title: "The census boundary: {infilling2013_csv_Census_Tract}",
                  content: "<p>has  {infilling2013_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer4);
      
        var layer5 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/5",

      popupTemplate: {       
                  title: "The census boundary: {infilling2014_csv_Census_Tract}",
                  content: "<p>has  {infilling2014_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer5);
      
      var layer6 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/4",

      popupTemplate: {       
                  title: "The census boundary: {infilling2015_csv_Census_Tract}",
                  content: "<p>has  {infilling2015_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer6);
      
      var layer7 = new FeatureLayer({ 
      url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/3",

      popupTemplate: {       
                  title: "The census boundary: {infilling2016_csv_Census_Tract}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer7);
      
      var layer8 = new FeatureLayer({ 
      url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/2",

      popupTemplate: {       
                  title: "The census boundary: {infilling2017_csv_Census_Tract}",
                  content: "<p>has  {infilling2017_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer8);
      
      var layer9 = new FeatureLayer({ 
       url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/1",
      popupTemplate: {       
                  title: "The census boundary: {infilling2018_csv_Census_Tract}",
                  content: "<p>has  {infilling2018_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer9);
      
      var layer10 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/SDR_Housing_Units/FeatureServer/0",
      popupTemplate: {       
                  title: "The census boundary: {infilling2019_csv_Census_Tract}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }
        });
      mymap.add(layer10);
      
       mymap.addMany([layer10, layer9, layer8, layer7, layer6, layer5, layer4,layer3, layer2, layer1]);
      // Mapview, referencing WebMap instance
      
      
      var myview = new MapView({
             map: mymap,    // The WebMap instance created above
            layers: [layer10, layer9, layer8, layer7, layer6, layer5, layer4, layer3, layer2, layer1],
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview 

      myview.whenLayerView([layer10, layer9, layer8, layer7, layer6, layer5, layer4, layer3, layer2, layer1])
    .then(function(layerView) {      
      // The layerview for the layer
      })
    .catch(function(error) { // An error occurred during the layerview creation
    
    });

       //---------------Home Button---------------
        var myhome = new Home({
            view: myview,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(myhome,  {position: "top-left", index:1 }); //position is the first custom widget from the top
        
      
      //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-left", index:2 }); //position is the second custom widget from the top
                
     //-------------------BookMarks------------------------------- 
      
         const bookmarks = new Bookmarks ({
   view : myview,
   bookmarks : [
     new Bookmark ({
       name : "Oshawa" ,
       extent : {
         spatialReference : {
           wkid : 102100
        },
        xmin : -78.790409 ,
         ymin : 43.868072 ,
         xmax : -78.940272 ,
         ymax : 43.95708
      }
    }) // other bookmarks ...   
   ]




});


const bkExpand = new Expand ({
   view : myview,
   content : bookmarks,
   expanded : false
});
         myview.ui.add (bkExpand, {position: "top-right", index:1 });
      
  //-------------------Layer List-------------------------------    
      myview.when(function() {
      const layerList = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "LayerList",
           view: myview,
           content: new LayerList({
            view: myview
          }),
          view: myview,
          expanded: true, // layerList widget is visible when the UI is loaded
        }); //Expand       
            
            // Add widget to screen
            myview.ui.add(layerList, "top-right");
      });//LayerList
           
        //---------------Legend---------------
           
        const mylegend = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Legend",
           view: myview,
           content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true, // Legend widget is visible when the UI is loaded
        }); //Expand 
        myview.ui.add(mylegend, {position: "top-left", index:3}); //position is the third from the top
  
}); //require
