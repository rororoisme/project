
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    am4core.options.autoSetClassName = true;
    
    // Create chart instance
    var chart = am4core.create("owner", am4charts.XYChart);
    
    chart.colors.step = 2;
    chart.maskBullets = false;
    
    // Add data
    chart.data = [
    //   {
    //     "date": "2022-12-02",
    //     "distance": 102504,
    //     "townName": "%",
    //     "townName2": "去除特殊符號",
    //     "townSize": 5,
    //     "latitude": 0,
    //     "duration": 493
    // },
    {
        "date": "2022-12-07",
        "distance": 102504,
        "townName": "%",
        // "townName2": "生成raw data",
        "townSize": 5,
        // "latitude": 0,
        "duration": 493
    }, {
        "date": "2022-12-08",
        "distance": 93268,
        "townName": "%",
        // "townName2":"清除空值/無效欄位",
        "townSize": 5,
        // "latitude": 0,
        "duration": 475
    }, {
        "date": "2022-12-09",
        "distance": 93268,
        "townName": "%",
        // "townName2":"標準化/平均化",
        "townSize": 5,
        // "latitude": 0,
        "duration": 465
    }, {
        "date": "2022-12-11",
        "distance": 93268,
        "townName": "%",
        // "townName2":"遊戲類別清洗",
        "townSize": 5,
        "latitude": 0,
        "duration": 34
    }, {
        "date": "2022-12-12",
        "distance": 93268,
        "townName": "%",
        // "townName2":"DNN",
        "townSize": 5,
        "latitude": 20,
        "duration": 34
    }, {
        "date": "2022-12-14",
        "distance": 93268,
        "townName": "%",
        // "townName2":"決策樹",
        "townSize": 5,
        "latitude": 50,
        "duration": 34
    }, {
        "date": "2022-12-19",
        "distance": 93268,
        "townName": "%",
        // "townName2": "集群",
        "townSize": 5,
        "latitude": 50,
        "duration": 35
    }, {
        "date": "2022-12-21",
        "distance": 93268,
        "townName": "%",
        // "townName2":"關聯與刪除集群",
        "townSize": 5,
        "latitude": 62,
        "duration": 26
    }, {
        "date": "2022-12-22",
        "distance": 59027,
        "townName": "%",
        // "townName2":"特徵選擇法",
        "townSize": 5,
        "latitude": 71,
        "duration": 26
    }, {
        "date": "2022-12-23",
        "distance": 59027,
        "townName": "%",
        // "townName2": "關聯",
        "townSize": 5,
        "latitude": 81,
        "duration": 12
    }
    // , {
    //     "date": "2012-01-09",
    //     "distance": 218,
    //     "townName": "Dalas",
    //     "townSize": 8,
    //     "latitude": 32.8,
    //     "duration": 287
    // }, {
    //     "date": "2012-01-10",
    //     "distance": 349,
    //     "townName": "Oklahoma City",
    //     "townSize": 5,
    //     "latitude": 35.49,
    //     "duration": 485
    // }, {
    //     "date": "2012-01-11",
    //     "distance": 603,
    //     "townName": "Kansas City",
    //     "townSize": 5,
    //     "latitude": 39.1,
    //     "duration": 890
    // }, {
    //     "date": "2012-01-12",
    //     "distance": 534,
    //     "townName": "Denver",
    //     "townName2": "Denver",
    //     "townSize": 9,
    //     "latitude": 39.74,
    //     "duration": 810
    // }, {
    //     "date": "2012-01-13",
    //     "townName": "Salt Lake City",
    //     "townSize": 6,
    //     "distance": 425,
    //     "duration": 670,
    //     "latitude": 40.75,
    //     "dashLength": 8,
    //     "alpha": 0.4
    // }, {
    //     "date": "2012-01-14",
    //     "latitude": 36.1,
    //     "duration": 470,
    //     "townName": "Las Vegas",
    //     "townName2": "Las Vegas"
    // }, {
    //     "date": "2012-01-15"
    // }, {
    //     "date": "2012-01-16"
    // }, {
    //     "date": "2012-01-17"
    // }
    ];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "category";
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;
    dateAxis.skipEmptyPeriods = false;            // am4charts.DateAxis()  的無間隙日期軸!!!!
    
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
    
    var latitudeSeries = chart.series.push(new am4charts.LineSeries());
    latitudeSeries.id = "g2";
    latitudeSeries.dataFields.valueY = "latitude";
    latitudeSeries.dataFields.dateX = "date";
    latitudeSeries.yAxis = latitudeAxis;
    latitudeSeries.name = "AI";
    latitudeSeries.strokeWidth = 2;
    latitudeSeries.tooltipText = "AI: {valueY}{townName}";
    
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


