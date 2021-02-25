//css3

//设置3D场景布局
/*
    1.设置场景景深
    2.设置场景风格3D/2D
*/

//拖拽

// var imgs = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 'images/11.jpg'];
var imgs = ['https://b195.photo.store.qq.com/psb?/V14UUsYA1yIAkv/7z2Ehienvbv269.IvJJOtsTtRwqyASC.pKlnCX2Wxlw!/c/dMMAAAAAAAAA&bo=OAQqAzgEKgMRECc!&rf=mood_app', 
'https://b194.photo.store.qq.com/psb?/V14UUsYA1yIAkv/XZ7idKMqwJejpiQihIIGUInv2RGZp1PitCOrm7tOLbs!/c/dMIAAAAAAAAA&bo=0ALAA9ACwAMRECc!&rf=mood_app', 
'https://photogz.photo.store.qq.com/psc?/V14UUsYA1yIAkv/ruAMsa53pVQWN7FLK88i5vha0zJifeGUqU2r9A9PmAKURJPRzoyg7N2LtKxdZ5tJFVzuZg4jvVdDN5jXTJyBBqcCchGSJrXgUEliKUHCq1Y!/b&bo=OAQ4BDgEOAQRECc!&rf=mood_app', 
'https://photogz.photo.store.qq.com/psc?/V14UUsYA1yIAkv/ruAMsa53pVQWN7FLK88i5vha0zJifeGUqU2r9A9PmAI74j7JiBTZpnL4T6iOfaJvbo8bN88WldZjfYrNDiWjWQWydMSo62UjqWRWZkpTUyQ!/b&bo=OAQ3BDgENwQRECc!&rf=mood_app', 
'https://b310.photo.store.qq.com/psb?/V14UUsYA1yIAkv/s3.QUt3GSnLrGcuJFCCDodPOCZlZEk3QjjmIWGmM69I!/c/dDYBAAAAAAAA&bo=KgM4BCoDOAQRECc!&rf=mood_app', 
'https://b306.photo.store.qq.com/psb?/V14UUsYA1yIAkv/yKTfq3*IuI0PVnS0cEsNw53y9CSlVvuUGT1ti8.aLc8!/b/dDIBAAAAAAAA&bo=VQhABlUIQAYRMAc!&rf=viewer_311', 
'http://a3.qpic.cn/psb?/V14UUsYA1yIAkv/CnD9KCMw9HWHhQBHVUI1G9HGTp0aXTu.FORw3cuhTT0!/b/dCIBAAAAAAAA&ek=1&kp=1&pt=0&bo=QAZVCEAGVQgRMAc!&tl=1&vuin=2812074853&tm=1604055600&sce=50-1-1&rf=viewer_311', 
'https://b290.photo.store.qq.com/psb?/V14UUsYA1yIAkv/dqbbiCPTjvHY145xzdzhJcMoV8nYOz.HIO5iD6.0LEA!/b/dCIBAAAAAAAA&bo=QAZVCEAGVQgRMAc!&rf=viewer_311'];

var initDeg = 360/imgs.length; //360度

var rotateXVal = -20;
var rotateYVal = 0;

for(var item in imgs) {
    $('#wrap').append('<img width=133 height=200 src="'+ imgs[item] +'" >');
}

$(document).ready(function () {
    
    $('img').bind('dragstart', function () {
        return false;
    });

    for(var item in imgs) {
        $('#wrap img:eq('+ item +')').css({transform: 'rotateY('+ initDeg * item +'deg) translateZ(300px)', transition: '1s '+ (imgs.length - item) * 0.1 +'s'});    
    }

    $(document).mousedown(function (e) {

        var startX = e.clientX;
        var startY = e.clientY;
        $(this).bind('mousemove', function (e) {
            var newX = e.clientX;
            var newY = e.clientY;

            rotateYVal += (newX - startX) * 0.2;
            rotateXVal -= (newY - startY) * 0.1;
            startX = newX;
            startY = newY;
            
            $('#wrap').css({transform: 'rotateX('+ rotateXVal +'deg) rotateY('+ rotateYVal +'deg)'});
        });
        $(this).mouseup(function () {
            $(this).unbind('mousemove');
        });
    });
});