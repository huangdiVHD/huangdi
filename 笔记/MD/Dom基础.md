#Dom基础
####2019.8.13
1. Dom: Document object model,为文本提供了结构化表示,文档对象型,操作网页上的元素的API,如让盒子变宽,图像轮播,计时器等
   - dom常用事件
<table>
	<tr>
		<th>属性</th>
        <th>当一下情况发生时,出现此事件</th>
		...
	</tr>
	<tr>
		<td>onabort</td>
        <td>图像加载被中断</td>
		...
	</tr>
    <tr>
		<td>onblur</td>
        <td>元素失去焦点</td>
		...
	</tr>
    <tr>
		<td>onchange</td>
        <td>用户改变域的内容</td>
		...
	</tr>
    <tr>
<td>onclick</td>
<td>鼠标点击某个对象</td>
...
</tr>
<tr>
<td>ondblclick</td>
<td>鼠标双击某个对象</td>
...
</tr>
<tr>
<td>onerror</td>
<td>当加载文档或图像时发生某个错误</td>
...
</tr>
<tr>
<td>onfocus</td>
<td>元素获得焦点</td>
...
</tr>
<tr>
<td>onkeydown</td>
<td>某个键盘的键被按下</td>
...
</tr>
	<tr>
<td>onkeypress</td>
<td>某个键盘的键被按下或按住</td>
...
</tr>
<tr>
<td>onkeyup</td>
<td>某个键盘的键被松开</td>
...
</tr>
<tr>
<td>onload</td>
<td>某个页面或图像被完成加载</td>
...
</tr>
    <tr>
		<td>onmousedown</td>
        <td>某个鼠标按键被按下</td>
		...
	</tr>
    <tr>
		<td>onmouseout</td>
        <td>鼠标从某元素移开</td>
		...
	</tr>
    <tr>
		<td>onmouseover</td>
        <td>鼠标被移到某元素之上</td>
		...
	</tr>
    <tr>
		<td>onmouseup</td>
        <td>某个鼠标按键被松开</td>
		...
	</tr>
    <tr>
		<td>onreset</td>
        <td>重置按钮被点击</td>
		...
	</tr>
    <tr>
		<td>onresize</td>
        <td>窗口或框架被调整尺寸</td>
		...
	</tr>
    <tr>
		<td>onselect</td>
        <td>文本被选定</td>
		...
	</tr>
    <tr>
		<td>onsubmit</td>
        <td>提交按钮被点击</td>
		...
	</tr>
    <tr>
		<td>onunload</td>
        <td>用户退出页面</td>
		...
	</tr>

</table>

2. 事件的三要素: 事件源,时间,事件驱动(即: 提出的问题,拿出解决的方案名,拿出具体的解决方案)
   
3. 获取事件源
 - 通过ID获得单个标签
 - 通过标签名获得标签数组
 - 通过类名获得标签数组
 - 通过Class获取的是类数组(不是真的数组),它有下标有长度,能用for循环,遍历,但是不具备数组的通常方法(pop,shift,jion等)
4. 在HTML中一切都是借点,整个HTML文档也是一个节点,所有的节点都是Object 
- 文本节点:标签中的文字,
- 属性节点:标签的属性
- 元素节点:HTML标签
5. 创建节点
- 新的标签(元素节点) = document.createElement('标签名');
- 插入节点:重复插入同一个节点,它的剪切效果只保留一个
  1.)父节点(插入):appendchid(新的子节点),父节点最后插入一个新的子节点
  2.)父节点.inserBefore(新的子节点,作为参考的子节点),在参考节点前插入一个新的节点,如果参考的节点为null,将在父元素最后插入一个子节点
  3.)在父节点前+document(删除,插入时)
- 删除节点:
  1.)父节点.removrechild(子节点); 用父节点删除子节点,必须指定删除的那个子节点
  2.)删除自己:nodel.parentNode.removrchild(npdel);
- 复制节点:
  1.)要复制的节点.cloneNode();不带参数/带参数 false：只复制节点本身，不复制子节点。
  2.)要复制的节点.cloneNode(true);带参数 true：既复制节点本身，也复制其所有的子节点。
6. 节点的属性
- 获取节点属性
1.)元素节点.属性;/ 元素节点[属性];
2.) 元素节点.getAttribute(属性名称);
- 设置节点的属性
  1.) 元素节点.属性名 = 属性值
  2.)元素节点.setAttribute(属性名, 新的属性值);
- 删除节点
  1.) 元素节点.removreAttribute(属性名);
 - <strong>获取节点的属性值和设置节点的属性值，都有两种方式，但这两种方式是有区别的:</strong>
1.)方式一的元素节点.属性和元素节点[属性]:绑定的属性值不会出现在标签上。
2.)方式二的get/set/removeAttribut: 绑定的属性值会出现在标签上。

7. 类名操作(H5新加操作)
- 追加类名:元素.ClassList.add('类名');可以追加多个类,用逗号隔开
- 删除类名:元素.ClassList.remove('类名');
- 判断类名是否存在(true/false):元素.ClassList.contains('类名');
- 判断类名是否存在,有则删除,无则添加:元素.ClassList.toggle('类名');
- 获取第[i]个类的名字:元素.ClassList.item[i];(假使i=1,则获取下标为1的类名)
8. 表单内容操作
- 元素[i].value = "新的属性值";
- 内容操作
  1.)innerText:获取标签内部所有文本,对于双臂和标签里的内容,不识别标签,直接把内容当做文本
  2.)innerHTML:获取元素内部所有标签,对于双臂和标签的内容,当成新的标签(常用来动态生成)
  3.)动态生成实例
  ```html
    var imgarr = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg'];
	var ul = document.getElementsByTagName('ul')[0];
  initImg(ul,imgarr);
  function initImg (el,arr){
				var str ='';
				for(var i = 0; i<arr.length; i++){
					str+='<li style="background-image: url(img/' + arr[i] +')"></li>';
				}
				el.innerHTML = str;
			}
  ```
9.定时器
- setTimeout();延时执行一次
- setInterval();循环执行多次
- 关闭循环计时:setTimeout(c=>{
  clearTimeout(变量);},时间),先清除:setTimeout(c)再清除  clearTimeout(),C为循环计时的名称变量
 - clearTimeout();清除计时器
10. 对于立即执行函数,内部的this定义不明确,最好在函数外声明一个新的类(同级别)来代表i,然后函数内部才能使用,对于JQ里面则是声明一个新的变量