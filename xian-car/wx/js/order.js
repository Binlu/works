// 滚动变量
var myScroll1,myScroll2,myScroll3,myScroll4,myScroll5,myScroll6,myScroll7,myScroll8,myScroll9,myScroll10,myScroll11,myScroll12,myScroll13,myScroll14,myScroll15,myScroll16,myScroll17,myScroll18,myScroll19;
// 自定义方法
var $m={
    // 分享链接
    share_href: window.location.href,
    // 搜索数据
    s_arr1:[],
    s_arr2:[],
    // 图片地址前缀
    img_url:"images/",
    // 当前页面
    active_scroll:1,
    // 重新布局
    rs: function(){
        var a=this;
        var limit=720;
        var dw=document.documentElement.clientWidth;
        var dh=document.documentElement.clientHeight;
        var fw=dw>limit?limit:dw;
        $("body").css({"font-size":1*fw/360+"em"});
        if(dw>limit){
            $(".center_box").css({"left":(dw-limit)/2+"px"});
        };
        
        
        a.refreshPage(a.active_scroll);
    },
    // 刷新scroll
    refreshPage: function(type){
        if(type==1){
            myScroll1.refresh();
        }else if(type==2){
            myScroll2.refresh();
        }else if(type==3){
            myScroll3.refresh();
        }else if(type==4){
            myScroll4.refresh();
        }else if(type==5){
            myScroll5.refresh();
        }else if(type==6){
            myScroll6.refresh();
        }else if(type==7){
            myScroll7.refresh();
        }else if(type==8){
            myScroll8.refresh();
        }else if(type==9){
            myScroll9.refresh();
        }else if(type==10){
            myScroll10.refresh();
        }else if(type==11){
            myScroll11.refresh();
        }else if(type==12){
            myScroll12.refresh();
        }else if(type==13){
            myScroll13.refresh();
        }else if(type==14){
            myScroll14.refresh();
        }
    },
    // ajax 请求地址
    ajax_link: ["deal_info","is_set_info"],
    // 居中显示
    toCenter:function(obj,par){
        var dh=par.height();
        var oh=obj.outerHeight();
        obj.css({"margin-top": (dh-oh)/2-50+"px"});
    },
    // 图片加载
    img_arr:[
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/icon1.png",
        "images/icon2.png",
        "images/prod.png",
        "images/prod1.jpg",
        "images/txt_pic1.png",
        "images/txt_pic2.png",
        "images/txt_pic3.png",
        "images/txt_pic4.png",
        "images/txt_pic5.png",
        "images/txt_pic6.png",
        "images/txt_pic7.png",
        "images/txt_pic8.png",
    ],
    // 设置宽高
    setHeight:function(obj,k){
        var ow=obj.width();
        console.log(ow);
        var num=parseInt(ow*k);
        obj.height(num+"px");
    }
}
$(function(){
    $m.rs();
	// 绑定滚动
    myScroll1=new IScroll('.page1',{mouseWheel: true,hideScrollbar: true,click: true,bounce:false});
    myScroll2=new IScroll('.page2',{mouseWheel: true,hideScrollbar: true,click: true});
    myScroll3=new IScroll('.page3',{mouseWheel: true,hideScrollbar: true,click: true});
    

    
    
	$(window).on("resize",function(){$m.rs()});
});
// 阻止事件冒泡
function stopBubble(e){
	if(e && e.stopPropagation){
		e.stopPropagation();
	}
	else{
		window.event.cancelBubble=true;
	}
	return false;
}