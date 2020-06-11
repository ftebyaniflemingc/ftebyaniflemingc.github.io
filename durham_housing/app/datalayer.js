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
      "esri/core/watchUtils",
      "esri/core/promiseUtils",
      "esri/PopupTemplate",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(Map, MapView, FeatureLayer, Layer, Home, Fullscreen, LayerList, Legend, Expand, 
                  TimeSlider, watchUtils, promiseUtils, PopupTemplate ){
    let mytimeSlider, myChart;
      //---------------FeatureLayers---------------
   /// Creates a Map instance
      const mymap = new Map({
          basemap: {//basemap source: https://www.arcgis.com/home/item.html?id=3582b744bba84668b52a16b0b6942544
            portalItem: {
              id: "3582b744bba84668b52a16b0b6942544" 
            }
          }
        });
            
      // Mapview, referencing Map instance
      const myview = new MapView({
            map: mymap,    // The Map instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview
      
   // create ten new instances of feature layers based on the following definitions
        const url =
          "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
          //    "https://services1.arcgis.com/pMeXRvgWClLJZr3s/ArcGIS/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
      
      const definitions = [
         {id: 9, title: 2010, visible: true, offset: 0},
         {id: 8, title: 2011, visible: true, offset: 1},
         {id: 7, title: 2012, visible: true, offset: 2},
         {id: 6, title: 2013, visible: true, offset: 3},
         {id: 5, title: 2014, visible: true, offset: 4},
         {id: 4, title: 2015, visible: true, offset: 5},
         {id: 3, title: 2016, visible: true, offset: 6},
         {id: 2, title: 2017, visible: true, offset: 7},
         {id: 1, title: 2018, visible: true, offset: 8},
         {id: 0, title: 2019, visible: true, offset: 9}
          ];    
      
      const allayers = definitions.map(function(definition) {
          return tenLayers(definition);
        });
        // add the california fire layers
        mymap.addMany(allayers);
      mymap.reorder(allayers);
      
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
        const censusTract = {onStatisticField: "SumOfUnits", outStatisticFieldName: "units_counts", statisticType: "count"};
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
            // extract the year and month from the date*/
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
                  title: "{CensusBoundary2016_CT}",
                  content:"{infilling2010_csv_SumOfUnits}, {Date}"
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
      /*
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: 'classic' // other styles include 'classic'
          }),
          view: myview,
          expanded: true,
        }); //Expand 
        myview.ui.add(mylegend, "bottom-left");
      */
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
          
     
}); //require
