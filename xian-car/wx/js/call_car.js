// 滚动变量
var myScroll1,myScroll2,myScroll3,myScroll4,myScroll5;
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
var page=link_obj["page"]?link_obj["page"]:1;
$(function(){
	// 绑定滚动
    myScroll1=new IScroll('.page1',{mouseWheel: true,hideScrollbar: true,click: true,bounce:false});
    myScroll2=new IScroll('.list',{mouseWheel: true,hideScrollbar: true,click: true});
    myScroll3=new IScroll('.page3',{mouseWheel: true,hideScrollbar: true,click: true});
    myScroll4=new IScroll('.page4',{mouseWheel: true,hideScrollbar: true,click: true});
    myScroll5=new IScroll('.page5',{mouseWheel: true,hideScrollbar: true,click: true});
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
	// 存储搜索数据
	(function(){
		var arr2=$(".js_city_search").attr("data-id")?$(".js_city_search").attr("data-id"):[];
		arr2=eval(arr2);
		if(arr2.length>0){
			$m.s_arr2=save_search(arr2,2);
		}
		
	})();
	searchbg2=$(".js_city_search").css("background-image");
	var new_city=new ms();
	new_city.local();
	console.log(111)
	new_city.init_cs();
	$(".js_city_search").bind("focus",function(event){
		$(this).css({"background-image":"none"});
		stopBubble(event);
	}).bind("blur",function(event){
		var txt=$(this).val();
		if($(this).val()==""||$(this).val()==null){
			$(this).css({"background-image":searchbg2});
			new_city.init();
			stopBubble(event);
		}else{
			new_city.init2($m.s_arr2,txt,$(".search_list"));
		}
	}).bind("input propertychange",function(event){
		var txt=$(this).val();
		if(txt==""){
			new_city.init();
		}else{
			new_city.init2($m.s_arr2,txt,$(".search_list"));
		}
		stopBubble(event);
	});
	$(".list_tar").on("click",function(event){
		$(".js_city_search").blur();
		stopBubble(event);
	});
	$(".azban_tar td").unbind().bind("touchstart",function(event){
		var x=$(this).html();
		// try{ttscroll1.scrollToElement(".jp_"+x,10);}catch(e){}
		$(".azban_tar td").css({"color":"grey","font-weight":"normal"});
		$(this).css({"color":"#3b81c6","font-weight":"bold"});
		try{myScroll2.scrollToElement(".jp_"+x,10);}catch(e){}
		stopBubble(event);
	});
	
	// 选择城市
    $(".js_get_city").on("click",function(){
    	$(".js_get_city").removeClass("js_now_address");
    	$(this).addClass("js_now_address");
        $m.toNext($(".page2"),function(){
            $m.active_scroll=2;
            $m.refreshPage();
        });
    });
    // 确认选择
    $(".list_tar").on("click",".js_city_list .opt",function(){
    	var txt=$(this).children("span").text()?$(this).children("span").text():"";
    	$(".js_now_address").find(".js_add_txt").text(txt);
        $m.toPrev($(".page2"),function(){
            $m.active_scroll=1;
        });
    });
    // 有话说
    $(".js_get_words").on("click",function(){
        $m.toNext($(".page3"),function(){
            $m.active_scroll=3;
            $m.refreshPage();
        });
    });
    // 提交语音
    $(".js_message_btn").on("click",function(){
        msg("恭喜，提交成功！","确定",function(){
            $m.toPrev($(".page3"),function(){
                $m.active_scroll=1;
            });
        },true);
    });
    
    // 乘车人数
    $(".js_member").on("click",function(){
        $m.toNext($(".page4"),function(){
            $m.active_scroll=4;
            $m.refreshPage();
        });
    });
    // 提交人数
    $(".js_sure_num_btn").on("click",function(){
        $m.toPrev($(".page4"),function(){
        	var num=$(".js_num").val()?$(".js_num").val():1;
        	$(".js_person_num").text(num);
            $m.active_scroll=1;
        });
    });
    // 取消返回
    $(".js_cancel").on("click",function(){
        $m.toPrev($(".page4"),function(){
            $m.active_scroll=1;
        });
    });
    // 选择人数
    $(".js_num_list>li").on("click",function(){
        var _index=$(".js_num_list>li").index($(this));
        $(this).addClass("now_choice").siblings("li").removeClass("now_choice");
        var txt=$(this).text()?$(this).text():1;
        $(".js_num").val(txt);
    });
    // 资费详情
    $(".js_get_detail").on("click",function(){
        $m.toNext($(".page5"),function(){
            $m.active_scroll=5;
            $m.refreshPage();
        });
    });
    
	$(window).on("resize",function(){$m.rs()});
});
function ms(){
	// 初始化
	this.init=function(){
		$(".js_city_search").val("");
		$(".search_list").html("").hide();
		if($(".city_list>li").length>0){
			$(".city_list").show().siblings(".n_list").hide();
		}else{
			$(".city_list").hide().siblings(".n_list").show();
		}
		myScroll2.refresh();
	}
	// 城市生成
	this.init_cs=function(){
		var arr=$(".js_city_search").attr("data-id")?$(".js_city_search").attr("data-id"):"";
		arr=eval(arr);
		console.log(arr,111)
		if(arr.length>0){
			// 循环字母
			var az=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			var _html='',_html1='',_html2='';
			for(var n=0,a_len=az.length;n<a_len;n++){
				var name="",arr_list=[];
				for(var i=0,len=arr.length;i<len;i++){
					name=arr[i]["name"]?arr[i]["name"]:"";
					arr_list=arr[i]["list"]?arr[i]["list"]:[];
					var py_t=Pinyin.GetJP(name)[0].toUpperCase();
					if(name!=="a-z"){
						
						if(py_t==az[n]){
							// 有货
							_html1+='<li class="tag jp_">'+name+'</li>';
							var info="",py1="",id="";
							for(var j=0,len1=arr_list.length;j<len1;j++){
								
								info=arr_list[j].split("@@");
								py1=info[1]?info[1]:"";
								id=info[0]?info[0]:"";
								_html1+='<li class="opt" data-id="'+id+'"><span>'+py1+'</span></li>';
							}

						}
						
					}else{
						// 有货
						var info="",py1="",id="";
						var a=1;
						var _html3='';
						for(var j=0,len1=arr_list.length;j<len1;j++){
							info=arr_list[j].split("@@");
							py1=info[1]?info[1]:"";
							py1_f=Pinyin.GetJP(py1)[0].toUpperCase();
							if(py1_f==az[n]){
								a=2;
								id=info[0]?info[0]:"";
								_html3+='<li class="opt" data-id="'+id+'"><span>'+py1+'</span></li>';
							}
						}
						if(a==2){
							_html2=_html2+'<li class="tag jp_'+az[n]+'">'+az[n]+'</li>'+_html3;
						}else{
							_html2=_html2+'<li class="tag hide jp_'+az[n]+'">'+az[n]+'</li>'+_html3;
						}
					}
				}
			}
			_html=_html1+_html2;
			if(_html!=''){
				$(".city_list").html(_html);
			}
		}else{
			// 没有国家列表
			$(".n_list").eq(0).show();
		}
		myScroll2.refresh();
	}

	this.init1=function(arr,txt,oEle){
		
		var _html1='<li class="tag jp_A">搜索结果</li>';
		var _html2='<li class="tag jp_A">搜索结果</li>';
		var _html3='<li class="tag jp_A">搜索结果</li>';
		var _html4='<li class="tag jp_A">搜索结果</li>';
        var a={"jp":"","qp":"","hp":""};
        var b={"jp":"","qp":"","hp":""};
        // 获取简拼
        b.fw=Pinyin.GetQP(txt)[0];
        b.jp=Pinyin.GetJP(txt);
        // 全拼
        b.qp=Pinyin.GetQP(txt);
        // 混拼
        b.hp=Pinyin.GetHP(txt);
        for(var i=0,len=arr.length;i<len;i++){
        	a.fw=Pinyin.GetQP(arr[i]["name"])[0];
            a.jp=Pinyin.GetJP(arr[i]["name"]);
            a.qp=Pinyin.GetQP(arr[i]["name"]);
            a.hp=Pinyin.GetHP(arr[i]["name"]);
            if(a.fw==b.fw){
            	// 首字母匹配
            	if(a.qp==b.qp){
                    // 匹配
                    _html1+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><img src="'+$m.img_url+arr[i]["src"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html("");
                    oEle.html(_html1);
                    return false;
                }else if(a.jp==b.jp){
                    _html2+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><img src="'+$m.img_url+arr[i]["src"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html2);
                    return false;
                }
                else if(a.hp==b.hp){
                    _html3+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><img src="'+$m.img_url+arr[i]["src"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html3);
                    return false;
                }else{
                	_html4+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><img src="'+$m.img_url+arr[i]["src"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html4);
                }
            }
            
        }
        if(oEle.children("li").length==0){
			$(".c_list").siblings(".n_list").children(".at2").show().siblings().hide();
			$(".c_list").hide().siblings(".n_list").show();
		}else{
			oEle.show();
			$(".c_list").hide();
		}
		ttscroll2.refresh();
	}


	this.init2=function(arr,txt,oEle){
		var _html1='<li class="tag jp_A">搜索结果</li>';
		var _html2='<li class="tag jp_A">搜索结果</li>';
		var _html3='<li class="tag jp_A">搜索结果</li>';
		var _html4='<li class="tag jp_A">搜索结果</li>';
        var a={"jp":"","qp":"","hp":""};
        var b={"jp":"","qp":"","hp":""};
        // 获取简拼
        b.fw=Pinyin.GetQP(txt)[0];
        b.jp=Pinyin.GetJP(txt);
        // 全拼
        b.qp=Pinyin.GetQP(txt);
        // 混拼
        b.hp=Pinyin.GetHP(txt);
        for(var i=0,len=arr.length;i<len;i++){
        	a.fw=Pinyin.GetQP(arr[i]["name"])[0];
            a.jp=Pinyin.GetJP(arr[i]["name"]);
            a.qp=Pinyin.GetQP(arr[i]["name"]);
            a.hp=Pinyin.GetHP(arr[i]["name"]);
            if(a.fw==b.fw){
            	// 首字母匹配
            	if(a.qp==b.qp){
                    // 匹配
                    _html1+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html("");
                    oEle.html(_html1);
                    
                    return false;
                }else if(a.jp==b.jp){
                    _html2+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html2);
                    
                    return false;
                }
                else if(a.hp==b.hp){
                    _html3+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html3);
                    
                    return false;
                }else{
                	_html4+='<li class="opt js_'+Pinyin.GetJP(arr[i]["name"])[0].toUpperCase()+'" data-id="'+arr[i]["id"]+'"><span>'+arr[i]["name"]+'</span></li>';
                    oEle.html(_html4);
                    
                }
            }
            
        }
        if(oEle.children("li").length<1){
			$(".city_list").siblings(".n_list").children(".at2").show().siblings().hide();
			$(".city_list").hide().siblings(".n_list").show();
		}else{
			oEle.show().siblings().hide();
		}
		myScroll2.refresh();
	}

	//出发地定位
	this.local=function(){
		if($m.is_pos){
			console.log("已经选择城市");
		}else{
			var geolocation=new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus()==BMAP_STATUS_SUCCESS){
					var mk=new BMap.Marker(r.point);
					var theurl="http://api.map.baidu.com/geocoder/v2/?ak=5ZmIO6bXbDtdllzdMZwfXmFm&location="+r.point.lat+","+r.point.lng+"&output=json&pois=0";
					 $.ajax({type:"POST",url:theurl,dataType:'jsonp',
						success: function(response){ 
							var res=response.result;
							var ac=res.addressComponent;
							if(!$m.is_pos){
								$(".js_pos_spn").text(pcformat(ac.city));
								var id="";
								$(".city_list").children(".opt").each(function(i){
									if(pcformat(ac.province)==pcformat($(this).children("span").text()) || pcformat(ac.city)==pcformat($(this).children("span").text())){
										// 有
										id=$(this).attr("data-id")?$(this).attr("data-id"):"";
										$(".js_pos_spn").attr("data-id",id);
										return false;
									}
								});
							}
							$(".city_list").prepend('<li class="opt" data-id="'+id+'"><span>'+pcformat(ac.city)+'</span><div class="n_pos_div"><img src="'+$m.img_url+'icon29.png" alt="定位"><span>当前定位</span></div></li>');

						}
					}); 
				}     
			},{enableHighAccuracy:true});
		}
	}
}
//格式化省市自治区
function pcformat(txt){
	return txt.replace("省","").replace("市","").replace("维吾尔族自治区","").replace("特别行政区","").replace("自治区","");
}
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
// 数组去重
Array.prototype.unique2 = function(){
	var n = {},r=[]; //n为hash表，r为临时数组
	for(var i = 0; i < this.length; i++) //遍历当前数组
	{
		if (!n[this[i]]) //如果hash表中没有当前项
		{
			n[this[i]] = true; //存入hash表
			r.push(this[i]); //把当前数组的当前项push到临时数组里面
		}
	}
	return r;
}
// 数据去重
function save_search(arr,type){
	var return_arr=[];
	var arr1=[],arr2=[],arr3=[];
	for(var i=0,len=arr.length;i<len;i++){
		var tar_list=arr[i]["list"];
		for(var j=0,len1=tar_list.length;j<len1;j++){
			var a=tar_list[j].split("@@");
			arr1.push(a[0]);
			arr2.push(a[1]);
			if(type==1){
				arr3.push(a[2]);
			}
		}
	}
	// 去重
	arr1=arr1.unique2();
	arr2=arr2.unique2();
	if(type==1){
		arr3=arr3.unique2();
	}
	for(var m=0,len2=arr1.length;m<len2;m++){
		if(type==1){
			return_arr.push({
				"id":arr1[m],
				"name":arr2[m],
				"src":arr3[m]
			})
		}else{
			return_arr.push({
				"id":arr1[m],
				"name":arr2[m],
			})
		}
	}
	return return_arr;
}
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