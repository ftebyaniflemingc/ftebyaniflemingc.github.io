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
       
   // create ten new instances of feature layers based on the following definitions
        var layer1 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9",
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      popupTemplate: {       
                  title: "The census boundary: {infilling2010_csv_Census_Tract}",
                  content: "<p>has  {infilling2010_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer1);
        var layer2 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8",
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      popupTemplate: {       
                  title: "The census boundary: {infilling2012_csv_Census_Tract}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer2);
        var layer3 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7",

      popupTemplate: {       
                  title: "The census boundary: {infilling2012_csv_Census_Tract}",
                  content: "<p>has  {infilling2012_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer3);
        var layer4 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6",

      popupTemplate: {       
                  title: "The census boundary: {infilling2013_csv_Census_Tract}",
                  content: "<p>has  {infilling2013_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer4);
      
        var layer5 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5",

      popupTemplate: {       
                  title: "The census boundary: {infilling2014_csv_Census_Tract}",
                  content: "<p>has  {infilling2014_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer5);
      
      var layer6 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4",

      popupTemplate: {       
                  title: "The census boundary: {infilling2015_csv_Census_Tract}",
                  content: "<p>has  {infilling2015_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer6);
      
      var layer7 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3",

      popupTemplate: {       
                  title: "The census boundary: {infilling2016_csv_Census_Tract}",
                  content: "<p>has  {infilling2016_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer7);
      
      var layer8 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2",

      popupTemplate: {       
                  title: "The census boundary: {infilling2017_csv_Census_Tract}",
                  content: "<p>has  {infilling2017_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer8);
      
      var layer9 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1",

      popupTemplate: {       
                  title: "The census boundary: {infilling2018_csv_Census_Tract}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer9);
      
      var layer10 = new FeatureLayer({ 
     url : "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0",

      popupTemplate: {       
                  title: "The census boundary: {infilling2019_csv_Census_Tract}",
                  content: "<p>has  {infilling2019_csv_SumOfUnits} housing starts in {Date}.</p>"
                  },  // Display text in pop-up 
          timeInfo: {
            startField: "{Date}", // name of the date field
            }
        });
      mymap.add(layer10);
      mymap.layers.addMany([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]);

      // add the california fire layers
        //mymap.layers.add(layer);
      //mymap.reorder(layer);
         
// Mapview, referencing WebMap instance
      var myview = new MapView({
            map: mymap,    // The WebMap instance created above
            layers: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10],
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
        // time slider widget initialization
        const timeSlider = new TimeSlider({
          container: "timeSlider",
          mode: "time-window",
          view: myview
        });
        myview.ui.add(timeSlider, "bottom-right");
      
      myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]).then(function(lv) {
          layerView = lv

        // add the UI for titles, stats and chart.
        //myview.ui.add("titleDiv", "bottom-right");

        myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10]).then(function(lv) {
          const fullTimeExtent = [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10].timeInfo.fullTimeExtent;

          // set up time slider properties
          timeSlider.fullTimeExtent = fullTimeExtent;
          timeSlider.stops = {
            interval: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10].timeInfo.interval
          };
        });      
        });
      /*   
      const timeSlider = new TimeSlider({
          container: "timeSlider",
          playRate: 15000,
          stops: {
            interval: {
              value: 1,
              unit: "years"
            }
          }
        });
        myview.ui.add(timeSlider, "bottom-right");

        // wait till the layer view is loaded
        myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]).then(function(lv) {
          layerView = lv;

          // start time of the time slider - 5/25/2019
          const start = new Date(2009, 12, 31);
          // set time slider's full extent to
          // 5/25/5019 - until end date of layer's fullTimeExtent
          timeSlider.fullTimeExtent = {
            start: start,
            end: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ].timeInfo.fullTimeExtent.end
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
          [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ].definitionExpression =
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
        });

      
      /*
      const timeSlider = new TimeSlider ({
   //container: "timeSliderDiv" ,
   mode: "instant" ,
   view: myview
});
myview.ui.add (timeSlider, "bottom-right" );

let timeLayerView;

myview.whenLayerView([layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ]).then ( function ( lv ) {
  timeLayerView = lv;

  timeSlider.fullTimeExtent = [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10 ].timeInfo.fullTimeExtent;
  timeSlider.stops = {
    interval : {
       value : 1 ,
       unit : "years"
    },
    timeExtent : {
       start : [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10].timeInfo.fullTimeExtent.start, // 
      end: [layer1, layer2, layer3, layer4, layer5, layer6, layer8,layer9, layer10].timeInfo.fullTimeExtent.end // 
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
