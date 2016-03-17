$(function(){
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
			mysel.init();
			stopBubble(event);
		}else{
			mysel.init2($m.s_arr2,txt,$(".search_list").eq(1));
		}
	}).bind("input propertychange",function(event){
		var txt=$(this).val();
		if(txt==""){
			mysel.init();
		}else{
			mysel.init2($m.s_arr2,txt,$(".search_list").eq(1));
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