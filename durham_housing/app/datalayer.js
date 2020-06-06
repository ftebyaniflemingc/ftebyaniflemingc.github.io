require([
      "require",
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/views/layers/LayerView",
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen", 
      "esri/widgets/TimeSlider",
      "esri/widgets/Legend",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
   //   "esri/geometry/Extent",
  //    "esri/SpatialReference"
         
    ], function(WebMap, MapView, FeatureLayer, LayerView, Home, Fullscreen, TimeSlider, Legend, PopupTemplate)  {
      
  //Map view set up
   var webmap = new WebMap({
    
   });

         //  var layer = new FeatureLayer({
      //    url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer"});

       // CensusTracs feature Year 2010 layer (polygon)
      var year10Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9"
            });
      //webmap.layers.push(year10Layer, 9);
      
        // CensusTracs feature Year 2011 layer (polygon)
      var year11Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8"
            });
    //  webmap.layers.push(year11Layer, 8);
    
    // CensusTracs feature Year 2012 layer (polygon)
      var year12Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7"
            });
    //  webmap.add(year12Layer, 7);
    
    // CensusTracs feature Year 2013 layer (polygon)
      var year13Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6"
            });
    //  webmap.add(year13Layer, 6);
    
   //  CensusTracs feature Year 2014 layer (polygon)
      var year14Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5"
            });
   // webmap.add(year14Layer, 5);

// CensusTracs feature Year 2015 layer (polygon)
      var year15Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4"
            });
//     webmap.add(year15Layer, 4);
    
   // CensusTracs feature Year 2016 layer (polygon)
      var year16Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3"
            });
      //webmap.add(year16Layer, 3);
    
// CensusTracs feature Year 2017 layer (polygon)
      var year17Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2"
            });
 //     webmap.add(year17Layer, 2);
    
// CensusTracs feature Year 2018 layer (polygon)
      var year18Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1"
             });
    //  webmap.add(year18Layer, 1);

    // CensusTracs feature Year 2019 layer (polygon)
      var year19Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0"
            });
      webmap.addMany(year10Layer, year11Layer, year12Layer, year13Layer, year14Layer, year16Layer, year16Layer, year17Layer, year18Layer, year19Layer); 
 
      //using web map by Esri as basemap
        var myview = new MapView({
          webmap: new WebMap({
            basemap: { portalItem: { 
                    id: "3582b744bba84668b52a16b0b6942544"
               //   id: "a37abf36893f42bbaccb0cef64fb28ab"
              }
            },
       lys: [year19Layer, year18Layer, year17Layer, year16Layer, year15Layer, year14Layer, year13Layer, year12Layer, year11Layer, year10Layer]
          
          }),
          container: "mapid",
          constraints: {snapToZoom: true
          },
         center: [-78.871866,43.914656], zoom: 10
  
        });
      var popupTemplate = new PopupTemplate({
            title: "{CensusBoundary2019_CTNAME}",    // Show attribute value
            content: "<p>The census boundary has {infilling2019_csv_SumOfUnits} housing starts.</p>"   // Display text in pop-up
       });      
      //Home Button 
        var homeB = new Home({
            map: webmap,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(homeB,  "top-right");

      //FullScreen Button                 
       var fulls = new Fullscreen({
           map: webmap,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(fulls, "top-right");
                
      //----------------Time Slider----------
             
        // source codes: JavaScript - Time Slider
        //https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html
        // Time slider to update layerView filtering 
   
      const timeSlider = new TimeSlider({
        container: "timeSlider",
        mode: "instant", //shows 
        visible: true //shows the Slider
         }, "TimeSlider");
           
        myview.ui.add(timeSlider, "manual");

        let timeLayerView;
           
       myview.whenLayerView(lys).then(function (lysview) {
        timeLayerView = lysview;
      
        const fullTimeExtent = lys.timeInfo.fullTimeExtent;
        const start = fullTimeExtent.start;
        timeSlider.fullTimeExtent = fullTimeExtent;
              timeSlider.valuses = [start];
              timeSlider.stops = {
              interval: lys.timeInfo.interval
           };
            // layertimeExtent: {
         //  start: lys.timeInfo.fullTimeExtent.start, 
         //  end:s.timeInfo.fullTimeExtent.end 
         //    }; //timeExtent
           // view.ui.add(timeSlider, "manual");
      
          // current timeExtent by updating timeLayerView filter
         timeSlider.watch("timeExtent", function (date) {  
         timeLayerView.filter = {
         timeExtent: date
          }; //timeLayerView
         }); //function(date)

         timeSlider.set({ loop: false,
                         PlayRate: 10
                        });
         timeSlider.play();  
      }); // function(lysview)
      
      /*  
      const timerStart = new Date();
        const timerEnd = new Date();
        timerStart.setYear(timerStart.getYear() - 2);
        const timerStartDefault = new Date();
        timerStartDefault.setMonth(timerEnd.getMonth() -12); 

        var timeSlider = new TimeSlider({
         container: "timeSlider",
         mode: "time-window", //shows temporal data that falls within a given time range
         visible: true //show the Slider
         }, "TimeSlider");
         
        //});
        view.ui.add(timeSlider, "buttom-middle");

      // wait until the layer view is loaded
      let timeLayerView;
      
     view.whenLayerView(lys).then(function(layView) {
       timeLayerView = layView;
     
      const fullTimeExtent = las.timeInfo.fullTimeExtent;
      const start = fullTimeExtent.start;
     });

    // set up time slider properties based on layer timeInfo
      timeSlider.fullTimeExtent = fullTimeExtent;
      timeSlider.values = [start];
      timeSlider.stops = {
       interval: lys.timeInfo.interval
     };
      
*/
});

