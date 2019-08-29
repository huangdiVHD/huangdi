## `Scroll` 家族

> 家族成员: `scrollWidth` , `scrollHeight` , `scrollTop` , `scrollLeft`

#### `scrollWidth` 和 `scrollHeight`

> 检测盒子的宽高  内容高度 + padding。（调用者：节点元素。属性。）
> 盒子内容的宽高。（如果有内容超出了，显示内容的宽/高度）

#### `scrollTop` , `scrollLeft`	可读写的

> 前提: 目标元素有滚动条
> 被浏览器或父类遮挡的头部和左边部分。
> 可以获取或设置一个元素的内容垂直滚动的像素数。element.scrollTop/Left = XXX

** 获取页面卷入高度的浏览器兼容问题： **
各浏览器下 scrollTop 的差异 
IE6/7/8： 
对于没有 doctype 声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop 高度 ； 
对于有 doctype 声明的页面则可以使用 document.documentElement.scrollTop ；
Safari: 
safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ； 
Firefox: 
火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ；


兼容写法：
`var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop`
`var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft`



---------------------------


#### `onscroll` 事件

解释：当元素的滚动条滚动时触发的事件。

`onscroll`事件貌似任何实体元素都可以绑定，这里的实体元素包括DOM元素、window元素、document元素。

用法即：`element.onscroll=function(){};`

**需要注意的是,设置此事件的元素一定要有滚动条**


----------------------------------



#### 关于`window.scroll()`,`window.scrollBy()`,`window.scrollTo()` 不兼容IE

`window.scroll(x,y)`是让window滚动条滚动到那个x,y坐标。//x是水平坐标，y是垂直坐标。

`window.scrollBy(-x,-y)`是让window滚动条相对滚动到某个坐标，- 10即相对向左/向上滚动10像素。

`window.scrollTo(x,y)`和`window.scroll(x,y)`一样。

`element.scrollIntoView(boolean)` 让元素贴顶或者贴底，相对于可视区域



