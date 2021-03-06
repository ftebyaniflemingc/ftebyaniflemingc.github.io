//---------------esri rquirements ---------------
require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      
      "esri/widgets/Home", 
      "esri/widgets/Fullscreen",
      
      "esri/widgets/Legend",
      "esri/widgets/Expand",
      "esri/widgets/TimeSlider",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer, Home, Fullscreen, Legend, Expand, 
                  TimeSlider,  PopupTemplate ){
    let layerView;
      //---------------FeatureLayers---------------
   /// Creates a Map instance
     
    const mymap = new Map({
         basemap: {//basemap source: https://www.arcgis.com/home/item.html?id=3582b744bba84668b52a16b0b6942544
            portalItem: { id: "3582b744bba84668b52a16b0b6942544"  }    }
          
        });  
   // create ten new instances of feature layers based on the following definitions
        var allayers = new FeatureLayer({
                url:  "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/WebLayer2/FeatureServer/",
    /*    
      sublayers:[
         {id: 9, title: 2010, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 8, title: 2011, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
          popupTemplate: {       
                  title: "The census boundary: {infilling2011_csv_Census_Tract}",
                  content: "<p>has  {infilling2011_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 7, title: 2012, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
          popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 6, title: 2013, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2013_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 5, title: 2014, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2014_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 4, title: 2015, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
           interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2015_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 3, title: 2016, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 2, title: 2017, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2017_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 1, title: 2018, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2018_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         },
         {id: 0, title: 2019, visible: true, 
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
         popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
         }]    
         },
      }); 
      //const allayers = definitions.map(function(definition) {
      // add the california fire layers
        
       title: "South Durham Houses Built During 2010 to 2019",
          // set the CSVLayer's timeInfo based on the date field
      timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {unit: "months",value: 3}}, 
        
          renderer: {
            type: "simple",
            field: "SumOfUnits",
            symbol: {
              type: "simple-marker",
              color: "orange",
              outline: null
            },
            visualVariables: [{
                type: "size",
                field: "SumOfUnits",
                stops: [
                  {value: 1, size: "5px" },
                  {value: 25, Size: "15" },
                  {value: 50, size: "35" }
                ]},
              {
                type: "color",
                field: "Start_Year",
                stops: [
                  {value: "2010", color: "#F9C653", label: "2010"},
                  {value: "2011", color: "#F8864D", label: "2011"},
                  {value: "2012", color: "#C53C06", label: "2012"},
                  {value: "2013", color: "#C53C06", label: "2013"},
                      {value: "2014", color: "#C53C06", label: "2014"},
                      {value: "2015", color: "#C53C06", label: "2015"},
                      {value: "2016", color: "#C53C06", label: "2016"},
                      {value: "2017", color: "#C53C06", label: "2017"},
                      {value: "2018", color: "#C53C06", label: "2018"},
                      {value: "2019", color: "#C53C06", label: "2019"}
                ]
              }
            ]}, 
                     popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
           
          //}*/
        });
                    
                    mymap.add(allayers);
     
      
      // Mapview, referencing Map instance
      const myview = new MapView({
            map: mymap,    // The Map instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            layers: [allayers],
            zoom: 10
      }); //mapview

       // create a new time slider widget
        // set other properties when the layer view is loaded
        // by default timeSlider.mode is "time-window" - shows
        // data falls within time range
        const timeSlider = new TimeSlider({
          container: "timeSlider",
          playRate: 1000,
          stops: {
            interval: {
              value: 1,
              unit: "years"
            }
          }
        });
        myview.ui.add(timeSlider, "manual");

        // wait till the layer view is loaded
        myview.whenLayerView(allayers).then(function(lv) {
          layerView = lv;

          // start time of the time slider - 2009/12/31
          const start = new Date(2009, 12, 31);
          // set time slider's full extent to 2019/12/31
          // - until end date of layer's fullTimeExtent
          timeSlider.fullTimeExtent = {
            start: start,
            end: allayers.timeInfo.fullTimeExtent.end
          };

          // We will be showing earthquakes with one day interval
          // when the app is loaded we will show earthquakes that
          // happened between 5/25 - 5/26.
          const end = new Date(start);
          // end of current time extent for time slider
          // showing earthquakes with one day interval
          end.setDate(end.getDate() + 1);

          // Values property is set so that timeslider
          // widget show the first day. We are setting
          // the thumbs positions.
          timeSlider.values = [start, end];
        });

        // watch for time slider timeExtent change
        timeSlider.watch("timeExtent", function() {
          // only show earthquakes happened up until the end of
          // timeSlider's current time extent.
          allayers.definitionExpression =
            "time <= " + timeSlider.timeExtent.end.getTime();

          // now gray out earthquakes that happened before the time slider's current
          // timeExtent... leaving footprint of earthquakes that already happened
          layerView.effect = {
            filter: {
              timeExtent: timeSlider.timeExtent,
              geometry: myview.extent
            },
            excludedEffect: "grayscale(20%) opacity(12%)"
          };

          // run statistics on earthquakes fall within the current time extent
          const statQuery = layerView.effect.filter.createQuery();
         statQuery.outStatistics = [sumOfUnits, censusTract, year];

          allayers.queryFeatures(statQuery).then(function(result) {
              let htmls = [];
              statsDiv.innerHTML = "";
              if (result.error) {
                return result.error;
              } else {
                if (result.features.length >= 1) {
                  var attributes = result.features[0].attributes;
                  for (name in statsFields) {
                    if (attributes[name] && attributes[name] != null) {
                      const html =
                        "<br/>" + statsFields[name] + ": <b><span> " + attributes[name].toFixed(2) +  "</span></b>";
                      htmls.push(html);
                    }
                  }
                  var yearHtml =
                    "<span>" + result.features[0].attributes["units_sum"] +  "</span> houses were built between " +
                    timeSlider.timeExtent.start.toLocaleDateString() +   " - " +
                    timeSlider.timeExtent.end.toLocaleDateString() +
                    ".<br/>";

                  if (htmls[0] == undefined) {
                    statsDiv.innerHTML = yearHtml;
                  } else {
                    statsDiv.innerHTML =
                      yearHtml + htmls[0] + htmls[1] + htmls[2] + htmls[3];
                  }
                }
              }
            })
            //.catch(function(error) {console.log(error); });
        });

       const sumOfUnits = {onStatisticField: "SumOfUnits", outStatisticFieldName: "units_sum", statisticType: "sum"};
        const censusTract = {onStatisticField: "CT", outStatisticFieldName: "units_counts", statisticType: "count"};
        const year = {onStatisticField: "Date", outStatisticFieldName: "year", statisticType: "max"};
        // my query
      //  const myq = {outStatistics: [sumOfUnits, censusTract, year]
      
     /*   const avgDepth = { onStatisticField: "depth",     outStatisticFieldName: "Average_depth",     statisticType: "avg"        };

        const magMax = {     onStatisticField: "mag",   outStatisticFieldName: "Max_magnitude", statisticType: "max" };

        const magAvg = {
          onStatisticField: "mag",
          outStatisticFieldName: "Average_magnitude",
          statisticType: "avg"
        };

        const magMin = {
          onStatisticField: "mag",
          outStatisticFieldName: "Min_magnitude",
          statisticType: "min"
        };

        const tremorCount = {
          onStatisticField: "mag",
          outStatisticFieldName: "tremor_count",
          statisticType: "count"
        };*/

        const statsFields = {
          units_sum: "Numbers of units",
          units_counts: "Census Boundary",
          year: "Year"
          
        };
      
       //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-left", index:2 });
                
      /*
      //-------------------Layer List-------------------------------
      myview.when(function() {
            var layerList = new LayerList({
                  view: myview,
                  visible: true // show the button
            }, "Layer");
  
            // Add widget to screen
            myview.ui.add(layerList, {position: "top-right", index:2});
      });//LayerList
*/     

        // add a legend for the earthquakes layer
        const legendExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Legend",
          view: myview,
          content: new Legend({
            view: myview
          }),
          expanded: false
        });
        myview.ui.add(legendExpand, {position: "top-left", index:3 });

        const statsDiv = document.getElementById("statsDiv");
        const infoDiv = document.getElementById("infoDiv");
        const infoDivExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Expand Houses Built info",
          view: myview,
          content: infoDiv,
          expanded: true
        });
        myview.ui.add(infoDivExpand, {position: "top-left", index:1 });
     
}); //require
