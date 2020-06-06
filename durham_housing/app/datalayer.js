require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "dojo/dom",
      "dojo/domReady!"
    
    ], function(WebMap, MapView, FeatureLayer)  {
    
      // Creates a WebMap instance
      var webmap = new WebMap({
            portalItem: { //autocasts as new PortalItem()
                  id: "3582b744bba84668b52a16b0b6942544"
            }
      });
      
      // Mapview, referencing WebMap instance
      var view = new MapView({
            map: webmap,    // The WebMap instance created above
            container: "mapid",
            center: [-78.871866,43.914656],
            zoom: 10
      });
  
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
      webmap.add(year19Layer); 
 
});
