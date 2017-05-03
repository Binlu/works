/*
	#author		lut000
	#date 		2017/04/21
*/
require.config({
    baseUrl:"src/js",
    urlArgs: "r="+(new Date()).getTime(),
    paths:{
        "jquery":["lib/jquery-2.1.4.min"],
        "general":["common/general-1.0"],
        "msg":["common/pop-msg-mt-1.0"],
    },
    map:{
        "*": {
            "css": "src/css"
        }
    },
    shim:{
        "general":{
            deps:["jquery","msg"],
            exports:"general"
        },
        "msg":{
            deps:["jquery"],
            exports:"msg"
        }
    }
});
require(["jquery","general"],function(jquery,general){
    $(function(){
        // 设置字体大小
        general.fn.setRootSize();
        $(window).on("resize",function(){
            general.fn.setRootSize();
        });
        
        
    	//神测
        var now_server_url=general.source.is_online_environment===true?"http://pop136.cloud.sensorsdata.cn:8006/sa?token=5bdcf36a870537c7&project=production":"http://pop136.cloud.sensorsdata.cn:8006/sa?token=5bdcf36a870537c7";
        (function(para) {
            var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
            w['sensorsDataAnalytic201505'] = n;
            w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
            var ifs = ['track','quick','register','registerPage','registerOnce','registerSession','registerSessionOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout'];
            for (var i = 0; i < ifs.length; i++) {
                w[n][ifs[i]] = w[n].call(null, ifs[i]);
            }
            if (!w[n]._t) {
                x = d.createElement(s), y = d.getElementsByTagName(s)[0];
                x.async = 1;
                x.src = p;
                y.parentNode.insertBefore(x, y);
                w[n].para = para;
            }
            })({
            sdk_url: 'http://static.sensorsdata.cn/sdk/1.6.53/sensorsdata.min.js',
            name: 'sa',
            server_url:now_server_url
        });
        sa.track("pop_m_pattern_view");
    });
});