require([
        "esri/widgets/Legend",
        "esri/widgets/Home",
        "esri/widgets/Fullscreen",
        "esri/widgets/Slider",
        "esri/widgets/Expand"
      ], function(Legend, Home, Fullscreen, Slider,Expand
      ) {

view.ui.empty("top-left");

        var applicationDiv = document.getElementById("applicationDiv");
        var tmValue = document.getElementById("tmValue");
        var playPause = document.getElementById("playPause");
        var title = document.getElementById("title");
        var animation = null;

        var timeLine = new Slider({
          container: "Time Line",
          min: 0,
          max: 100,
          values: [50],
          step: 0.25,
          visibleElements: {
            rangeLabels: true
          },
          labelFormatFunction: function(value, year) {
            if (year === "min") {
              return "2010";
            }
            if (year === "max") {
              return "2019";
            }
            return value;
          }
        });

        function inputHandler(date) {
          stopAnimation();
          setGapValue(parseInt(date.value));
        }
        slider.on("thumb-drag", inputHandler);

        playPause.addEventListener("click", function() {
          if (playPause.classList.contains("toggled")) {
            stopAnimation();
          } else {
            startAnimation();
          }
        });

        view.ui.add(title, "top-left");
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
