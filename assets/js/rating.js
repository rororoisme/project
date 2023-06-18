
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    am4core.options.autoSetClassName = true;
    
    // Create chart instance
    var chart = am4core.create("rating", am4charts.XYChart);
    
    chart.colors.step = 2;
    chart.maskBullets = false;
    
    // Add data
    chart.data = [{
        "date": "2022-12-02",
        "distance": 102504,
        "townName": "%",
        "townName3": "去除特殊符號生成raw data",
        "townSize": 5,
        "duration": 493
    },{
        "date": "2022-12-07",
        "distance": 102504,
        "townName": "%",
        "townSize": 5,
    }, {
        "date": "2022-12-08",
        "distance": 93268,
        "townName": "%",
        "townName3":"清除空值/標準化",
        "townSize": 5,
        "duration": 475
    }, {
        "date": "2022-12-09",
        "distance": 93268,
        "townName": "%",
        "townName2":"初次訓練(DNN):30%",
        "townName3":"(465欄)移除雜訊多的欄位",
        "townSize": 15,
        "latitude": 30,
        "duration": 465
    }, {
        "date": "2022-12-11",
        "distance": 59027,
        "townName": "%",
        "townName2":"決策樹",
        "townName3":"(26欄)整理雜訊多的欄位重新加回",
        "townSize": 5,
        "latitude": 52,
        "duration": 26
    }, {
        "date": "2022-12-12",
        "distance": 59027,
        "townName": "%",
        "townName2":"軟投票及堆疊法",
        "townName3":"(90欄)",
        "townSize": 5,
        "latitude": 56,
        "duration": 90
    }, {
        "date": "2022-12-14",
        "distance": 59027,
        "townName": "%",
        "townName2": "平衡預測欄位",
        "townSize": 5,
        "latitude": 59
        
    }, {
        "date": "2022-12-19",
        "distance": 59027,
        "townName": "%",
        "townName3":"藉由關鍵因子刪減欄位",
        "townName2": "最高準確率:81%",
        "townSize": 15,
        "latitude": 80,
        "duration": 90
    }, {
        "date": "2022-12-21",
        "distance": 59027,
        "townName": "%",
        "townName2":"特徵選取",
        "townName3":"(17欄)",
        "townSize": 5,
        "latitude": 76,
        "duration": 17,
    }, {
        "date": "2022-12-22",
        "distance": 59027,
        "townName": "%",
        "townName2":"擇優及調校",
        "townName3":"關聯增欄",
        "townSize": 5,
        "latitude": 77,
        "duration": 20
    }, {
        "date": "2022-12-23",
        "distance": 59027,
        "townName": "%",
        "townName2": "最終準確率79%",
        "townName3":"最終20欄",
        "townSize": 15,
        "latitude": 79,
        "duration": 20
    }
    
    ];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "category";
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;
    dateAxis.skipEmptyPeriods = true;            // am4charts.DateAxis()  的無間隙日期軸!!!!
    
    var distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = "總筆數";
    distanceAxis.renderer.grid.template.disabled = true;
    
    var durationAxis = chart.yAxes.push(new am4charts.ValueAxis());
    durationAxis.title.text = "欄位數";
    // durationAxis.baseUnit = "minute";
    durationAxis.renderer.grid.template.disabled = true;
    durationAxis.renderer.opposite = true;
    
    // durationAxis.durationFormatter.durationFormat = "hh'h' mm'min'";
    
    var latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    latitudeAxis.renderer.labels.template.disabled = true;
    
    // Create series
    var distanceSeries = chart.series.push(new am4charts.ColumnSeries());
    distanceSeries.id = "g1";
    distanceSeries.dataFields.valueY = "distance";
    distanceSeries.dataFields.dateX = "date";
    distanceSeries.yAxis = distanceAxis;
    distanceSeries.tooltipText = "{valueY} 筆";
    distanceSeries.name = "總筆數";
    distanceSeries.columns.template.fillOpacity = 0.5;
    
    var disatnceState = distanceSeries.columns.template.states.create("hover");
    disatnceState.properties.fillOpacity = 0.5;
    
    var durationSeries = chart.series.push(new am4charts.LineSeries());
    durationSeries.id = "g3";
    durationSeries.dataFields.valueY = "duration";
    durationSeries.dataFields.dateX = "date";
    durationSeries.yAxis = durationAxis;
    durationSeries.name = "欄位數";
    durationSeries.strokeWidth = 2;
    durationSeries.tooltipText = "{valueY} 欄";
    
    var durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
    var durationRectangle = durationBullet.createChild(am4core.Rectangle);
    durationBullet.horizontalCenter = "middle";
    durationBullet.verticalCenter = "middle";
    durationBullet.width = 7;
    durationBullet.height = 7;
    durationRectangle.width = 7;
    durationRectangle.height = 7;
    
    var durationState = durationBullet.states.create("hover");
    durationState.properties.scale = 1.2;
    
    var durationLabel = durationSeries.bullets.push(new am4charts.LabelBullet());
    durationLabel.label.text = "{townName3}";
    durationLabel.label.horizontalCenter = "left";
    durationLabel.label.dx = 5;
    durationLabel.label.dy = 14;
    
    var latitudeSeries = chart.series.push(new am4charts.LineSeries());
    latitudeSeries.id = "g2";
    latitudeSeries.dataFields.valueY = "latitude";
    latitudeSeries.dataFields.dateX = "date";
    latitudeSeries.yAxis = latitudeAxis;
    latitudeSeries.name = "rating準確率變化";
    latitudeSeries.strokeWidth = 2;
    latitudeSeries.tooltipText = "rating準確率: {valueY}{townName}";
    
    var latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
    latitudeBullet.circle.fill = am4core.color("#fff");
    latitudeBullet.circle.strokeWidth = 2;
    latitudeBullet.circle.propertyFields.radius = "townSize";
    
    var latitudeState = latitudeBullet.states.create("hover");
    latitudeState.properties.scale = 1.2;
    
    var latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
    latitudeLabel.label.text = "{townName2}";
    latitudeLabel.label.horizontalCenter = "left";
    latitudeLabel.label.dx = 14;
    
    // Add legend
    chart.legend = new am4charts.Legend();
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;
    
    }); // end am4core.ready()
