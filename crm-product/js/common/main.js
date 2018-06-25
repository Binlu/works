/*
	#author		lut000
	#date 		2018/01/06
    #porpuse    共用入口
*/
require.config({
    baseUrl:"js",
    urlArgs:"r="+(new Date()).getTime(),
    // urlArgs:"t="+static_change_time,
    paths:{
        "jquery":["lib/jquery/jquery-1.11.3.min"],
        "jquery.metisMenu":["lib/jquery/jquery.metisMenu"],
        "nicescroll":["lib/jquery/jquery.nicescroll"],
        "common":["common/common"],
        "bootstrap":["lib/bootstrap/bootstrap.min"],

        "vue":["lib/vue/vue.min"],
        "general":["common/general-1.0"],
        "msg":["common/pop-msg-1.0"],
    },
    map:{
        '*':{
            "css":"lib/require/css-min"
        }
    },
    waitSeconds:0,
    shim:{
        "general":{
            deps:["jquery"],
            exports:"general"
        },
        "msg":{
            deps:["jquery"],
            exports:"msg"
        },

        "bootstrap":{
            deps:["jquery"]
        },
        "jquery.metisMenu":{
            deps:["jquery"]
        },
        "nicescroll":{
            deps:["jquery"],
        },
        "common":{
            deps:["jquery",'jquery.metisMenu','nicescroll']
        }
    }
});






require(["jquery","general","bootstrap",'common'],function(jquery,general){
    $(function(){
        console.log("一切正常！");
    });
});