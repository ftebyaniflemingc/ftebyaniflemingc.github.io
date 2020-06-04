require([
        "require",
        
        "esri/core/promiseUtils",
        "esri/widgets/Legend",
        "esri/widgets/Home",
        "esri/widgets/Fullscreen",
        "esri/widgets/Slider",
        "esri/widgets/Expand"
      ], function(require, promiseUtils, Legend, Home, Fullscreen, Slider,Expand
      ) {

view.ui.empty("top-left");

        var applicationDiv = document.getElementById("applicationDiv");
        var sliderValue = document.getElementById("sliderValue");
        var playButton = document.getElementById("playButton");
        var titleDiv = document.getElementById("titleDiv");
        var animation = null;

        var slider = new Slider({
          container: "slider",
          min: 0,
          max: 100,
          values: [50],
          step: 0.25,
          visibleElements: {
            rangeLabels: true
          },
          labelFormatFunction: function(value, type) {
            if (type === "min") {
              return "Contested";
            }
            if (type === "max") {
              return "Landslide";
            }
            return value;
          }
        });

        function inputHandler(event) {
          stopAnimation();
          setGapValue(parseInt(event.value));
        }
        slider.on("thumb-drag", inputHandler);

        playButton.addEventListener("click", function() {
          if (playButton.classList.contains("toggled")) {
            stopAnimation();
          } else {
            startAnimation();
          }
        });

        view.ui.add(titleDiv, "top-left");
        view.ui.add(
          new Expand({
            view: view,
            content: new Legend({
              view: view
            })
          }),
          "top-left"
        );
        view.ui.add(
          new Home({
            view: view
          }),
          "top-left"
        );
        view.ui.add(
          new Fullscreen({
            view: view,
            element: applicationDiv
          }),
          "top-right"
        );

        // When the layerview is available, setup hovering interactivity
        view.whenLayerView(layer).then(setupHoverTooltip);

        // Starts the application by visualizing a gap of 50% between the two candidates
        setGapValue(50);
