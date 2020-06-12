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
      "esri/widgets/TimeSlider",
    
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer, Layer, Home, Fullscreen, LayerList, Legend, Expand, 
                  TimeSlider, PopupTemplate ){
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
            /*
      // Mapview, referencing Map instance
      const myview = new MapView({
            map: mymap,    // The Map instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview
      */
   // create ten new instances of feature layers based on the following definitions
        const url =
          "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      
      const definitions = [
         {id: 9, title: "Year2010",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2010_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 8, title: "Year2011",  visible: true, 
          definitionExpression: "(CensusBoundary2011_CT> 0) AND (infilling2011_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 7, title: "Year2012",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2012_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 6, title: "Year2013",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2013_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 5, title: "Year2014",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2014_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 4, title: "Year2015",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2015_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 3, title: "Year2016", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2016_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 2, title: "Year2017", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2017_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
           
         {id: 1, title: "Year2018", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2018_csv_Census_Tract > 0)",
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }},
         {id: 0, title: "Year2019", visible: true, 
         definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2019_csv_Census_Tract > 0)",         
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            }}
         ];    
      
      const layer = FeatureLayer(function() {
          
       
        // add the california fire layers
        mymap.addMany(layer);
      mymap.reorder(layer);
             });
// Mapview, referencing WebMap instance
      var myview = new MapView({
            map: mymap,    // The WebMap instance created above
            layer: [layer],
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
        myview.ui.add(myhome,  {position: "top-left", index:1 });
        
      
      //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-left", index:2 });
                
      
      //-------------------Layer List-------------------------------
      myview.when(function() {
            var layerList = new LayerList({
                  view: myview,
                  visible: true // show the button
            }, "Layer");
  
            // Add widget to screen
            myview.ui.add(layerList, {position: "top-right", index:3});
      });//LayerList
           
        //---------------Legend---------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true,
        }); //Expand 
        myview.ui.add(mylegend, "bottom-left");
      
     //---------------Time Slider--------------- 
      
      const timeSlider = new TimeSlider ({
   //container: "timeSliderDiv" ,
   mode: "instant" ,
   view: myview
});
myview.ui.add (timeSlider, "bottom-right" );

let timeLayerView;

myview.whenLayerView(layer).then ( function ( lv ) {
  timeLayerView = lv;

  timeSlider.fullTimeExtent = layer.timeInfo.fullTimeExtent;
  timeSlider.stops = {
    interval : {
       value : 1 ,
       unit : "years"
    },
    timeExtent : {
       start : layer.timeInfo.fullTimeExtent.start, // 
      end: layer.timeInfo.fullTimeExtent.end // 
    }
  }


});

myview.ui.add (timeSlider, "bottom-right" );

timeSlider.watch ( "timeExtent" , function ( value ) {
   // update layer view filter to reflect current timeExtent
  timeLayerView.filter = {
    timeExtent : value
  };
});

      
      /*      
       // How to get Layer view of ten layers while layers are loading
        const layerViewsEachAlways = function getLayerViews() {
          //promise method to wait for a number of promises to either resolve or reject.
              return promiseUtils.eachAlways(
            allayers.map(function(layer) {
              return myview.whenLayerView(layer);
            })//function(layer)
          );//return
        };//getLayerViews()
      
      //----------timeSlider----------
      
        myview.when(function() {
       
          mytimeSlider = new TimeSlider({
            container: "timeSlider",
            mod: "cumulative-from-start",
            view: myview,
            fullTimeExtent: {
              start: new Date(2009, 12, 31),
              end: new Date(2019, 12, 31)
            },
            playRate: 1500,
            stops: {
              interval: {
                value: 1,
                unit: "years"
              }
            }
          });//mytimeSlider

       // watch for time slider timeExtent updating
        mytimeSlider.watch("timeExtent", function() {
          updateSumUnits();
          });
          newChart();
        });
      
          //watchUtils will check for a property change and wait for layer view get updating and get the features
          myview.whenLayerView(allayers[0]).then(function(mylv) {
          watchUtils.whenFalseOnce(mylv, "updating", function() {updateSumUnits();
          });
        });
      
        // Sum of Units query requirements
      
        const sumOfUnits = {onStatisticField: "Shape__Area", outStatisticFieldName: "units_sum", statisticType: "sum"};
        const censusTract = {onStatisticField: "OBJECTID", outStatisticFieldName: "units_counts", statisticType: "count"};
        const year = {onStatisticField: "Date", outStatisticFieldName: "year", statisticType: "max"};
        // my query
        const myq = {outStatistics: 
                     [sumOfUnits, censusTract, year]
        };

      // Query setting using getQueryResults
      const suq = function getQueryResults(layerViewsResults) {
          return promiseUtils.eachAlways(layerViewsResults.map(function(result) {
              //reject if there is any error in the result
                if (result.error) {
                return promiseUtils.resolve(result.error);              
                }
              // The results of the Promise are returned in the value property
              else {            
                    const mylv = result.value;
                //  timeExtent will be loaded in the query object
             
                var thestart = new Date(mytimeSlider.timeExtent.start);
                var theend = new Date(mytimeSlider.timeExtent.end);
                thestart.setFullYear(thestart.getFullYear() - mylv.layer.timeOffset.value);
                theend.setFullYear(theend.getFullYear() - mylv.layer.timeOffset.value);

                myq.timeExtent = {
                  start: thestart,
                  end: theend
                };
                // query feature from the layerviews 
                return mylv.queryFeatures(myq).then(function(response) {
                    return response.features[0].attributes;
                },
                  function(e) {return promiseUtils.resolve(e);
                              }//resole method of promise
                );//function(back)
              }//else
            })//function(final)
          );//return promiseUtils.tenYears(
        };//getQueryResults

      function updateSumUnits(){
     layerViewsEachAlways().then(function(mylvResult) {
    // query each and every sum of units layerviews for stats and process the results
    suq(mylvResult).then(function(suqResult){
      // fire stats query results are back. Loop through them and process.
       monthDiv.innerHTML = "";
              let month;
              let ctList = [];
              let lblChart = [];
          //sum of units query reslts
          suqResult.map(function(result){
            
               if (result.error) {
          return promiseUtils.resolve(result.error);
        }
        // The results of the Promise are returned in the value property
        else {
          // if the stats query returned a year for the given layerview
          // then process and update the chart
          if (result.value.year !== null){
            // extract the year and month from the date
            let date = new Date(result.value.year);
            let year = date.getFullYear();
           // for each layerview representing units of houses between 2010-2019
            //ctList.push(result.value.units_sum.toFixed(2));
               ctList.push(result.value.units_sum);
            //chart labels will show the year and count of units for that year
            const label = year + ", " + result.value.CensusTract;
            lblChart.push(label);
          }//if
        }//else
      });//funct
      
               myChart.data.datasets[0].data = ctList;
               myChart.data.labels = lblChart;
               myChart.update();
             var startYear = mytimeSlider.timeExtent.start.toLocaleString("default", { year: "long" });
             var endYear = mytimeSlider.timeExtent.end.toLocaleString("default", { year: "long" });
              monthDiv.innerHTML = "<b> Year: <span>" + startYear + " - " + endYear + "</span></b>";
          
          /* 
              var startMonth = mytimeSlider.timeExtent.start.toLocaleString("default", { month: "long" });
              var endMonth = mytimeSlider.timeExtent.end.toLocaleString("default", { month: "long" });
              monthDiv.innerHTML = "<b> Month: <span>" + startMonth + " - " + endMonth + "</span></b>";
              
                  });
               });
              }  
            
        // Ten instances of feature layers between 2010 - 2019
        function tenLayers(definition) {
          const year = definition.year;

          return new FeatureLayer({
            url: url + definition.id,
            timeOffset: {
              value: definition.offset,
              unit: "years"
            },
            outFields: ["*"],
                 popupTemplate: {       
                  title: "The census boundary: {CensusBoundary2016_CT}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
            popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  }  // Display text in pop-up 
              //    content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts in {Date} ." 
            
          });//FeatureLayer
        }//tenLayer 
      
       //---------------Home Button---------------
        var myhome = new Home({
            view: myview,
            visible: true //show the button
            }, "Home");
                              
//Add the widget to the top right of screen
        myview.ui.add(myhome,  {position: "top-left", index:1 });
        
      
      //---------------FullScreen Button---------------
      
       var myfulls = new Fullscreen({
           view: myview,
            visible: true //show the button
         }, "Fullscreen");
        myview.ui.add(myfulls, {position: "top-left", index:2 });
                
      
      //-------------------Layer List-------------------------------
      myview.when(function() {
            var layerList = new LayerList({
                  view: myview,
                  visible: true // show the button
            }, "Layer");
  
            // Add widget to screen
            myview.ui.add(layerList, {position: "top-right", index:3});
      });//LayerList
           
        //---------------Legend---------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true,
        }); //Expand 
        myview.ui.add(mylegend, "bottom-left");
      
      const layerInfos = allayers.map(function(layer, i) {
          return {
            title: "",
            layer: layer
          };
        });
        const mylegend = new Legend({
          view: myview,
          layerInfos: layerInfos
        });
        myview.ui.add(mylegend, "bottom-left");
      
      
      // Units chart section
      const monthDiv = document.getElementById("monthDiv");
        const chTitle = document.getElementById("chTitle");
        const chFrame = document.getElementById("barchart");
        const chex = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Expand census tract and sum of units info",
          view: myview,
          contant: "chTitle",
          expanded: true
        });
        myview.ui.add(chex, {position: "top-left", index:3 });
      
      // create a bar chart to display sum of units for the given month and year.
      function newChart() {
          Chart.defaults.global.defaultFontFamily = '"Lato",sans-serif';
          Chart.defaults.global.defaultFontSize = 8;
          Chart.defaults.global.defaultFontColor = 'white';
          myChart = new Chart(chFrame.getContext("2d"), {
            type: "bar",
            data: {
               labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
              datasets: [{data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]
            },//data
            options: {responsive: false,legend: {position:"bottom"},
              title: {display: true,
                       text: " Units of houses in sought Durham Region built by Year"},
              scales: {
                     yAxes: [{  ticks: {beginAtZero: true,
                            callback: function(value) {if (value % 1 === 0) {return value;} }  },
                             gridLines: {zeroLineColor: '##858585',color: '#c2bebe' }}],
                     xAxes: [{gridLines: {zeroLineColor: '##858585',color: '#c2bebe' }}]
              },//scales
              tooltips: {
                callbacks: {
                  title: function(tooltipItem, data) {return"Units";},
                  label: function(tooltipItem, data) {
                    const unit_y = tooltipItem.xLabel.split(",");
                    let customTooltip = [];
                    customTooltip.push("Year: " + unit_y[0]);
                    customTooltip.push("Units:" + unit_y[1]);
                    customTooltip.push("CencusTract:" + tooltipItem.yLabel);
                    return customTooltip;
                  }//lable
                },//callback
                displayColors: false
              }//tooltips
            }//options
          });//mychart
        }//function
          */
     
}); //require
