
am5.ready(function() {
  
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdivword");
    
    
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
    
    
  // Add series
  // https://www.amcharts.com/docs/v5/charts/word-cloud/
  var series = root.container.children.push(am5wc.WordCloud.new(root, {
    categoryField: "tag",
    valueField: "weight",
    maxFontSize: am5.percent(15)
  }));
    
  // Configure labels
  series.labels.template.setAll({
    fontFamily: "Courier New"
  });
    
    
  setInterval(function() {  
    am5.array.each(series.dataItems, function(dataItem) {
      var value = Math.random() * 65;
      value = value - Math.random() * value;
      dataItem.set("value", value);
      dataItem.set("valueWorking", value);
    })
  }, 5000)
    
    
  // Data from:
  // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-progra
  series.data.setAll([
    { tag: "Advneture", weight: 64.96 },
    { tag: "Action", weight: 56.07 },
    { tag: "Indie", weight: 48.24 },
    { tag: "Casual", weight: 47.08 },
    { tag: "Graphics", weight: 35.35 },
    { tag: "Node.js", weight: 33.91 },
    { tag: "Pixel", weight: 30.19 },
    { tag: "Early Access", weight: 27.86 },
    { tag: "Story", weight: 27.13 },
    { tag: "Rich", weight: 24.31 },
    { tag: "Turn", weight: 21.98 },
    { tag: "Based", weight: 21.01 },
    { tag: "Great Soundtrack", weight: 10.75 },
    { tag: "First Person", weight: 9.55 },
    { tag: "Famiy", weight: 8.32 },
    { tag: "Third Person", weight: 7.03 },
    { tag: "Turn Based", weight: 6.75 },
    { tag: "Open World", weight: 6.02 },
    { tag: "Pixel", weight: 5.61 },
    { tag: "Side Scroller", weight: 5.1 },
    { tag: "RPG", weight: 5.07 },
    { tag: "Fridenly", weight: 4.66 },
    { tag: "Old school", weight: 4.66 },
    { tag: "First person", weight: 3.01 },
    { tag: "Point click", weight: 2.8 },
    { tag: "Stimulation", weight: 2.6 },
    { tag: "Visual Novel", weight: 2.46 },
    { tag: "Sexual Content", weight: 2.12 },
    { tag: "Singleplayer", weight: 2.1 },
    { tag: "Female Protagonist", weight: 1.88 },
    { tag: "Puxxle platerformer", weight: 1.74 },
    { tag: "Multiple Endings", weight: 1.33 },
    { tag: "2D platformer", weight: 1.29 },
    { tag: "Hidden Object", weight: 0.97 },
    { tag: "Top", weight: 0.79 },
    { tag: "Local Multiplayers", weight: 0.65 },
    
    
  ]);
    
  }); // end am5.ready()  
    
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
