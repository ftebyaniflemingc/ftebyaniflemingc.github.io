     require([
        "esri/WebMap",
        "esri/layers/FeatureLayer",
        "esri/views/MapView",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/widgets/TimeSlider"
       // "esri/core/watchUtils",
       // "esri/core/promiseUtils"
      ], function(WebMap, FeatureLayer, MapView, Legend, Expand, TimeSlider, watchUtils, promiseUtils ) {
        let timeSlider, firesChart;
        
         
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
            zoom: 11
      }); //mapview 
         
        // create five new instances of feature layers
        // based on the following definitions
        const url =
              "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer"/";
        const definitions = [
           {id: 9, title: "Year2010",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2010_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {  // set time interval to one month
              unit: "months",
              value: 1
            }}},
         {id: 8, title: "Year2011",  visible: true, 
          definitionExpression: "(CensusBoundary2011_CT> 0) AND (infilling2011_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: { 
              unit: "months",
              value: 1
            }}},
         {id: 7, title: "Year2012",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2012_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 6, title: "Year2013",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2013_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 5, title: "Year2014",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2014_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 4, title: "Year2015",  visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2015_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary20166CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 3, title: "Year2016", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2016_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 2, title: "Year2017", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2017_csv_Census_Tract > 0)",
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
               unit: "months",
              value: 1
            }}},
           
         {id: 1, title: "Year2018", visible: true, 
          definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2018_csv_Census_Tract > 0)",
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
            }}},
         {id: 0, title: "Year2019", visible: true, 
         definitionExpression: "(CensusBoundary2016_CT> 0) AND (infilling2019_csv_Census_Tract > 0)",         
               popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display text in pop-up
            },
          timeInfo: {
            startField: "{Date}", // name of the date field
            interval: {
              unit: "months",
              value: 1
           }}}
         ]    
        const layers = definitions.map(function(definition) {
          return createLayer(definition);
        });
        // add the Durham Region Layers
        webmap.addMany(layers);
         webmap.reorder(layers);
/*
        // get layerviews of each fire layers once the layers are loaded
        const eachlv = function getLayerViews() {
          return promiseUtils.eachAlways(
            layers.map(function(layer) {
              return view.whenLayerView(layer);
            })
          );
        };

        view.when(function() {
          // create a new instance of timeslider
          timeSlider = new TimeSlider({
            container: "timeSliderDiv",
            view: view,
            fullTimeExtent: {
              start: new Date(2018, 0, 1),
              end: new Date(2018, 11, 1)
            },
            playRate: 2000,
            stops: {
              interval: {
                value: 1,
                unit: "months"
              }
            }
          });

          // update the fire stats between 2014 - 2018 once timeExtent of
          // the timeSlider changes
          timeSlider.watch("timeExtent", function() {
            updateFiresStats();
          });
          createFiresChart();
        });

        view.whenLayerView(layers[0]).then(function(layerView) {
          watchUtils.whenFalseOnce(layerView, "updating", function() {
            updateFiresStats();
          });
        });

        // fire stats for each year between 2014 - 2018
        const sumAcres = {
          onStatisticField: "GIS_ACRES",
          outStatisticFieldName: "acres_sum",
          statisticType: "sum"
        };
        const fireCounts = {
          onStatisticField: "OBJECTID",
          outStatisticFieldName: "fire_counts",
          statisticType: "count"
        };
        const year = {
          onStatisticField: "ALARM_DATE",
          outStatisticFieldName: "year",
          statisticType: "max"
        };
        // stats query
        const statQuery = {
          outStatistics: [sumAcres, fireCounts, year]
        };

        // query five layerviews representing fires between 2014-2018
        // this will be called from the UudateFiresStats function
        const queryFeaturesForStats = function getQueryResults(
          layerViewsResults
        ) {
          return promiseUtils.eachAlways(
            layerViewsResults.map(function(result) {
              // If a Promise was rejected, you can check for the rejected error
              if (result.error) {
                return promiseUtils.resolve(result.error);
              }
              // The results of the Promise are returned in the value property
              else {
                const layerView = result.value;

                // set the timeExtent for the stats query object. But
                // we need to offset the timeExtent for each layer by
                // number of years specified in the layer.timeOffset
                let start = new Date(timeSlider.timeExtent.start);
                let end = new Date(timeSlider.timeExtent.end);
                start.setFullYear(
                  start.getFullYear() - layerView.layer.timeOffset.value
                );
                end.setFullYear(
                  end.getFullYear() - layerView.layer.timeOffset.value
                );

                // now we have the right timeExtent for each layer
                // set the timeExtent for the stats query
                statQuery.timeExtent = {
                  start: start,
                  end: end
                };
                // query the layerviews for the stats
                return layerView.queryFeatures(statQuery).then(
                  function(response) {
                    return response.features[0].attributes;
                  },
                  function(e) {
                    return promiseUtils.resolve(e);
                  }
                );
              }
            })
          );
        };

        // This function is called when the timeSlider's timeExtent changes
        // It queries each layer view for fire stats and updates the chart
        function updateFiresStats() {
          layerViewsEachAlways().then(function(layerViewsResults) {
            // query each and every fire layerviews for stats and process the results
            queryFeaturesForStats(layerViewsResults).then(function(
              fireStatsQueryResults
            ) {
              monthDiv.innerHTML = "";
              let month;
              let acresBurntList = [];
              let chartLabels = [];
              // fire stats query results are back. Loop through them and process.
              fireStatsQueryResults.map(function(result) {
                if (result.error) {
                  return promiseUtils.resolve(result.error);
                }
                // The results of the Promise are returned in the value property
                else {
                  // if the stats query returned a year for the given layerview
                  // then process and update the chart
                  if (result.value.year !== null) {
                    // extract the year and month from the date
                    let date = new Date(result.value.year);
                    let year = date.getFullYear();

                    // array of burnt acres sum returned in the query results
                    // for each layerview representing fires between 2014-2018
                    acresBurntList.push(result.value.acres_sum.toFixed(2));

                    //chart labels will show the year and count of fires for that year
                    const label = year + ", " + result.value.fire_counts;
                    chartLabels.push(label);
                  }
                }
              });
              // query results have been processed. Update the fires chart to display
              // sum of acres burnt for the given month and year
              firesChart.data.datasets[0].data = acresBurntList;
              firesChart.data.labels = chartLabels;
              firesChart.update();
              startMonth = timeSlider.timeExtent.start.toLocaleString(
                "default",
                { month: "long" }
              );
              endMonth = timeSlider.timeExtent.end.toLocaleString("default", {
                month: "long"
              });
              monthDiv.innerHTML =
                "<b> Month: <span>" +
                startMonth +
                " - " +
                endMonth +
                "</span></b>";
            });
          });
        }

        // Creates five instances of feature layers each representing
        // fires for the given year (between 2014 - 2018)
        function createLayer(definition) {
          const year = definition.year;

          return new FeatureLayer({
            url: url + definition.id,
            timeOffset: {
              value: definition.offset,
              unit: "years"
            },
            outFields: ["*"],
            popupTemplate: {
              title: "{ALARM_DATE}",
              content: "{YEAR_}, {ALARM_DATE}, {GIS_ACRES}"
            }
          });
        }

        // create the legend
        const layerInfos = layers.map(function(layer, i) {
          return {
            title: "",
            layer: layer
          };
        });
        const legend = new Legend({
          view: view,
          layerInfos: layerInfos
        });
        view.ui.add(legend, "top-left");

        // Fires chart section
        const monthDiv = document.getElementById("monthDiv");
        const infoDiv = document.getElementById("infoDiv");
        const chartCanvas = document.getElementById("fireChart");
        const infoDivExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Expand earthquakes info",
          view: view,
          content: infoDiv,
          expanded: true
        });
        view.ui.add(infoDivExpand, "top-right");

        // create a bar chart to display sum of acres
        // burnt for the given month and year.
        function createFiresChart() {
          Chart.defaults.global.defaultFontColor = "#d1d1d1";
          firesChart = new Chart(chartCanvas.getContext("2d"), {
            type: "bar",
            data: {
              labels: [2014, 2015, 2016, 2017, 2018],
              datasets: [
                {
                  label: "Acres burnt, year, fire counts",
                  backgroundColor: "#ff642e", //"#B266FF",
                  data: [0, 0, 0, 0, 0]
                }
              ]
            },
            options: {
              responsive: false,
              legend: {
                position: "bottom"
              },
              title: {
                display: true,
                text: "Acres burnt by month",
                fontFamily:
                  "'Avenir Next W00','Helvetica Neue', Helvetica, Arial, sans-serif"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      callback: function(value) {
                        if (value % 1 === 0) {
                          return value;
                        }
                      }
                    },
                    gridLines: {
                      zeroLineColor: "#d1d1d1",
                      color: "#696969"
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      zeroLineColor: "#d1d1d1",
                      color: "#696969"
                    }
                  }
                ]
              },
              tooltips: {
                callbacks: {
                  title: function(tooltipItem, data) {
                    return "Fire";
                  },
                  label: function(tooltipItem, data) {
                    const yearCount = tooltipItem.xLabel.split(",");
                    let customTooltip = [];
                    customTooltip.push("Year: " + yearCount[0]);
                    customTooltip.push("Count:" + yearCount[1]);
                    customTooltip.push("Acres:" + tooltipItem.yLabel);
                    return customTooltip;
                  }
                },
                displayColors: false
              }
            }
          });
        } */
      });
 
