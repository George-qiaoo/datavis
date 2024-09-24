// Vega-Lite 图表配置
const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 600,
    "projection": {
        "type": "mercator"  // 地图投影方式
    },
    "layer": [
        {
            "data": {
              "url": "https://raw.githubusercontent.com/George-qiaoo/datavis/refs/heads/main/NSWMAP.json", // 替换为您的澳大利亚各州GeoJSON或TopoJSON文件路径
              "format": {"type": "topojson", "feature": "NSWMAP"}
            },
            "mark": {
              "type": "geoshape",
              "fill": "#e0e0e0", // 设置澳大利亚各州的填充颜色
              "stroke": "gray",
              "strokeWidth": 1
            },
            "encoding": {
              "tooltip": [
                {"field": "STATE_NAME", "type": "nominal", "title": "State Name"} // 根据实际字段调整
              ]
            }
          },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/George-qiaoo/datavis/refs/heads/main/existing_green.json",  // 确保路径正确
                "format": {"type": "topojson", "feature": "Existing_Green_Assets"}  // 根据实际数据调整
            },
            "mark": {
                "type": "geoshape",
                "fill": "green",
                "stroke": "black",
                "strokeWidth": 0.01
            },
            "encoding": {
               "tooltip": [
          {"field": "LAY_NAME", "type": "quantitative", "title": "Layer Name"},
          {"field": "LAY_CLASS", "type": "nominal", "title": "Layer Class"},
          {"field": "OBJECTID", "type": "nominal", "title": "Object ID"},
          {"field": "LABEL", "type": "nominal", "title": "Label"},
          {"field": "SHAPE_STAr", "type": "quantitative", "title": "Shape Area"},
          {"field": "SHAPE_STLe", "type": "quantitative", "title": "Shape Length"}
        ],
            }
    
        }
    ]
};

// 使用 Vega-Embed 嵌入可视化图表，并捕捉错误
vegaEmbed('#vis', spec).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});