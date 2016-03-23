// 滚动变量
var myScroll1,myScroll2,myScroll3,myScroll4,myScroll5,myScroll6,myScroll7,myScroll8,myScroll9,myScroll10,myScroll11,myScroll12,myScroll13,myScroll14,myScroll15,myScroll16,myScroll17,myScroll18,myScroll19,myScroll20;
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
        }else if(type==20){
            myScroll20.refresh();
        }else if(type==21){
            myScroll21.refresh();
        }else if(type==22){
            myScroll22.refresh();
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
    },
    setPassword:{                   //修改密码的json
        "name":"姓名",
        "phone":"手机号",
        "code":"验证码",
        "password":"新密码",
        "autocode":1515
    }
}
// 获取连接数据
var link_obj=GetRequest();
// 用户id
var user_id=link_obj["user_id"]?link_obj["user_id"]:1;

$(function(){
    // 绑定滚动
    myScroll1=new IScroll('.page1',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll2=new IScroll('.page2',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll3=new IScroll('.page3',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll4=new IScroll('.page4',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll5=new IScroll('.page5',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll6=new IScroll('.page6',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll7=new IScroll('.page7',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll8=new IScroll('.page8',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
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
    myScroll20=new IScroll('.page20',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll21=new IScroll('.page21',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    myScroll22=new IScroll('.page22',{mouseWheel: true,hideScrollbar: true,click:true,bounce:false});
    // 显示
    $m.showPage(function(){
        $m.rs();
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
        $(".js_rename_box").show().siblings(".bg_div").fadeIn(400);;
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
        $(".js_sex_box").show().siblings(".bg_div").fadeIn(400);;
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
    // 填写取消订单框
    $(".js_del_order").on("click",function(){
        $(".js_del_order_box").show().siblings(".bg_div").fadeIn(400);;
    });
    
    // 确认取消订单
    $(".js_order_btn").on("click",function(){
        var txt=$(".js_order_area").val()?$(".js_order_area").val():"";
        if(txt==""){
            msg("内容不能为空。",800);
        }else{
            $(".js_cancel_div").show().siblings(".js_order_detail_box").hide();
            $(".js_del_order").hide();
            $(".p3_btn_div").hide();
            $(".js_cancel_div").children("span").text(txt);
            $(".js_del_order_box").fadeOut(200);
            $(".bg_div").fadeOut(400,function(){
                myScroll3.refresh();
            });
            // var arr={"user_nicename":txt,"user_id":user_id};
            // subAjax(arr,"goModifiedSelfInfo",function(){
            //     $(".js_rename_txt").text(txt);
            // });
        }
    });
    // 评星星数量
    $(".page").on("click",".js_star_list>li",function(){
        var a=$(this),b=a.children("img"),c=a.parent();
        var leven=a.attr("data-star")?a.attr("data-star"):"3";
        c.children("li").each(function(i){
            if(i<leven){
                $(this).children("img").attr("src",$m.img_url+"icon17.png");
            }else{
                $(this).children("img").attr("src",$m.img_url+"icon16.png");
            }
        });
    });
    // 提交评价
    $(".js_sub_evaluate").on("click",function(){
        msg("评论成功",800);
        $(this).hide();
        $(".js_can_star").removeClass("js_star_list");
        myScroll3.refresh();
        // var arr={"user_nicename":txt,"user_id":user_id};
        // subAjax(arr,"goModifiedSelfInfo",function(){
        //     $(".js_rename_txt").text(txt);
        // });
    });
    // 去支付剩余
    $(".js_to_pay").on("click",function(){
        $m.toNext($(".page20"),function(){
            $m.active_scroll=20;
            $m.refreshPage();
        });
    });
    // 去选择优惠券
    $(".js_to_get_coupon").on("click",function(){
        $(".page6").css({"z-index":50});
        $(".p6_btn_div").show();
        $(".coupon_list").addClass("js_coupon_list");
        $(".coupon_list>li").removeClass("now_choice_li");
        $m.toNext($(".page6"),function(){
            $m.active_scroll=6;
            $m.refreshPage();
        });
    });
    // 选择优惠券
    $(".page6").on("click",".js_coupon_list>li",function(){
        if(!$(this).hasClass("now_choice_li")){
            $(this).addClass("now_choice_li");
        }else{
            $(this).removeClass("now_choice_li");
        }
    });
    // 确认选择优惠券
    $(".js_choice_btn").on("click",function(){
        $m.toPrev($(".page6"),function(){
            $m.active_scroll=20;
            $m.refreshPage();
            $(".page6").css({"z-index":10});
        });
    });
    // 添加优惠券
    $(".js_add_coupon_btn").on("click",function(){
        var arr=[];
        $(".page7 .js_input_area").each(function(){
            var txt=$(this).val()?$(this).val():"";
            arr.push(txt);
        });
        if(arr[0]==""){
            msg("请输入编号",800);
        }else if(arr[1]==""){
            msg("请输入密码",800);
        }else{
            $m.toPrev($(".page7"),function(){
                $m.active_scroll=6;
                $m.refreshPage();
            });
            // var arr={"user_nicename":txt,"user_id":user_id};
            // subAjax(arr,"goModifiedSelfInfo",function(){
            //     $(".js_rename_txt").text(txt);
            // });
        }
    });
    
    // 选择支付方式
    $(".js_pay_list>li").on("click",function(){
        var a=$(this).children("a").children("span");
        a.addClass("now_choice_spn");
        $(this).siblings("li").children("a").children("span").removeClass("now_choice_spn");
    });
    // 确认支付按钮
    $(".js_pay_sure_btn").on("click",function(){
        var type=$(".js_pay_list>li").find("now_choice_spn").attr("data-type")?$(".js_pay_list>li").find("now_choice_spn").attr("data-type"):2;
        if(type==2){
            // 余额支付
            $m.toNext($(".page21"),function(){
                $m.active_scroll=21;
                $m.refreshPage();
            });
        }else{
            // 微信支付

        }
    });
    // 密码输入控制
    $(".js_pass_area").on("keyup",function(){
        var txt=$(this).val();
        if(txt.length>=6){
            $(this).blur();
        }
    });
    // 找回密码
    $(".js_get_pass").on("click",function(){
        $m.toNext($(".page22"),function(){
            $m.active_scroll=22;
            $m.refreshPage();
        });
    });
    // 获取验证码
    $(".js_get_code").on("click",function(){
        checkpost($(this),"page22 .js_mobile");
    });
    // 确认修改密码
    $(".js_sure_resetpass").on("click",function(){
        toSubPass($(this));
    });
    // 手机限制输入字母和汉字
    $(".js_mobile").bind("input propertychange",function(){
        var txt=$(this).val();
        var regx=/\D/g;
        $(this).val(txt.replace(regx,''));
    });
    // 余额支付
    $(".js_pay_balance_now").on("click",function(){
        var pass=$(".js_pass_area").val()?$(".js_pass_area").val():"";
        if(pass==""){
            msg("请输入支付密码",800);
        }else{
            msg("支持成功",800);
            $(".js_can_star").addClass("js_star_list");
            $(".p3_btn_div").children(".js_to_pay").hide();
            $(".page20").css({"left":"100%"});
            $m.toPrev($(".page21"),function(){
                $m.active_scroll=20;
                $m.refreshPage();
            });
            // 开始提交
            // var arr={"user_nicename":txt,"user_id":user_id};
            // subAjax(arr,"goModifiedSelfInfo",function(){
            //     $(".js_rename_txt").text(txt);
            // });
        }
    });
    // 线下支付
    $(".js_offline_btn").on("click",function(){
        $(".js_del_order").hide();
        $(".js_can_star").addClass("js_star_list");
        $(".p3_btn_div").children(".js_to_pay").hide();
        $m.toPrev($(".page20"),function(){
            $m.active_scroll=3;
            $m.refreshPage();
        });
        // 开始提交
        // var arr={"user_nicename":txt,"user_id":user_id};
        // subAjax(arr,"goModifiedSelfInfo",function(){
        //     $(".js_rename_txt").text(txt);
        // });
    });
    // 我的钱包
    $(".js_my_wallet").on("click",function(){
        $m.toNext($(".page4"),function(){
            $m.active_scroll=4;
            $m.refreshPage();
        });
    });
    // 钱包余额
    $(".js_balance").on("click",function(){
        $m.setHeight($(".circular_div").eq(0),1);
        $m.toNext($(".page5"),function(){
            $m.active_scroll=5;
            $m.refreshPage();
        });
    });
    // 优惠券
    $(".js_coupon").on("click",function(){
        $m.toNext($(".page6"),function(){
            $m.active_scroll=6;
            $m.refreshPage();
        });
    });
    // 使用详情
    $(".js_rule").on("click",function(){
        $(".page8").css({"z-index":50});
        $m.toNext($(".page8"),function(){
            m.active_scroll=8;
            $m.refreshPage();
        });
    });
    // 添加优惠券
    $(".js_add_coupon").on("click",function(){
        $(".page7").css({"z-index":50});
        $m.toNext($(".page7"),function(){
            m.active_scroll=7;
            $m.refreshPage();
        });
    });
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
        $m.setHeight($(".circular_div").eq(1),1);
        $m.toNext($(".page11"),function(){
            $m.active_scroll=11;
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
// 提交修改密码
function toSubPass(obj){    
    var _this=obj;
    var input_txt=[];
    var regx=/1[1-9]+[0-9]{9}/;
    var re_m = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    $(".page22 .js_input_area").each(function(){
        input_txt.push($(this).val());
        return input_txt;
    });
    if(input_txt[0]=="" || input_txt[0]==null || input_txt[0]=="undefined"){
        msg("请填写姓名",800);
    }else if(input_txt[1]=="" || input_txt[1]==null || input_txt[1]=="undefined"){
        msg("请填写手机号",800);
    }else if(input_txt[1].length<11 || !regx.test(input_txt[1])){
        msg("请填写正确手机号",800);
    }else if(input_txt[2]=="" || input_txt[2]==null || input_txt[2]=="undefined"){
        msg("请输入验证码",800);
    }else if(input_txt[2]!=$m.setPassword["autocode"]){
        msg("验证码错误",800);
    }else if(input_txt[3]=="" || input_txt[3]==null || input_txt[3]=="undefined"){
        msg("请设置新密码",800);
    }else if(input_txt[4]=="" || input_txt[4]==null || input_txt[4]=="undefined"){
        msg("请再次确认密码",800);
    }else if(input_txt[3]!=input_txt[4]){
        msg("前后设置的密码不一致",800);
    }else{
        _this.off("click");
        _this.text("提交中...");
        // 赋值
        $m.setPassword["name"]=input_txt[0];
        $m.setPassword["phone"]=input_txt[1];
        $m.setPassword["code"]=input_txt[2];
        $m.setPassword["password"]=input_txt[3];
        $m.setPassword["user_id"]=user_id;

        console.log($m.setPassword);
        $m.toPrev($(".page22"),function(){
            $m.active_scroll=21;
            $m.refreshPage();
        });
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "goFindPwd",
            dataType: "json",
            data: $m.user_arr,
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    _this.text("确认修改");
                    _this.on("click",function(){
                        toSub(_this);
                    });
                }else if(data["status"]==0){
                    msg(data["data"],"确定");
                    _this.text("确认修改");
                    _this.on("click",function(){
                        toSub(_this);
                    });
                }
            },
            error: function(XMLHttpRequest,textStatus,errorThrown){
                // 请求失败
                msg("网络似乎出现了问题，请重试。","确定");
                _this.text("确认修改");
                _this.on("click",function(){
                    toSub(_this);
                });
            }
        });
        
    }
}
// 验证码
function checkpost(obj,input_class){
    var input_txt="";
    var regPartton=/1[1-9]+[0-9]{9}/;
    input_txt=$("."+input_class).val();
    if(input_txt=="" || input_txt==null || input_txt=="undefined"){
        msg("请填写手机号",800);
    }else if(input_txt.length<11 || !regPartton.test(input_txt)){
        msg("请填写正确手机号",800);
    }else{
        obj.off("click");
        var timer=null;
        var seconds=59;
        // 发送验证码后台切入口
        obj.css({"color":"#acacac"});
        obj.text("已发送(60)");
        timer=setInterval(function(){
            obj.text("已发送("+seconds+")");
            seconds--;
            if(seconds<0){
                clearInterval(timer);
                obj.text("重新发送");
                obj.css({"color":"#fff"});
                obj.on("click",function(){
                    checkpost(obj,input_class);
                });
            }
        },1000);
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "getVerifyCode",
            dataType: "json",
            data: {"openid":openid,"phone":input_txt,"type":2},
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    var timer=null;
                    var seconds=59;
                    // 发送验证码后台切入口
                    obj.css({"color":"#acacac"});
                    obj.text("已发送(60)");
                    timer=setInterval(function(){
                        obj.text("已发送("+seconds+")");
                        seconds--;
                        if(seconds<0){
                            clearInterval(timer);
                            obj.text("重新发送");
                            obj.css({"color":"#fff"});
                            obj.on("click",function(){
                                checkpost(obj,input_class);
                            });
                        }
                    },1000);
                    $m.setPassword["autocode"]=data["data"];
                }else if(data["status"]==0){
                    msg(data["data"],"确定");
                    clearInterval(timer);
                    obj.text("获取验证码");
                    obj.css({"color":"#fff"});
                    obj.on("click",function(){
                        checkpost(obj,input_class);
                    });
                }
            },
            error: function(XMLHttpRequest,textStatus,errorThrown){
                // 请求失败
                msg("网络似乎出现了问题，请重试。","确定");
                clearInterval(timer);
                obj.text("获取验证码");
                obj.css({"color":"#fff"});
                obj.on("click",function(){
                    checkpost(obj,input_class);
                });
            }
        });
    }
}