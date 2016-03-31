// 滚动变量
var myScroll1,myScroll2,myScroll3,myScroll4,myScroll5,myScroll6,myScroll7,myScroll8,myScroll9,myScroll10,myScroll11,myScroll12,myScroll13,myScroll14,myScroll15,myScroll16,myScroll17,myScroll18,myScroll19,myScroll20;
// 自定义方法
var $m={
    // 分享链接
    share_href: window.location.href,
    // 图片地址前缀
    img_url:"images/",
    head_place: "1.jpg",   //头像占位图片
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
    // ajax 请求地址前缀
    ajax_link:"http://120.25.68.163/citytravel/index.php?g=admin&m=app&a=",
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
    },
    user_info:{
        "phone":      18821725490,                  //手机号码
        "page":       1                             //我的行程当前页面
    }
}
// 获取连接数据
var link_obj=GetRequest();
// 用户id
var user_id=link_obj["user_id"]?link_obj["user_id"]:6;

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
    $m.rs();
    // 显示
    $m.showPage(function(){});
    
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
    // 点击修改头像
    $(".js_choice_head_pic").on("click",function(){
        $(".head_pic_div").show().siblings(".bg_div").fadeIn(400);;
    });
    // 相册
    $(".js_album_btn").on("click",function(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original','compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                $(".js_occupying_image").attr("src",localIds);
                $m.toNext($(".page23"),function(){

                })
            }
        });
    });
    // 相机
    $(".js_photograph_btn").on("click",function(){
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original','compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                $(".js_occupying_image").attr("src",localIds);
                $m.toNext($(".page23"),function(){

                })
            }
        });
    });
    //确认选择图片
    $(".js_sure_pic_choice").on("click",function(){
        var src=$(this).siblings(".js_occupying_image").attr("src")?$(this).siblings(".js_occupying_image").attr("src"):"";
        if(src!=""){
            $(".js_head_pic").attr("src",src);
        }
    });
    // 修改昵称
    $(".js_rename").on("click",function(){
        var txt=$(this).find(".js_rename_txt").text()?$(this).find(".js_rename_txt").text():"";
        txt=txt.reSpace();
        $(".js_rename_box").find(".js_rename_area").val(txt);
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
            var arr={"user_nicename":txt,"user_id":user_id};
            subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
                $(".js_rename_txt").text(txt);
            });
        }
    });
    // 修改性别
    $(".js_sex").on("click",function(){
        var sex=$(".js_sex").attr("data-sex")?$(".js_sex").attr("data-sex"):1;
        if(sex==1){
            $(".js_sex_div>a").eq(0).addClass("now_choice_a").siblings("a").removeClass("now_choice_a");
        }else{
            $(".js_sex_div>a").eq(1).addClass("now_choice_a").siblings("a").removeClass("now_choice_a");
        }
        $(".js_sex_box").show().siblings(".bg_div").fadeIn(400);;
    });
    // 确认修改性别
    $(".js_sex_div>a").on("click",function(){
        $(this).addClass("now_choice_a").siblings("a").removeClass("now_choice_a");
        var num=$(this).attr("data-sex")?$(this).attr("data-sex"):0;
        $(".js_sex_box").fadeOut(200);
        $(".bg_div").fadeOut(400);
        var txt=num==2?"女":"男";
        $(".js_sex").attr("data-sex",num);
        $(".js_sex_txt").text(txt);
        // var arr={"sex":txt,"user_id":user_id};
        // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
        //     $(".js_sex_txt").text(txt);
        // });
    });
    // 修改年龄
    $('.js_birthday').date({theme:"date",ylen:70},function(obj,re){
        $(".js_birth_num").text(re).attr("data-date",re);
        // var arr={"age":re,"user_id":user_id};
        // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
        //     $(".js_birth_num").text(re).attr("data-date",re);
        // });
    });
    // 修改手机号
    $(".js_mobile_btn").on("click",function(){
        var num=$(this).attr("data-mobile")?$(this).attr("data-mobile"):"";
        $(".js_change_mobile").find(".js_input_area").val(num);
        $(".js_change_mobile").show().siblings(".bg_div").fadeIn(400);;
    });
    
    // 确认修改手机号
    $(".js_save_mobile_btn").on("click",function(){
        var a=$(this).parent().siblings(".js_input_area");
        var txt=a.val()?a.val():"";
        var regx=/1[1-9]+[0-9]{9}/;
        if(txt==""){
            msg("请填写手机号",800);
        }else if(txt.length<11 || !regx.test(txt)){
            msg("请填写正确手机号",800);
        }else{
            $(".js_change_mobile").fadeOut(200);
            $(".bg_div").fadeOut(400);
            var q=txt.substr(0,3);
            var h=txt.substr(0,4);
            var str=q+"****"+h;
            $(".js_mobile_txt1").text(str).attr("data-mobile",txt);
            // var arr={"phone":txt,"user_id":user_id};
            // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
            //     $(".js_change_mobile").fadeOut(200);
            //     $(".bg_div").fadeOut(400);
            //     var q=txt.substr(0,3);
            //     var h=txt.substr(0,4);
            //     var str=q+"****"+h;
            // });
        }
    });
    
    // 修改签名
    $(".js_autograph").on("click",function(){
        var txt=$(this).find(".js_autograph_txt").text()?$(this).find(".js_autograph_txt").text():"";
        txt=txt.reSpace();
        if(txt!="" && txt!="请填写"){
            $(".js_change_autograph").find(".js_text_area").val(txt);
        }
        $(".js_change_autograph").show().siblings(".bg_div").fadeIn(400);;
    });
    // 确认修改手机号
    $(".js_autograph_btn").on("click",function(){
        var a=$(this).parent().siblings(".js_text_area");
        var txt=a.val()?a.val():"";
        if(txt==""){
            msg("请填写签名",800);
        }else{
            $(".js_change_autograph").fadeOut(200);
            $(".bg_div").fadeOut(400);
            $(".js_autograph").find(".js_autograph_txt").text(txt);
            // var arr={"signature":txt,"user_id":user_id};
            // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
            //     $(".js_change_mobile").fadeOut(200);
            //     $(".bg_div").fadeOut(400);
            //     var q=txt.substr(0,3);
            //     var h=txt.substr(0,4);
            //     var str=q+"****"+h;
            // });
        }
    });
    // 取消修改
    $(".js_cancel_btn").on("click",function(){
        $(this).parent().parent().fadeOut(200);
        $(".bg_div").fadeOut(400);
    });
    $(".js_cancel_choice_pic").on("click",function(){
        $(this).parent().fadeOut(200);
        $(".bg_div").fadeOut(400);
    });
    
    // 我的行程
    $(".js_my_trip").on("click",function(){
        $("#atten_box").fadeIn(100);
        $(".bg_div").fadeIn(200);
        $m.toNext($(".page2"),function(){
            $m.active_scroll=2;
            $m.refreshPage();
        });
        var is_add=$(this).attr("data-add")?$(this).attr("data-add"):2;
        if(is_add==2){
            // 没有加载
            getMyTrip();
        }
    });
    // 行程详情
    $(".page2").on("click",".js_trip_list>li",function(){
        $("#atten_box").fadeIn(100);
        $(".bg_div").fadeIn(200);
        $m.toNext($(".page3"),function(){
            $m.active_scroll=3;
            $m.refreshPage();
        });
        var orderId=$(this).attr("data-orderid")?$(this).attr("data-orderid"):"";
        var arr={"orderId":orderId,"user_id":user_id};
        subAjax(arr,$m.ajax_link+"getOrderDetail",setMyTripDetail);
    });
    // 填写取消订单框
    $(".js_del_order").on("click",function(){
        $(".js_del_order_box").show().siblings(".bg_div").fadeIn(400);
    });
    
    // 确认取消订单
    $(".js_order_btn").on("click",function(){
        var txt=$(".js_order_area").val()?$(".js_order_area").val():"";
        if(txt==""){
            msg("内容不能为空。",800);
        }else{
            // $(".js_cancel_div").show().siblings(".js_order_detail_box").hide();
            // $(".page3 .js_del_order").hide();
            // $(".p3_btn_div").hide();
            // $(".js_cancel_div").children("span").text(txt);
            // $(".js_del_order_box").fadeOut(200);
            // $(".bg_div").fadeOut(400,function(){
            //     myScroll3.refresh();
            // });
            var orderid=$(".page3 .js_del_order").attr("data-orderid");
            var arr={"orderId":orderid,"user_id":user_id,"type":1};
            subAjax(arr,$m.ajax_link+"goCancelOrder",function(){
                $(".js_cancel_div").show().siblings(".js_order_detail_box").hide();
                $(".page3 .js_del_order").hide();
                $(".p3_btn_div").hide();
                $(".js_cancel_div").children("span").text(txt);
                $(".js_del_order_box").fadeOut(200);
                $(".bg_div").fadeOut(400,function(){
                    myScroll3.refresh();
                });
            });
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
        // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
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
            // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
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
    $(".page22 .js_get_code").on("click",function(){
        checkpost($(this),"page22 .js_mobile");
    });
    // 确认修改密码
    $(".js_sure_resetpass").on("click",function(){
        toSubPass($(this),function(){
            $m.toPrev($(".page22"),function(){
                $m.active_scroll=21;
                $m.refreshPage();
            });
        });
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
            // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
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
        // subAjax(arr,$m.ajax_link+"goModifiedSelfInfo",function(){
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
    // 选择发票订单
    $(".page9").on("click",".js_invoice_list>li",function(){
        // if(!$(this).hasClass("now_choice_li")){
        //     $(this).addClass("now_choice_li");
        // }else{
        //     $(this).removeClass("now_choice_li");
        // }
        $(this).addClass("now_choice_li").siblings("li").removeClass("now_choice_li");
    });
    // 全选
    $(".js_choice_all_invoice").on("click",function(){
        // if(!$(this).hasClass("all_chocie_btn")){
        //     $(this).addClass("all_chocie_btn").removeClass("all_nchocie_btn");
        //     $(".page9 .js_invoice_list>li").addClass("now_choice_li");
        // }else{
        //     $(this).addClass("all_nchocie_btn").removeClass("all_chocie_btn");
        //     $(".page9 .js_invoice_list>li").removeClass("now_choice_li");
        // }

    });
    // 填写信息
    $(".js_fill_info").on("click",function(){
        if($(".js_invoice_list").children("li.now_choice_li").length<1){
            msg("请先选择订单。",800);
        }else{
            var price=$(".js_invoice_price").text()?$(".js_invoice_price").text():0;
            $(".page10").find(".js_input_area").eq(0).val(price);
            $m.toNext($(".page10"),function(){
                $m.active_scroll=10;
                $m.refreshPage();
            });
        }
    });
    // 送达服务站
    $(".js_to_service_station").on("click",function(){
        $(this).addClass("choice_btn").siblings("a").removeClass("choice_btn");
        $(".js_service_station").show();
        $(".js_address_ele").hide();
        myScroll10.refresh();
    });
    // 选择服务站
    $(".page10").on("click",".js_choice_service_station",function(){
        $(this).find(".js_choice_pic").attr("src",$m.img_url+"icon22.png");
        $(this).siblings(".js_choice_service_station").find(".js_choice_pic").attr("src",$m.img_url+"icon21.png");
    });
    // 快递
    $(".js_to_express").on("click",function(){
        $(this).addClass("choice_btn").siblings("a").removeClass("choice_btn");
        $(".js_service_station").hide();
        $(".js_address_ele").show();
        myScroll10.refresh();
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
        signInFuc($(this),function(){
            msg("登录成功！","确定",function(){
                $m.toPrev($(".page15"),function(){
                    $m.active_scroll=1;
                });
            },true);
        });
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
        registerFunc($(this),function(){
            msg("注册成功，立即登录。","确定",function(){
                $m.toPrev($(".page16"),function(){
                    $m.active_scroll=15;
                });
            },true);
        });
    });
    // 获取验证码
    $(".page16 .js_get_code").on("click",function(){
        checkpost($(this),"page16 .js_mobile");
    });
    // 找回密码
    $(".js_get_ps").on("click",function(){
        getSignPass($(this),function(){
            $m.toNext($(".page17"),function(){
                $m.active_scroll=17;
                $m.refreshPage();
            });
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
    $.ajax({
        type: "POST",
        url: url,
        data:arr,
        dataType: "json",
        success: function(data){
            if(data["status"]==0){
                msg(data["data"],800);
                $("#atten_box").fadeOut(100);
                $(".bg_div").fadeOut(200);
            }else if(data["status"]==1){
                if(typeof func==="function" && func instanceof Function){
                    func(data["data"]);
                }
            }
        },
        error: function(XMLHttpRequest,textStatus,errorThrown){
            msg("请求失败，请稍后重试！","确定");
            $("#atten_box").fadeOut(100);
            $(".bg_div").fadeOut(200);
        }
    });
}
// 登录
function signInFuc(obj,func){
    var _this=obj;
    var input_txt=[];
    var regx=/1[1-9]+[0-9]{9}/;
    $(".page15 .js_input_area").each(function(){
        input_txt.push($(this).val());
        return input_txt;
    });
    if(input_txt[0]=="" || input_txt[0]==null || input_txt[0]=="undefined"){
        msg("请填写手机号",800);
    }else if(input_txt[0].length<11 || !regx.test(input_txt[0])){
        msg("请填写正确手机号",800);
    }else if(input_txt[1]=="" || input_txt[1]==null || input_txt[1]=="undefined"){
        msg("请输入密码",800);
    }else{
        _this.off("click");
        _this.text("登录中...");
        // 赋值
        if(typeof func==="function" && func instanceof Function){
            func();
        }
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "goLogin",
            dataType: "json",
            data: {"user_id":user_id,"phone":input_txt[0],"user_pass":input_txt[1]},
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    if(typeof func==="function" && func instanceof Function){
                        func();
                    }
                    _this.text("登录");
                    _this.on("click",function(){
                        signInFuc(_this,func);
                    });
                }else if(data["status"]==0){
                    msg(data["data"],"确定");
                    _this.text("登录");
                    _this.on("click",function(){
                        signInFuc(_this,func);
                    });
                }
            },
            error: function(XMLHttpRequest,textStatus,errorThrown){
                // 请求失败
                msg("网络似乎出现了问题，请重试。","确定");
                _this.text("登录");
                _this.on("click",function(){
                    signInFuc(_this,func);
                });
            }
        });
        
    }
}
// 注册
function registerFunc(obj,func){
    var _this=obj;
    var input_txt=[];
    var regx=/1[1-9]+[0-9]{9}/;
    $(".page16 .js_input_area").each(function(){
        input_txt.push($(this).val());
        return input_txt;
    });
    if(input_txt[0]=="" || input_txt[0]==null || input_txt[0]=="undefined"){
        msg("请填写手机号",800);
    }else if(input_txt[0].length<11 || !regx.test(input_txt[0])){
        msg("请填写正确手机号",800);
    }else if(input_txt[1]=="" || input_txt[1]==null || input_txt[1]=="undefined"){
        msg("请输入验证码",800);
    }else if(input_txt[1]!=$m.setPassword["autocode"]){
        msg("验证码错误",800);
    }else if(input_txt[2]=="" || input_txt[2]==null || input_txt[2]=="undefined"){
        msg("请输入密码",800);
    }else{
        _this.off("click");
        _this.text("提交中...");
        // 赋值
        if(typeof func==="function" && func instanceof Function){
            func();
        }
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "goRegister",
            dataType: "json",
            data: {"user_id":user_id,"phone":input_txt[0],"code":input_txt[1],"user_pass":input_txt[2]},
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    if(typeof func==="function" && func instanceof Function){
                        func();
                    }
                    _this.text("注册");
                    _this.on("click",function(){
                        registerFunc(_this,func);
                    });
                }else if(data["status"]==0){
                    msg(data["data"],"确定");
                    _this.text("注册");
                    _this.on("click",function(){
                        registerFunc(_this,func);
                    });
                }
            },
            error: function(XMLHttpRequest,textStatus,errorThrown){
                // 请求失败
                msg("网络似乎出现了问题，请重试。","确定");
                _this.text("注册");
                _this.on("click",function(){
                    registerFunc(_this,func);
                });
            }
        });
        
    }
}
// 找回密码
function getSignPass(obj,func){
    var _this=obj;
    var input_txt=$(".page17 .js_input_area").val();
    var regx=/1[1-9]+[0-9]{9}/;
    if(input_txt=="" || input_txt==null || input_txt=="undefined"){
        msg("请填写手机号",800);
    }else if(input_txt.length<11 || !regx.test(input_txt)){
        msg("请填写正确手机号",800);
    }else{
        _this.off("click");
        _this.text("提交中...");
        if(typeof func==="function" && func instanceof Function){
            func();
        }
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "goLogin",
            dataType: "json",
            data: {"user_id":user_id,"phone":input_txt},
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    if(typeof func==="function" && func instanceof Function){
                        func();
                    }
                    _this.text("找回密码");
                    _this.on("click",function(){
                        getSignPass(_this,func);
                    });
                }else if(data["status"]==0){
                    msg(data["data"],"确定");
                    _this.text("找回密码");
                    _this.on("click",function(){
                        getSignPass(_this,func);
                    });
                }
            },
            error: function(XMLHttpRequest,textStatus,errorThrown){
                // 请求失败
                msg("网络似乎出现了问题，请重试。","确定");
                _this.text("找回密码");
                _this.on("click",function(){
                    getSignPass(_this,func);
                });
            }
        });
        
    }
}

// 提交修改密码
function toSubPass(obj,func){    
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
        if(typeof func==="function" && func instanceof Function){
            func();
        }
        console.log($m.setPassword);
        return false;
        // 请求开始
        $.ajax({
            type: "POST",
            url: "goFindPwd",
            dataType: "json",
            data: $m.setPassword,
            success: function(data){
                if(data["status"]==1){
                    console.log("ok");
                    if(typeof func==="function" && func instanceof Function){
                        func();
                    }
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
/*--------------------微信配置-------------------------*/
// 微信配置接口
function weSet(arr){
    wx.config({
        debug: false,
        appId: arr["appid"], 
        timestamp: arr["timestamp"], 
        nonceStr: arr["nonceStr"], 
        signature: arr["signature"], 
        jsApiList:[
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'hideMenuItems',
            'chooseImage',               //拍照或从手机相册中选图接口
            'previewImage',              //预览图片接口
            'uploadImage',               //上传图片接口
            'downloadImage',             //下载图片接口
            'scanQRCode',                //调起微信扫一扫接口
            'chooseWXPay',               //调起微信支付接口
        ] 
    });
    wx.ready(function(){

        wx.onMenuShareTimeline({
            title: '#兰芝2016明星礼赠#快来领取最受欢迎的兰芝明星产品四件套~', // 分享标题
            link: "http://cdn.wemediacn.com/webpage_laneige/api/CoverService.aspx?r_url=http://weapp.wemediacn.com/laneige/applyinfo/201603/index.html", // 分享链接
            imgUrl: "http://bos.bj.baidubce.com/we-sh2/laneige/applyinfo/yun/201603/images/share.jpg", // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '#兰芝2016明星礼赠#快来领取最受欢迎的兰芝明星产品四件套~', // 分享标题
            desc: '#兰芝2016明星礼赠#快来领取最受欢迎的兰芝明星产品四件套~', // 分享描述
            link: "http://cdn.wemediacn.com/webpage_laneige/api/CoverService.aspx?r_url=http://weapp.wemediacn.com/laneige/applyinfo/201603/index.html", // 分享链接
            imgUrl: "http://bos.bj.baidubce.com/we-sh2/laneige/applyinfo/yun/201603/images/share.jpg", // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () { 
                // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        // 隐藏按钮
        wx.hideMenuItems({
            menuList: [
                'menuItem:readMode', // 阅读模式
                'menuItem:copyUrl' ,// 复制链接
                'menuItem:share:qq',//分享qq
                'menuItem:share:weiboApp',//分享微博
                'menuItem:share:facebook',//分享到FB
                'menuItem:jsDebug',//调试
                'menuItem:editTag',//编辑标签
                'menuItem:delete',//删除
                'menuItem:originPage',//原网页
                'menuItem:openWithQQBrowser',//qq浏览器打开
                'menuItem:openWithSafari',//safari浏览器打开
                'menuItem:share:email',//邮件
                'menuItem:share:brand',//特殊公众号
            ],
            success: function (res) {
                console.log("ok");
            },
            fail: function (res) {
                console.log(JSON.stringify(res));
            }
        });
    });
}
String.prototype.reSpace=function(){
    var c=this.replace(/\s/g,"");
    return c;
}
//格式化日期
function format(txt){
    var tempdate=new Date(Date.parse(txt.replace(/-/g,"/")));
    return tempdate;
}
// 请求我的行程
function getMyTrip(){
    var arr={"phone":$m.user_info["phone"],"user_id":user_id,"page":$m.user_info["page"]};
    subAjax(arr,$m.ajax_link+"getOrderListByPhone",setMyTrip);
}
// 生成行程dom
function setMyTrip(arr){
    $(".js_my_trip").attr("data-add",1);
    if(arr.length<1){
        // 没有数据
        $(".page2").find(".no_list").show().siblings(".trip_box").hide();
    }else{
        var _html='';
        var status,orderid,ordersn,remainpaysn,ordertype,startname,endname,addtime,voice,desc,personnumber,ishelp,isbag,ischildren,totalprice,freeprice,finalprice,bookprice;
        for(var i=0,len=arr.length;i<len;i++){
            status=arr[i]["status"]?arr[i]["status"]:"";                              //订单状态
            orderid=arr[i]["orderid"]?arr[i]["orderid"]:"";                           //点单id
            ordersn=arr[i]["ordersn"]?arr[i]["ordersn"]:"";                           //首次支付订单编号
            remainpaysn=arr[i]["remainpaysn"]?arr[i]["remainpaysn"]:"";               //剩余金额支付订单号
            ordertype=arr[i]["ordertype"]?arr[i]["ordertype"]:1;                      //订单类型 1立即叫车 2预约线路拼车(客服派单) 3预约线路包（选车、不选车）车 4预约包天（选车、不选车）
            startname=arr[i]["startname"]?arr[i]["startname"]:"";                     //起点地址
            endname=arr[i]["endname"]?arr[i]["endname"]:"";                           //终点地址
            addtime=arr[i]["addtime"]?arr[i]["addtime"]:"";                           //下单时间
            voice=arr[i]["voice"]?arr[i]["voice"]:"";                                 //语音
            desc=arr[i]["desc"]?arr[i]["desc"]:"";                                    //留言文字描述
            personnumber=arr[i]["personnumber"]?arr[i]["personnumber"]:"";            //当前乘客数量
            ishelp=arr[i]["ishelp"]?arr[i]["ishelp"]:0;                               //是否帮人约车 0 否 1是
            isbag=arr[i]["isbag"]?arr[i]["isbag"]:0;                                  //是否有包裹 0 否 1是
            ischildren=arr[i]["ischildren"]?arr[i]["ischildren"]:0;                   //是否有小孩 0 否 1是
            totalprice=arr[i]["totalprice"]?arr[i]["totalprice"]:0;                   //总价
            freeprice=arr[i]["freeprice"]?arr[i]["freeprice"]:0;                      //优惠金额
            finalprice=arr[i]["finalprice"]?arr[i]["finalprice"]:0;                   //终需支付金额
            bookprice=arr[i]["bookprice"]?arr[i]["bookprice"]:0;                      //定金金额
            _html+='<li data-status="'+status+'" data-orderid="'+orderid+'" data-ordersn="'+ordersn+'" data-remainpaysn="'+remainpaysn+'" data-ordertype="'+ordertype+'" data-addtime="'+addtime+'" data-voice="'+voice+'" data-desc="'+desc+'" data-personnumber="'+personnumber+'" data-ishelp="'+ishelp+'" data-isbag="'+isbag+'" data-ischildren="'+ischildren+'" data-totalprice="'+totalprice+'" data-freeprice="'+freeprice+'" data-finalprice="'+finalprice+'" data-bookprice="'+bookprice+'">';
            _html+='<ul class="trip_de_list">';
            _html+='<li><img src="images/icon12.png" alt="icon"/>';
            _html+='<span>'+addtime+'</span>';
            _html+='<div class="f_r"><label>订单号：</label><span>'+ordersn+'</span></div>';
            _html+='</li>';
            if(ordertype!=4){
                // 显示终止地址
                _html+='<li><img src="images/icon12.png" alt="icon"/>';
                _html+='<span class="address_spn">'+startname+'</span>';
                _html+='</li>';
                _html+='<li><img src="images/icon13.png" alt="icon"/>';
                _html+='<span class="address_spn">'+endname+'</span>';
                _html+='<div class="f_r">';
                if(status==0){
                    _html+='<span>未支付</span>';
                }else if(status==1){
                    _html+='<span>已关闭</span>';
                }else if(status==2){
                    _html+='<span>已交定金</span>';
                }else if(status==3){
                    _html+='<span>已付全款</span>';
                }else if(status==4){
                    _html+='<span>已退款</span>';
                }else if(status==5){
                    _html+='<span>已完成</span>';
                }else{};
                _html+='</div>';

                _html+='</li>';
            }else{
                _html+='<li><img src="images/icon12.png" alt="icon"/>';
                _html+='<span class="address_spn">'+startname+'</span>';
                _html+='<div class="f_r">';
                if(status==0){
                    _html+='<span>未支付</span>';
                }else if(status==1){
                    _html+='<span>已关闭</span>';
                }else if(status==2){
                    _html+='<span>已交定金</span>';
                }else if(status==3){
                    _html+='<span>已付全款</span>';
                }else if(status==4){
                    _html+='<span>已退款</span>';
                }else if(status==5){
                    _html+='<span>已完成</span>';
                }else{};
                _html+='</div>';
                _html+='</li>'
            }
            _html+='</ul>';
            _html+='</li>'
        }
        $(".js_trip_list").append(_html);
    }
    $("#atten_box").fadeOut(100);
    $(".bg_div").fadeOut(200);
    $m.refreshPage();
}
// 请求订单详情
function getMyTripDetail(){
    var arr={"orderId":$m.user_info["phone"],"user_id":user_id,"page":$m.user_info["page"]};
    subAjax(arr,$m.ajax_link+"getOrderDetail",setMyTrip);
}
// 生成订单详情
function setMyTripDetail(arr){
    console.log(arr);
    var orderid=arr["orderid"]?arr["orderid"]:"";
    var status=arr["status"]?arr["status"]:6;
    var carno=arr["carno"]?arr["carno"]:"";
    var driver=arr["driverinfo"]?arr["driverinfo"]:{};
    var pic_src=driver["img"]?driver["img"]:$m.img_url+$m.head_place;
    var driverid=driver["driverid"]?driver["driverid"]:0;
    var tel=driver["tel"]?driver["tel"]:"";
    var drivername=driver["drivername"]?driver["drivername"]:"";
    var servicecounts=driver["servicecounts"]?driver["servicecounts"]:0;
    var avgstar=driver["avgstar"]?driver["avgstar"]:0;
    $(".page3 .js_driver_head_pic").attr("src",pic_src);
    $(".page3 .car_number").text(carno);
    $(".page3 .js_driver_name").text(drivername);
    $(".page3 .js_service_num").text(servicecounts);
    $(".page3 .js_driver_ranking").text(driverid);
    $(".page3 .js_driver_mobile").attr("href","tel:"+tel);
    var driver_star=parseInt(avgstar)?parseInt(avgstar):0;
    for(var i=0;i<driver_star;i++){
        $(".page3 .js_driver_star>li").eq(i).children("img").attr("src",$m.img_url+"icon11.png");
    }
    var tit="订单详情";
    if(status==0){
        // 未支付
        var addtime=arr["addtime"]?arr["addtime"]:"";
        var startname=arr["startname"]?arr["startname"]:"";
        var endname=arr["endname"]?arr["endname"]:"";
        var isbag=arr["isbag"]?arr["isbag"]:0;
        console.log(isbag);
        var ischildren=arr["ischildren"]?arr["ischildren"]:0;
        var totalprice=arr["totalprice"]?arr["totalprice"]:0;
        tit="订单未完成";
        $(".page3 .js_order_time").text(addtime);
        $(".page3 .js_start_address").text(startname);
        $(".page3 .js_end_address").text(endname);
        // 清空dom先
        $(".page3 .js_additional_list").html('');
        if(isbag==1){
            var _html='<li><img src="images/icon13.png" alt="icon"/><span>需要捎一件行李</span></li>';
            $(".page3 .js_additional_list").append(_html);
        }
        if(ischildren==1){
            var _html='<li><img src="images/icon13.png" alt="icon"/><span>有小孩</span></li>';
            $(".page3 .js_additional_list").append(_html);
        }
        $(".page3 .js_pay_price").text(totalprice);
        // 隐藏/显示其他状态的元素
        $(".page3 .js_cancel_div").hide();
        $(".page3 .evaluate_box").hide();
        $(".page3 .js_del_order").show().attr("data-orderid",orderid);
        $(".page3 .p3_btn_div").show();
        $(".page3 .js_order_detail_box").show();
        $(".page3 .js_to_pay").show().siblings("a").hide();
    }
    $(".page3 .js_tit_spn").text(tit);
    $("#atten_box").fadeOut(100);
    $(".bg_div").fadeOut(200);
    $m.refreshPage();
}
