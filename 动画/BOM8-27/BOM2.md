## 事件对象  Event

`Event` 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态

获得event对象兼容性写法 `event || window.event`

`event.target` 触发事件的目标	获得target兼容型写法  `event.target || event.srcElement`
`event.currentTarget`  绑定事件的目标

`e.pageX/Y`		获取鼠标点击的相对于页面的位置
`e.clientX/Y`	获取鼠标点击的相对于可视区域的位置
`e.screenX/Y`	获取鼠标点击的相对于屏幕的位置
`e.offsetX/Y`	表示鼠标指针位置相对于触发事件的对象的位置
获取鼠标相对于绑定事件的元素的位置 `e.pageX/Y - 绑定事件的元素距离页面的左/上边距(offsetLeft/Top)`

`event.type`	事件的类型

`event.key`  键盘按键码

`event.button` 鼠标点击的按键(只认识三个键) 可在 `onmousedown` 事件中测试
+ === 0 您点击了鼠标左键
+ === 1 您点击了鼠标中键
+ === 2 您点击了鼠标右键

--------------------------

## 事件委托

> 通过监听一个父元素，来给不同的子元素绑定事件，减少监听次数，从而提升速度。
> 由于事件的冒泡机制,可以使用事件委托的方式给元素添加事件,多用于ul监听事件更改li的情景

## 阻止冒泡

> `event.stopPropagation();`		存在兼容问题	(面试题)
> IE <= 10 专用 `event.cancelBubble = true`
> 兼容写法 `event.stopPropagation?event.stopPropagation():event.cancelBubble = true;`

> 阻止默认事件: event.preventDefault() || event.returnValue = false


常犯错误:
1. if条件句里面只写 1个 等号
2. 基础语法
3. 忘记添加 px
4. 单词拼写
5. 变量没有声明