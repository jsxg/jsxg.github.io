requirejs.config({baseUrl:"js",paths:{zepto:"zepto.min",flexible:"flexible",echarts:"echarts.min",common:"common",echartsDemo:"echartsDemo"},shim:{flexible:{exports:"_"},zepto:{exports:"$",deps:["flexible"]},echartsDemo:{exports:"_",deps:["echarts"]}}}),requirejs(["http://127.0.0.1:35729/livereload.js"]);