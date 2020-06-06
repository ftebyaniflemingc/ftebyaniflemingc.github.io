require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend",
        "esri/widgets/Expand",
      "dojo/dom",
      "dojo/domReady!"
        ], 
        function(WebMap, MapView, FeatureLayer, Legend, Expand)  {
    
      // Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "3582b744bba84668b52a16b0b6942544"
            }
      }); //webnap
      
      // Mapview, referencing WebMap instance
      var myview = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      }); //mapview
  var layer = new FeatureLayer({ 
         portalItem: { // autocasts as new PortalItem()
    id: "2f46a0d5c31f4f5fb0d2d8f53eb9998a",
         
        //url:"https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer",
         popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2010_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            },
             sublayers:[
         {id: 0, title: "Year2019", visible: true, renderer: "Year2019Rebderer"}, 
         {id: 1, title: "Year2018", visible: true, renderer: "Year2018Rebderer"}, 
         {id: 2, title: "Year2017", visible: true, renderer: "Year2017Rebderer"}, 
         {id: 3, title: "Year2016", visible: true, renderer: "Year2016Rebderer"}, 
         {id: 4, title: "Year2015", visible: true}, 
         {id: 5, title: "Year2014", visible: true}, 
         {id: 6, title: "Year2013", visible: true}, 
         {id: 7, title: "Year2012", visible: true}, 
         {id: 8, title: "Year2011", visible: true},
         {id: 9, title: "Year2010", visible: true}],
         }
  }); //FeatureLayer
webmap.add(layer);
  
      
      /*
      // CensusTracts Feature Layer, 2010 (polygon)
      var year10Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/9",
            
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2010_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2010_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year10Layer);
      
      // CensusTracts Feature Layer, 2011 (polygon)
      var year11Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/8",
            
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2011_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2011_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year11Layer);
    
      // CensusTracts Feature Layer, 2012 (polygon)
      var year12Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/7",
            
            popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2012_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2012_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year12Layer);
    
      // CensusTracts Feature Layer, 2013 (polygon)
      var year13Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/6",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2013_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2013_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year13Layer);
    
      // CensusTracts Feature Layer, 2014 (polygon)
      var year14Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/5",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2014_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2014_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year14Layer);

      // CensusTracts Feature Layer, 2015 (polygon)
      var year15Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/4",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2015_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2015_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year15Layer);
    
      // CensusTracts Feature Layer, 2016 (polygon)
      var year16Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/3",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2016_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2016_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year16Layer);
    
      // CensusTracts Feature Layer, 2017 (polygon)
      var year17Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/2",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2017_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2017_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year17Layer);
    
      // CensusTracts Feature Layer, 2018 (polygon)
      var year18Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/1",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2018_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2018_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year18Layer);

      // CensusTracts Feature Layer, 2019 (polygon)
      var year19Layer = new FeatureLayer({
            url: "https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/South_Durham_Region_Housing_From_2010_to_2019/FeatureServer/0",
            
             popupTemplate: {        // Enable a popup
                  title: "{CensusBoundary2019_CTNAME}",       // Show attribute value
                  content: "The census boundary has {infilling2019_csv_SumOfUnits} housing starts."   // Display ttext in pop-up
            }
      });
      webmap.add(year19Layer); */
      //---------------Legend-------------
      
        const mylegend = new Expand({
          content: new Legend({
            view: myview,
            style: "card" // other styles include 'classic'
          }),
          view: myview,
          expanded: true
        }); //Expand
        myview.ui.add(mylegend, "bottom-right");
      
 
}); //require
