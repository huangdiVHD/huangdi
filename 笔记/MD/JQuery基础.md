#JQuery基础
####2019.8.15
####1.JQuery:一个快速简介的JS框架,它封装 JavaScript 常用的功能代码，提供一种简便的 JavaScript 设计模式，优化 HTML 文档操作、事件处理、动画设计和 Ajax 交互。
- 三大版本
  1.)1.x  使用最广泛,若没有特殊要求,开发项目多使用它
  2.)2.x 使用最少
  3.)3.x 最新版本,只支持最新的浏览器
- JQ要先引用才能使用,它的引用顺序在第一顺位
- JQ与Dom方法相差不大,很多Dom去掉on就可以在JQ中使用
- JQ→Dom:var = a1;var = $a;  $a[0]
- Dom→JQ: var = a1;var = $a;  $(a1)
- JQ的基本选择器与css选择其一摸一样,$('类名').css();
- jQuery 的基本选择器
  <table>
      <tr>
          <th>符号</th>
          ```
          <th>说明</th>
          ```
          <th>用法</th>
          ```
      </tr>
        <tr>
          <td>$('#demo')</td>
          ```
          <td>选择 id 为 demo 的元素</td>
          ```
          <td>$('#demo').css('color','red')</td>
          ```
      </tr>
       <tr>
          <td>$('.demo')</td>
          ```
          <td>选择class为demo的所有元素</td>
          ```
          <td>$('.demo').css('color','red')</td>
          ```
      </tr>
         <tr>
          <td>$('div')</td>
          ```
          <td>选择所有 div 标签元素</td>
          ```
          <td>$('div').css('color','red')</td>
          ```
      </tr>
          <tr>
          <td>$('*')</td>
          ```
          <td>选择所有标签元素</td>
          ```
          <td>$('*').css('color','red')</td>
          ```
      </tr>
          <tr>
          <td>$('.arr.arr-left')</td>
          ```
          <td>	选择同时具有 arr 和 arr-left 类名的元素	</td>
          ```
          <td>$('.arr.arr-left').css('color','red')</td>
          ```
      </tr>
  </table>
- jQuery 的其它选择器
<table>
  <tr>
<th>符号</th>
<th >说明</th>
<th >用法</th>
</tr>
<tr>
<td>空格</td>
<td >后代选择器</td>
<td >$('div span').css('color','red')</td>
</tr>
<tr>
<td>&gt;</td>
<td >子代选择器</td>
<td>$('div&gt;span').css('color','red')</td>
</tr>
<tr>
<td>+</td>
<td >紧邻选择器</td>
<td >$('div+p').css('color','red')</td>
</tr>
<tr>
<td>~</td>
<td >兄弟选择器</td>
<td >$('div~p').css('color','red')</td>
</tr>
</table>

- 属性选择器
<table>
<tr>
<th>符号</th>
<th >说明</th>
<th >用法</th>
</tr>
<tr>
<td>$('a[href]')</td>
<td >具有 href 属性的 a 标签</td>
<td >$('a[href]').css('color','red')</td>
</tr>
<tr>
<td>$('a[href='baidu']')</td>
<td >href 属性为'baidu'的 a 标签</td>
<td >$('a[href='baidu']').css('color','red')</td>
</tr>
<tr>
<td>$('a[href!='baidu']')</td>
<td >href 属性不为'baidu'的 a 标签,包括不具有 href 属性的 a 标签</td>
<td >$('a[href!='baidu']').css('color','red')</td>
</tr>
<tr>
<td>$('a[href^='www']')</td>
<td >href 属性以'www'开头的 a 标签</td>
<td >$('a[href^='www']').css('color','red')</td>
</tr>
<tr>
<td>$('a[href$='cn']')</td>
<td ">href 属性以'cn'结尾的 a 标签</td>
<td >$('a[href$='cn']').css('color','red')</td>
</tr>
<tr>
<td>$('a[href*='i']')</td>
<td >href 属性包含'i'的 a 标签</td>
<td >$('a[href*='i']').css('color','red')</td>
</tr>
<tr>
<td>$('a[href][title='内容']')</td>
<td >具有 href 属性且 title 属性为'内容'的 a 标签</td>
<td >$('a[href][title='内容']').css('color','red')</td>
</tr>
</table>

- 基本筛选选择器
<table>
<thead>
<tr>
<th>符号</th>
<th >说明(index 从 0 开始)</th>
<th >用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>:eq(index)</td>
<td >匹配一个给定索引值的元素</td>
<td >$('li:eq(1)').css('color','red')</td>
</tr>
<tr>
<td>:gt(index)</td>
<td >匹配所有大于给定索引值的元素</td>
<td >$('li:gt(1)').css('color','red')</td>
</tr>
<tr>
<td>:lt(index)</td>
<td >匹配所有小于给定索引值的元素</td>
<td >$('li:lt(2)').css('color','red')</td>
</tr>
<tr>
<td>:odd</td>
<td >匹配所有索引值为奇数的元素</td>
<td >$('li:odd').css('color','red')</td>
</tr>
<tr>
<td>:even</td>
<td >匹配所有索引值为偶数的元素</td>
<td >$('li:odd').css('color','red')</td>
</tr>
<tr>
<td>:first</td>
<td >获取匹配的第一个元素</td>
<td >$('li:first').css('color','red')</td>
</tr>
<tr>
<td>:last</td>
<td >获取匹配的最后一个元素</td>
<td >$('li:last').css('color','red')</td>
</tr>
</table>

- 其他选择器
  <table>
<tr>
<th>符号</th>
<th >说明(index 从 0 开始)</th>
<th >用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>:empty</td>
<td >匹配所有不包含子元素或者文本的空元素</td>
<td >$('li:empty')</td>
</tr>
<tr>
<td>:contains(text)</td>
<td>匹配包含给定文本的元素</td>
<td >$('li:contains('john')')</td>
</tr>
</table>

#2. 类名操作
- addClass(); 向被选元素添加一个或多个类
- removeClass(); 从被选元素删除一个或多个类
- toggleClass(); 对被选元素进行添加/删除类的切换操作
- hasClass(); 判断被选元素是否存在类
#3. 筛选过滤/查找
- eq(index);
- find();
- <strong>siblings(); 除了自己以外的所有兄弟节点,常与addClass()向元素添加1或多个类,removeClass();向元素删除1或多个类使用</strong>
- children(); 所有孩子节点
- next(); 下一个兄弟节点
- nextAll(); 后面的所有兄弟节点
- nextUntil();后面的兄弟节点,直到...
- prev();上一个兄弟节点
- prevAll();
- prevUntil();
- parent(); 父节点
- parents(); 所有父节点
- parentsUntil();
#4.属性操作 .attr()
- 获取属性   $('img').attr('src')  获取 img 的 src 属性值
- 设置属性   $('img').attr({src:'text.jpg',alt:'sorry'})
- removeAttr() $('img').removeAttr('src') 删除 src 属性
#5.html 代码/文本/值
- 可以取值,设值
- html()   $('p').html()   $("p").html('html 代码')
- text()   $('p').text()   $('p').text('内容')
- value()   $('input').value()   $('input').value('姓名')
- prop()   $('input').prop('checked')   $('input').prop('checked',false)
#6.动画
- 隐藏(hide)/显示动画(show)
- 滑入滑出动画
- 淡入淡出动画
-<strong>自定义动画
例:$(selector).animate(styles,speed,ease,callback)
第一个参数表示：要执行动画的 CSS 属性（必选）
第二个参数表示：执行动画时长（可选）
第三个参数表示：动画执行完后立即执行的回调函数（可选）
ease:运动函数:swing:先慢后快再慢,linear:线性匀速
</strong>
- 停止动画
stop(); 停止当前动画
stopAll:是否全部停止动画(停止队列中所有动画),默认 false
goToEnd: 是否将停止的动画,停在当前动画的最后一个状态
#7.节点
- append:在被选中元素内部的最后一个子元素/内容后插入
- appendTo:把新的元素追加到选中的元素中
- prepend:在被选元素内部第一个子元素/内容前面插入
- affter:被选元素前作为兄弟元素插入
- 删除节点:html/empty,二者没有区别,remove连自己一起删除
- 复制节点: .clone()复制JQ对象(不复制内容),clone[i]复制JQ对象连里面的下标为i的内容也复制