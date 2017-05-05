/*
	#author		lut000
	#date 		2017/04/21
*/
$(function(){
    console.log("ok");
    // select
    $.ajax({
        url:"http://120.26.112.74:8080/GetSelectOption.ashx",
        type:"get",
        success:setSelectorDom
    });
    // 列表
    $.ajax({
        url:"http://120.26.112.74:8080/GetCrossTableInfo.ashx",
        type:"get",
        success:function(data){
            console.log(data);
        }
    })
    // zong
    $.ajax({
        url:"http://120.26.112.74:8080/GetCrossTableInfo.ashx",
        type:"get",
        success:function(data){
            console.log(data);
        }
    });


    // 生成select
    function  setSelectorDom(data){
        if(data){
            var ndata=JSON.parse(data) || {};
            // var PositionName="",
            for(var key in ndata){

            }
        }
    };
});