// 自定义方法
var $m={
    // 分享链接
    share_href: window.location.href,
    // 图片地址前缀
    img_url:"images/",
    // 重新布局
    rs: function(){
        var limit=720;
        var dw=document.documentElement.clientWidth;
        var dh=document.documentElement.clientHeight;
        var fw=dw>limit?limit:dw;
        $("body").css({"font-size":1*fw/360+"em"});
        var ratio=1;
        if(dh/fw*720<1136){
            ratio=dh/fw*720/1136;
        }                    
    },
}
// 切换产品
var mySwiper=new Swiper(".swiper-container",{
    direction :'vertical',
    loop: false,
    noSwiping:true,
    spaceBetween: 0,
    preventClicksPropagation:false,
    nextButton:'.js_next',
    onSlideChangeEnd: function(swiper){
        tab();
    }
}); 
function tab(){
    var j = parseInt(mySwiper.activeIndex);
    //这里可判断当前滑动到哪个产品
    var total=6;
    if(j==6){
        $(".next_div").hide();
    }else{
        $(".next_div").show();
    }
}
$(function(){
    $m.rs();
    mySwiper.slideTo(3)
    $(window).on("resize",function(){$m.rs()});

});