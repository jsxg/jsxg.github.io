var exp,dependencies,exportsName,old,main;exp={},dependencies=["zepto","common","echarts"],exporsName="",old=window[exporsName],main=function(e,o,a){var r=a.init(document.querySelector(".chart-frame")),n={tooltip:{trigger:"axis",position:function(e){return[e[0],"10%"]}},title:{text:"示例"},backgroundColor:"#EC886D",legend:{data:["bar1","bar2","bar3"]},xAxis:{type:"category",axisLine:{lineStyle:{color:"#666"}},boundaryGap:!1,data:["7/21","7/22","7/23","7/24","7/25","7/26","7/27"]},yAxis:{type:"value",axisLine:{lineStyle:{color:"#666"}},boundaryGap:!1,splitLine:{show:!1}},series:[{name:"bar1",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{normal:{color:"rgb(255, 70, 131)"}},lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 158, 68)"},{offset:1,color:"rgb(255, 70, 131)"}])}},data:[35,50,66,50,48,52,50]},{name:"bar2",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{normal:{color:"rgb(255, 70, 131)"}},lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 158, 68)"},{offset:1,color:"rgb(255, 70, 131)"}])}},data:[15,30,46,30,28,32,30]},{name:"bar3",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{normal:{color:"rgb(9,109,203)"}},lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(9,109,203)"},{offset:1,color:"rgb(83,202,244)"}])}},data:[2,15,26,7,6,12,14]}]};return r.setOption(n),exp},"function"==typeof define&&define.amd?define(dependencies,main):old=main();