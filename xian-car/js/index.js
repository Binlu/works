$(function(){
	// 图片大小
	toResizePic($(".tab_box"));
	$(window).resize(function(){toResizePic($(".tab_box"));});
	// 图片轮播
	toPlay(1,3);
	// 文字轮播
	toPlayWid("news",-1,"height","top");
	// 返回顶部
	$(".js_goTop").on("click",function(){
		var h=$("body").height();
		var t=800000/h;
		$("html,body").animate({"scrollTop":0},t,"linear");
	}).on("mouseenter",function(){
		$(this).css({"background-color":"#3E3F3F"});
	}).on("mouseleave",function(){
		$(this).css({"background":"none"});
	});
});
// 设定高度
function toResizePic(obj){
	var dw=$(window).width();
	var dh=$(window).height();
	var oh=Math.round(dw*0.312);
	obj.height(oh);
	var ow1=$(".swiper_pagination").width();
	$(".swiper_pagination").css({"left":(dw-ow1)/2+"px"});
	var oh1=$(".tab_btn").height();
	$(".tab_btn").css({"margin-top":-oh1/2+"px"});
}
// 文字滚动播放
function toPlayWid(ID,speed,str1,str2){
    var oDiv=document.getElementById(ID);
    var oDiv1=oDiv.getElementsByTagName("div")[0];
    // oDiv1.style.width=aLi[0].offsetWidth*aLi.length+"px";
    oDiv1.innerHTML+=oDiv1.innerHTML;
    var oh=oDiv1.offsetHeight;
    function move(){
      var ot=parseInt(getStyle(oDiv1,str2));
      if(ot<=-oh/2){
          oDiv1.style[str2]=0;

      }
      else{
          oDiv1.style[str2]=ot+speed+"px";
      }
    };
    var timer=setInterval(move,30);
    oDiv.onmouseover=function(){
      clearInterval(timer);
      };
    oDiv.onmouseout=function(){
      timer=setInterval(move,30);
    };
}
// 获取class
function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName("*");
	var aResult=[];
	for(var i=0,tt=aEle.length;i<tt;i++){
		if(aEle[i].className.indexOf(sClass)!=-1){
			var arr_class=aEle[i].className.split(" ");
			for(var j=0,len=arr_class.length;j<len;j++){
				if(arr_class[j]==sClass){
					aResult.push(aEle[i]);
				}
			}
		}
	}
	return aResult;
}
// 获取样式
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}
// 图片播放
function toPlay(activeIndex,len){
	// 轮播检索值
	var n=activeIndex;
	// 轮播的长度
	var l=len;
	// 定时器
	var timer1=null;
	// 动画是否完成
	var complete_status=true;
	// 图片轮播
	timer1=setInterval(function(){
		var _index=n;
		n++;
		toPlayPic($(".swiper_wrapper"),n);
		if(_index==len){
			_index=0;
		}
		$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
	},5000);
	// 点击切换
	$(".swiper_pagination>li").on("click",function(){
		var _index=$(".swiper_pagination>li").index($(this));
		var a=n;
		if(a==len && _index==0){
			n++;
		}else{
			n=_index+1;
		}
		toPlayPic($(".swiper_wrapper"),n);
		$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
	});
	// mouseenter分页器上清除定时器 mouseleave开定时器
	$(".swiper_pagination").on("mouseenter",function(){
		clearInterval(timer1);
		timer1=null;
	}).on("mouseleave",function(){
		timer1=setInterval(function(){
			var _index=n;
			n++;
			if(_index==len){
				_index=0;
			}
			toPlayPic($(".swiper_wrapper"),n);
			$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
		},5000);
	});
	// 前进、后台按钮清除定时器
	$(".tab_btn").on("mouseenter",function(){
		clearInterval(timer1);
		timer1=null;
	}).on("mouseleave",function(){
		timer1=setInterval(function(){
			var _index=n;
			n++;
			if(_index==len){
				_index=0;
			}
			toPlayPic($(".swiper_wrapper"),n);
			
			$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
			
		},5000);
	});
	// 显示前进、后退
	$(".left_h_div").on("mouseenter",function(){
		$(".swiper_button_prev").show();
	}).on("mouseleave",function(){
		$(".swiper_button_prev").hide();
	});
	$(".swiper_button_prev").on("mouseenter",function(){
		$(this).show();
	});
	$(".right_h_div").on("mouseenter",function(){
		$(".swiper_button_next").show();
	}).on("mouseleave",function(){
		$(".swiper_button_next").hide();
	});
	$(".swiper_button_next").on("mouseenter",function(){
		$(this).show();
	});
	// 上一个
	$(".swiper_button_prev").on("click",function(){
		if(complete_status){
			complete_status=false;
			toPrev();
		}
	});
	// 下一个
	$(".swiper_button_next").on("click",function(){
		if(complete_status){
			complete_status=false;
			toNext();
		}
	});
	// 上一个函数
	function toPrev(){
		var _index=n-2;
		if(n==1){
			_index=len-1
		}
		n--;
		toPlayPic($(".swiper_wrapper"),n);
		$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
	}
	// 下一个函数
	function toNext(){
		var _index=n;
		if(n==len){
			_index=0
		}
		n++;
		toPlayPic($(".swiper_wrapper"),n);
		$(".swiper_pagination>li").eq(_index).addClass("swiper_pagination_active").siblings("li").removeClass("swiper_pagination_active");
	}
	// 图片轮播
	function toPlayPic(obj,speed){
		obj.stop(false).animate({"left":-speed*100+"%"},400,"linear",function(){
			if(speed>=len+1){
				n=1;
			}else if(speed<=0){
				n=len;
			}
			$(".swiper_wrapper").css({"left":-n*100+"%"});
			complete_status=true;
		});
	}
}