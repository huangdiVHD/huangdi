// 全局jQuery函数扩展方法
// 	$.pluginName = function() {};

// jQuery对象扩展方法   fn=prototype  原型  面向对象编程的 再说
// 	$.fn. pluginName = function() {};


$.changeColor = function($el){
    $el.css('color','red');
}

// 改变背景色
$.fn.changeBgColor = function(){
    this[0].style.backgroundColor = 'green';
}