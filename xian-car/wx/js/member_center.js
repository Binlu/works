// 滚动变量
var myScroll1,myScroll2,myScroll3,myScroll4,myScroll9,myScroll10,myScroll11,myScroll12,myScroll13,myScroll14,myScroll15,myScroll16,myScroll17,myScroll18,myScroll19;
// 自定义方法
var $m={
    // 分享链接
    share_href: window.location.href,
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
        a.refreshPage();
    },
    // 刷新scroll
    refreshPage: function(){
        var type=this.active_scroll;
        if(type==1){
            myScroll1.refresh();
        }else if(type==2){
            myScroll2.refresh();
        }else if(type==3){
            myScroll3.refresh();
        }else if(type==4){
            myScroll4.refresh();
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
        }else if(type==15){
            myScroll15.refresh();
        }else if(type==16){
            myScroll16.refresh();
        }else if(type==17){
            myScroll17.refresh();
        }else if(type==18){
            myScroll18.refresh();
        }else if(type==19){
            myScroll19.refresh();
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
    // 设置宽高
    setHeight:function(obj,k){
        var ow=obj.width();
        console.log(ow);
        var num=parseInt(ow*k);
        obj.height(num+"px");
    },
    // 直接到达
    toDirect:function(obj,func){
        obj.css({"left":0});
        if(typeof func==="function" && func instanceof Function){
            func();
        }
    },
    // 到指定页面
    toPage:function(obj,func){
        obj.animate({"left":0},200,function(){
            if(typeof func==="function" && func instanceof Function){
                func();
            }
        });
    },
    // 到指定页面
    toNext:function(obj,func){
        obj.animate({"left":0},200,function(){
            if(typeof func==="function" && func instanceof Function){
                func();
            }
        });
    },
    // 回返前页
    toPrev:function(obj,func){
        obj.animate({"left":"100%"},200,function(){
            if(typeof func==="function" && func instanceof Function){
                func();
            }
        });
    },
    // 初始化显示
    showPage:function(func){
        $("#atten_box").fadeOut(200,function(){
            if(typeof func==="function" && func instanceof Function){
                func();
            }
        });
        $("#bg_div").fadeOut(400);
    }
}
// 获取连接数据
var link_obj=GetRequest();
// 需要跳转到的页面排序
var page=link_obj["page"]?link_obj["page"]:1;
// 用户id
var user_id=link_obj["user_id"]?link_obj["user_id"]:1;

$(function(){
    // 绑定滚动
    myScroll1=new IScroll('.page1',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll2=new IScroll('.page2',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll3=new IScroll('.page3',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll4=new IScroll('.page4',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll9=new IScroll('.page9',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll10=new IScroll('.page10',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll11=new IScroll('.page11',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll12=new IScroll('.page12',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll13=new IScroll('.page13',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll14=new IScroll('.page14',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll15=new IScroll('.page15',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll16=new IScroll('.page16',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll17=new IScroll('.page17',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll18=new IScroll('.page18',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll19=new IScroll('.page19',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    
    $m.showPage(function(){
        var a=$(".page"+page);
        a.show();
        $m.toDirect(a,function(){
            $m.active_scroll=page;
            $m.rs();
            $(".page").show();
            myScroll1.refresh();
        });
    });
    
    // 绑定返回事件
    $(".js_back").on("click",function(){
        $m.toPrev($(this).parents(".page"));
    });
    // 个人信息
    $(".js_personal_info").on("click",function(){
        $m.toNext($(".page19"),function(){
            $m.active_scroll=19;
            $m.refreshPage();
        });
    });
    // 修改昵称
    $(".js_rename").on("click",function(){
        $(".js_rename_box").show();
        $(".bg_div").fadeIn(400);
    });
    // 确认修改昵称
    $(".js_rename_btn").on("click",function(){
        var txt=$(".js_rename_area").val()?$(".js_rename_area").val():"";
        if(txt==""){
            msg("昵称不能为空。",800);
        }else{
            $(".js_rename_box").fadeOut(200);
            $(".bg_div").fadeOut(400);
            $(".js_rename_txt").text(txt);
            // var arr={"user_nicename":txt,"user_id":user_id};
            // subAjax(arr,"goModifiedSelfInfo",function(){
            //     $(".js_rename_txt").text(txt);
            // });
        }
    });
    // 修改性别
    $(".js_sex").on("click",function(){
        $(".js_sex_box").show();
        $(".bg_div").fadeIn(400);
    });
    // 确认修改性别
    $(".js_sex_div>a").on("click",function(){
        $(this).addClass("now_choice_a").siblings("a").removeClass("now_choice_a");
        var num=$(this).attr("data-sex")?$(this).attr("data-sex"):0;
        $(".js_sex_box").fadeOut(200);
        $(".bg_div").fadeOut(400);
        var txt=num==2?"女":"男";
        $(".js_sex_txt").text(txt);
        // var arr={"sex":txt,"user_id":user_id};
        // subAjax(arr,"goModifiedSelfInfo",function(){
        //     $(".js_sex_txt").text(txt);
        // });
    });
    // 修改年龄
    $('.js_age').date({theme:"datetime"});
    // 确认修改年龄
    $(".js_sex_div>a").on("click",function(){
        $(this).addClass("now_choice_a").siblings("a").removeClass("now_choice_a");
        var num=$(this).attr("data-sex")?$(this).attr("data-sex"):0;
        $(".js_sex_box").fadeOut(200);
        $(".bg_div").fadeOut(400);
        var txt=num==2?"女":"男";
        $(".js_sex_txt").text(txt);
        // var arr={"sex":txt,"user_id":user_id};
        // subAjax(arr,"goModifiedSelfInfo",function(){
        //     $(".js_sex_txt").text(txt);
        // });
    });
    // 取消修改
    $(".js_cancel_btn").on("click",function(){
        $(this).parent().parent().fadeOut(200);
        $(".bg_div").fadeOut(400);
    });
    // 我的行程
    $(".js_my_trip").on("click",function(){
        $m.toNext($(".page2"),function(){
            $m.active_scroll=2;
            $m.refreshPage();
        });
    });
    // 行程详情
    $(".js_trip_list>li").on("click",function(){
        $m.toNext($(".page3"),function(){
            $m.active_scroll=3;
            $m.refreshPage();
        });
    });
    // 我的钱包
    $(".js_my_wallet").on("click",function(){
        $m.toNext($(".page4"),function(){
            $m.active_scroll=4;
            $m.refreshPage();
        });
    });
    // // 钱包余额
    // $(".js_balance").on("click",function(){
    //     $m.toNext($(".page4"),function(){
    //         $m.active_scroll=4;
    //         $m.refreshPage();
    //     });
    // });
    // 开发票
    $(".js_invoice").on("click",function(){
        $m.toNext($(".page9"),function(){
            $m.active_scroll=9;
            $m.refreshPage();
        });
    });
    // 填写信息
    $(".js_fill_info").on("click",function(){
        $m.toNext($(".page10"),function(){
            $m.active_scroll=10;
            $m.refreshPage();
        });
    });
    // 提交发票信息
    $(".js_save_info").on("click",function(){
        msg("恭喜，提交成功！","确定",function(){
            $m.toPrev($(".page10"),function(){
                $m.active_scroll=9;
            });
        },true);
    });
    // 我的积分
    $(".js_integral").on("click",function(){
        $m.toNext($(".page11"),function(){
            $m.active_scroll=11;
            $m.setHeight($(".circular_div"),1);
            $m.refreshPage();
        });
    });
    // 我的分享
    $(".js_share").on("click",function(){
        $m.toNext($(".page12"),function(){
            $m.active_scroll=12;
            $m.refreshPage();
        });
    });
    // 切换分享
    $(".js_btn_div").on("click",function(){
        var _index=$(".js_btn_div").index($(this));
        $(this).addClass("weui_bar_item_on").siblings(".js_btn_div").removeClass("weui_bar_item_on");
        $(".js_detail_div").eq(_index).show().siblings(".js_detail_div").hide();
        myScroll12.refresh();
    });
    // 关于我们
    $(".js_about").on("click",function(){
        $m.toNext($(".page13"),function(){
            $m.active_scroll=13;
            $m.refreshPage();
        });
    });
    // 意见反馈
    $(".js_feedback").on("click",function(){
        $m.toNext($(".page14"),function(){
            $m.active_scroll=14;
            $m.refreshPage();
        });
    });
    // 提交反馈
    $(".js_sub_feedback").on("click",function(){
        msg("您的反馈已经提交成功！","确定",function(){
            $m.toPrev($(".page14"),function(){
                $m.active_scroll=1;
            });
        },true);
    });
    // 退出登录
    $(".js_sign_out").on("click",function(){
        $m.toNext($(".page15"),function(){
            $m.active_scroll=15;
            $m.refreshPage();
        });
    });
    // 登录
    $(".js_sign_btn").on("click",function(){
        msg("登录成功！","确定",function(){
            $m.toPrev($(".page15"),function(){
                $m.active_scroll=1;
            });
        },true);
    });
    // 注册
    $(".js_to_register").on("click",function(){
        $m.toNext($(".page16"),function(){
            $m.active_scroll=16;
            $m.refreshPage();
        });
    });
    // 提交注册
    $(".js_register_btn").on("click",function(){
        msg("注册成功，立即登录。","确定",function(){
            $m.toPrev($(".page16"),function(){
                $m.active_scroll=15;
            });
        },true);
    });
    // 找回密码
    $(".js_get_ps").on("click",function(){
        $m.toNext($(".page17"),function(){
            $m.active_scroll=17;
            $m.refreshPage();
        });
    });
    // 提交找密码
    $(".js_get_ps_btn").on("click",function(){
        msg("密码已经发送到您的手机，请注意查收。","确定",function(){
            $m.toPrev($(".page17"),function(){
                $m.active_scroll=15;
            });
        },true);
    });
    $(window).on("resize",function(){$m.rs()});
});
// 获取页面url数据
function GetRequest(){ 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
        }
    } 
    return theRequest; 
};
// 请求数据
function subAjax(arr,url,func){
    var return_arr=null;
    $.ajax({
        type: "POST",
        url: url,
        data:arr,
        dataType: "json",
        success: function(data){
            if(data["status"]==0){
                msg(data["data"],800);
            }else if(data["status"]==1){
                msg(data["data"],800);
                if(typeof func==="function" && func instanceof Function){
                    func();
                }
            }
        },
        error: function(XMLHttpRequest,textStatus,errorThrown){
            msg("请求失败，请稍后重试！","确定");
        }
    });
}