//淡入淡出轮播
var index = 0;//下标
var timer = null;
clearInterval(timer);
timer = setInterval(function(){
	index++;
	if(index > 7){
		index = 0;
	}
	//$(".tab_btn .btn").eq(index).addClass("active").siblings().removeClass("active");//siblings兄弟姐妹	
	$(".part1 .clearfix>li:nth-child(2) a").eq(index).fadeIn().siblings().fadeOut();
},5000);

//定时器
clearInterval(timer);
timer = setInterval(function(){
	var oDate = new Date();
	var reg = /(\d)(\d):(\d)(\d):(\d)(\d)/;
	var oArray = reg.exec(oDate);/*reg.exec(string)*/
	var $timeArray = $(".count-down .hour");
		$.each($timeArray, function(index, value){
			switch(index){
				case 0:value.innerHTML = oArray[index+1]+oArray[index+2];
					break;
				case 1:value.innerHTML = oArray[index+2]+oArray[index+3];
					break;
				case 2:value.innerHTML = oArray[index+3]+oArray[index+4];
					break;
			}
		});
	//console.log(oArray);
},50);

//定时无缝轮播
var oTimer = null;
clearInterval(oTimer);
var prcIndex = index = 0;
oTimer = setInterval(function(){
	index++;
	if(index > 1){
		index = 0;
	}
	//$(".tab_btn .btn").eq(index).addClass("active").siblings().removeClass("active");//siblings兄弟姐妹	
	$(".part2 .single-one~li:last-child a").eq(prcIndex).css({'display': 'none',"left": "0"}).animate({'display': 'block',"left":"-200px"},500);//动画animate
	$(".part2 .single-one~li:last-child a").eq(index).css({'display': 'block',"left": "200px"}).animate({'display': 'none',"left":"0"},500);
	prcIndex = index;
},5000);

//点击事件
$(".search .left div").click(function(){
	alert("查询中...");
});
