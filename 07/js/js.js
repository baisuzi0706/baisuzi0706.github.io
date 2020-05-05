var items = document.getElementsByClassName('item');
//轮播图片

var index = 0;
//定义index第一张图，0。
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
}
//每次需要删掉active，保证不会重复

var goIndex = function () {
    clearActive();
    items[index].className = 'item active'
    //index包含多张图片，是一个数组，用方框表示
}
//用于给元素添加classname

var goNext = function () {
    if (index < 2) {
        index ++;
    }else
    index = 0;
    goIndex();
}

var goPre = function () {
    if(index == 0){
        index = 2 ;
    }else{
        index --;
    }
    goIndex();
}
//程序脚本

var goPreBtn = document.getElementById('goPre');
//左侧按钮
var goNextBtn = document.getElementById('goNext');
//右侧按钮
goNextBtn.addEventListener('click',function(){
     goNext();
 });
 goPreBtn.addEventListener('click',function(){
    goPre();
});