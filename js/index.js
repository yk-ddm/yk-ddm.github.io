//滚动条事件
/*var scrollPlay = null;
clearInterval(scrollPlay);
var oDownLoad = $(".download-app")[0],
	oScrollTop = $(document).scrollTop(),
	oContentWrap = $(".content-wrap").offset().top;
	scrollPlay = setInterval(function(){
		if(oContentWrap-oScrollTop >= 157){
			oDownLoad.style.cssText = "position: fixed;top: 157px;right: 40px;width: 100px;";
			//clearInterval(scrollPlay);
			return;
		}else {
			oDownLoad.style.cssText = "position: absolute;top: 0px;right: 40px;width: 100px;";
			//clearInterval(scrollPlay);
			return;
		}
	},1000);
if(c){if(){c.style.position="absolute";if($(".mod_topbanner_wrap").is(":hidden")){}else{c.style.top="0px"}}else{c.style.position="fixed";c.style.top="156px"}if(d>2300){$(".h_zd").fadeIn()}else{$(".h_zd").fadeOut(
//$('#content-page .content-wrap').offset().top;
console.log(oScrollTop);*/

//淡入淡出轮播
var index = 0;//下标
function timing(){
	clearInterval(timer);
	timer = setInterval(function(){
		index++;
		if(index > 3){
			index = 0;
		}
		//$(".tab_btn .btn").eq(index).addClass("active").siblings().removeClass("active");//siblings兄弟姐妹	
		$("header .ban-list").eq(index).fadeIn().siblings().fadeOut();
	},5000);	
}
timing();

//点击轮播
var timer = null;
var $tabList = $('.tab-btn .tab-list');
$tabList.click(function(){
	clearInterval(timer);
	var $tab = $(this);
	index = $tab.index();
	$("header .ban-list").eq(index).fadeIn().siblings().fadeOut();
	timing();
});

//定时器
clearInterval(timer);
timer = setInterval(function(){
	var oDate = new Date();
	var reg = /(\d)(\d):(\d)(\d):(\d)(\d)/;
	var oArray = reg.exec(oDate);/*reg.exec(string)*/
	var $timeArray = $(".count-time .clock-time");
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

//点击效果
$('.nav .cart ').click(function(){
	alert('恭喜您，获得清空购物车的机会！！！');
});