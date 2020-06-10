//---------------esri rquirements ---------------
require([
      "esri/WebMap",
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
        function(WebMap, MapView, FeatureLayer, Layer, Home, Fullscreen, LayerList, Legend, Expand, 
                  TimeSlider, watchUtils, promiseUtils, PopupTemplate ){
    let mytimeSlider, mychart;
      //---------------FeatureLayers---------------
   /// Creates a WebMap instance
      const webmap = new WebMap({
          basemap: {
            portalItem: {
              id: "3582b744bba84668b52a16b0b6942544"
            }
          }
        });
            
      // Mapview, referencing WebMap instance
      const myview = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview
      
   // create ten new instances of feature layers based on the following definitions
        const url =
          "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/";
        const definitions = [
         {id: 9, title: "Year2010",  visible: true, offset: 0},
         {id: 8, title: "Year2011",  visible: true, offset: 1},
         {id: 7, title: "Year2012",  visible: true, offset: 2},
         {id: 6, title: "Year2013",  visible: true, offset: 3},
         {id: 5, title: "Year2014",  visible: true, offset: 4},
         {id: 4, title: "Year2015",  visible: true, offset: 5},
         {id: 3, title: "Year2016", visible: true, offset: 6},
         {id: 2, title: "Year2017", visible: true, offset: 7},
         {id: 1, title: "Year2018", visible: true, offset: 8},
         {id: 0, title: "Year2019", visible: true, offset: 6}
          ];    
      
      const allayers = definitions.map(function(definition) {
          return tenLayers(definition);
        });
        // add the california fire layers
        webmap.addMany(allayers);
      webmap.reorder(allayers);
      
      // Ten instances of feature layers between 2010 - 2019
        function tenLayers(definition) {
          const newyear = definition.year;

          return new FeatureLayer({
            url: url + definition.id,
            timeOffset: {
              value: definition.offset,
              unit: "months"
            },
            outFields: ["*"],
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            }
          });//FeatureLayer
        }//tenLayer 
      
       // How to get Layer view of ten layers while layers are loading
        const layerViewsEachAlways = function getLayerViews() {
          //promise method to wait for a number of promises to either resolve or reject.
              return promiseUtils.eachAlways(
            allayers.map(function(layer) {
              return myview.whenLayerView(layer);
            })//function(layer)
          );//return
        };//getLayerViews()
      
      
      //timeSlider
      
        myview.when(function() {
       
          mytimeSlider = new TimeSlider({
            container: "timeSlider",
            mod: "cumulative-from-start",
            view: myview,
            fullTimeExtent: {
              start: new Date(2009, 12, 31),
              end: new Date(2019, 12, 31)
            },
            playRate: 1000,
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
      
        const sumOfUnits = {onStatisticField: "SumOfUnits", outStatisticFieldName: "units_sum", statisticType: "sum"};
        const CensusTract = {onStatisticField: "Census_Tract", outStatisticFieldName: "Census_counts", statisticType: "count"};
        const year = {onStatisticField: "Date", outStatisticFieldName: "year", statisticType: "max"};
        // my query
        const myq = {outStatistics: 
                     [sumOfUnits, CensusTract, year]
        };

      // Query setting using getQueryResults
      const suq = function getQueryResults(mylvResult) {
          return promiseUtils.eachAlways(mylvResult.map(function(final) {
              //reject if there is any error in the result
                if (final.error) {
                return promiseUtils.resolve(final.error);              }
              // The results of the Promise are returned in the value property
              else {            const mylv = final.value;
                //  timeExtent will be loaded in the query object
             
                var thestart = new Date(mytimeSlider.timeExtent.start);
                var theend = new Date(mytimeSlider.timeExtent.end);
                thestart.setFullYear(thestart.getFullYear() - mylv.layer.timeOffset.value);
                theend.setFullYear(theend.getFullYear() - mylv.layer.timeOffset.value);

                myq.timeExtent = {
                  start: thestart,
                  end: theend};
                // query feature from the layerviews 
                return mylv.queryFeatures(myq).then(function(back) {
                    return back.features[0].attributes;},
                  function(next) {return promiseUtils.resolve(next);}//resole method of promise
                );//function(back)
              }//else
            })//function(final)
          );//return promiseUtils.tenYears(
        };//getQueryResults

      function updateSumUnits(){
     layerViewsEachAlways().then(function(mylvResult) {
    // query each and every fire layerviews for stats and process the results
    suq(mylvResult).then(function(suqResult){
      // fire stats query results are back. Loop through them and process.
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
            // array of burnt acres sum returned in the query results
            // for each layerview representing fires between 2014-2018
            ctList.push(result.value.acres_sum.toFixed(2));
            //chart labels will show the year and count of fires for that year
            const label = year + ", " + result.value.CensusTract;
            lblChart.push(label);
          }}
      });//functio(result)  
      /*
      function updateSumUnits() {
          TenLayersView().then(function(mylvResult) {
          suq(mylvResult).then(function(suqResult) {
              YEAR.innerHTML = "";
              let year;
              let ctList = [];
              let lblChart = [];
              //sum of units query reslts
              suqResult.map(function(result) {
                 // extract the year and month from the date
                 var thedate = new Date(result.value.year);
                 var theyear = date.getFullYear();

                // for each layerview representing units of houses between 2010-2019
                ctList.push(result.value.sumOfUnits.toFixed(2));

                //chart labels will show the year and count of house units for that year
                const hLable = year + ", " + result.value.CensusTract;
                 lblChart.push(hLable);
                
              });//functio(result)  
              */
      
               mychart.data.datasets[0].data = ctList;
               mychart.data.labels = lblChart;
               mychart.update();
              startMonth = mytimeSlider.timeExtent.start.toLocaleString("default", { month: "long" });
              endMonth = mytimeSlider.timeExtent.end.toLocaleString("default", { month: "long" });
              monthDiv.innerHTML = "<b> Month: <span>" + startMonth + " - " + endMonth + "</span></b>";
                  });
               });
              }  
                /*
              mychart.data.datasets[0].data = ctList;
              mychart.data.labels = lblChart;
              mychart.update();
              startYear = mytimeSlider.timeExtent.thestart.toLocaleString("default",{year:"long"});
              endYear = mytimeSlider.timeExtent.theend.toLocaleString("default", {year:"long"});
              YEAR.innerHTML = "<b> YEAR: <span>" + startYear +  " - " +  endYear +  "</span></b>";
            });
          });
        }*/
      
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
      
      
      const YEAR = document.getElementById("YEAR");
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
      
      function newChart() {
            
           //mychart.defaults.global.defaultFontFamily = '"Lato",sans-serif';
          // mychart.defaults.global.defaultFontSize = 8;
           //mychart.defaults.global.defaultFontColor = 'white';
           mychart = new Chart(chFrame).getContext('2d'), {
            type: "bar",
            data: {
              labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
              datasets: [{data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}]
            },
            options: {responsive: false,legend: {position:'bottom'},
              title: {display: true,
                       text: " Units of houses in sought Durham Region built by Year"},
              scales: {
                     yAxes: [{  ticks: {beginAtZero: true,
                            callback: function(value) {if (value % 1 === 0) {return value;} }  },
                             gridLines: {zeroLineColor: '##858585',color: '#c2bebe' }}],
                     xAxes: [{gridLines: {zeroLineColor: '##858585',color: '#c2bebe' }}]
              },
              tooltips: {
                    callbacks: {
                      label: function(tooltipItem, data) {
                  //x lables by year and the number of units
                          const unit_y = tooltipItem.xLabel.split(',');
                    let customTooltip = [];
                    customTooltip.push('Year: ' + unit_y[0]);
                    customTooltip.push('Units:' + unit_y[1]);
                  //y lable by the census tracts
                    customTooltip.push("CencusTract:" + tooltipItem.yLabel);
                    return customTooltip;
                  }
                },//return
                displayColors: false
              }
            }
           };
        }
     
     
}); //require
