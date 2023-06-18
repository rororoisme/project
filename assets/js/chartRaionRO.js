


am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartRaionRO");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panY",
  wheelY: "zoomY",
  layout: root.verticalLayout
}));

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarY", am5.Scrollbar.new(root, {
  orientation: "vertical"
}));

var data = [{
  "Owners": "<20K",
  "Rating1_Bad": 5343,
  "Rating2_fair": 11714,
  "Rating3_Good": 16189,
  "Rating4_Great": 10057,

  
}, {
  "Owners": "20K-100K",
  "Rating1_Bad": 921,
  "Rating2_fair":1515,
  "Rating3_Good":3242,
  "Rating4_Great":4178,
  
  
}, {
  "Owners": ">100K",
  "Rating1_Bad": 314,
  "Rating2_fair": 486,
  "Rating3_Good": 1245,
  "Rating4_Great": 3823,
 
 
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "Owners",
  renderer: am5xy.AxisRendererY.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));

yAxis.data.setAll(data);

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  renderer: am5xy.AxisRendererX.new(root, {})
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    baseAxis: yAxis,
    valueXField: fieldName,
    categoryYField: "Owners"
  }));

  series.columns.template.setAll({
    tooltipText: "{name}, {categoryY}: {valueX}",
    tooltipY: am5.percent(90)
  });
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        text: "{valueX}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: am5.p50,
        centerX: am5.p50,
        populateText: true
      })
    });
  });

  legend.data.push(series);
}

makeSeries("Rating1_Bad", "Rating1_Bad");
makeSeries("Rating2_fair", "Rating2_fair");
makeSeries("Rating3_Good", "Rating3_Good");
makeSeries("Rating4_Great", "Rating4_Great");



// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()
