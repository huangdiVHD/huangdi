#HTML基础
####2019.7.23-2019.7.26
1. html:超文本标记语言
2. head:给浏览器识别用,辅助浏览页面(不会再浏览器中显示)
3. meta:设置网页的元数据
4. title:设置页面的标题,在浏览器头部tab中显示
5. body:设置网页的主体,网页的所有内容都在body中
6. h1-h6:标题标签,逐级变小
7. br换行
8: hr:水平线换行
9. 路径:
- 相对路径:同一级目录,直接引用(常用)
- 绝对路径:将路径信息完整的填入(不推荐)

10. a:超链接
- href:跳转地址, {电子邮件: href:"mailto:邮件地址"(默认打开电脑电子邮件客户端)}
- target:self/blank 当前页面跳转/新的页面跳转
 - alt:不会再图片中显示,会在图片无法显示时进行提示(提示内容为alt值)
 - 在页面某处设置id,可以使用a标签到达设置的位置即一键到底or一键到顶的实现
 

11. 图片使用关系(png,jpg)
 - 效果一致:使用体积小的
- 效果不一致:使用效果好的

12. 列表
- ul:无序列表,list-style:none(清除默认图标)
- ol:有序列表,dl,dt,dd:自定义列表

13. 字体样式:
- strong:加粗,
- em:斜体,
- ins:下划线,
- del:删除线,
- suo:上标,
- sub:下标

14. 转以符:
- -&nbsp:空格
- &lt:小于号
- &gt:大于号

15. 表单:input type:
- text:单行文本框
- textarea:多行文本输入框
- password:密码输入框
- radiao:单选框
- checkbox:多选框
- option:下拉框
- submit 提交按钮
  表单属性:
  - value:表单内容
  - name:表单名称
  -readonly:只读属性,内容不可更改
  - disabled:禁用表单的值,在提交会被舍弃
16. 选择器
- 标签选择器(列入p)
- id选择器:*
- class选择器:.
17. 在样式冲突时必定会有一个样式生效
18. 权重
- 行内样式(1000)>id选择器(100)>class选择器(10)>标签选择呢器(1)>通配符/继承属性(0)
- 选择器选择时,就近使用,权重高的优先使用
19. 字体缩写:font:ltalic bolder 25px/2 "黑体";
   字体: 倾斜 加粗 25像素大/2行高 黑体
20. 标签表现形式: display(修改元素的性质):
- black:设为块元素 宽高有效,自动换行(跑,div,劜...)
- inline:设为行内元素 宽高无效,不自动换行(span,a...)
- inline-black:设为行内块元素  宽高有效,同行不会自动换行(img,button,input...)

21. span:主要用来设置字体的样式(无任何语意)
22. div:块元素,主要用来设置页面的布局
23. p:不可以包含其他元素块
24. 样式继承:背景相关的不会被继承
25. 在页面布局时多使用浮动(块元素容易造成不对齐,但易于对页面进行垂直分割)
- float:left/right(左/右浮动)
26. 先简写再单写(内外边距边框,不然容易造成覆盖)
27. 盒子
- margin:遵循上右下左的顺时针顺序(外边距)
auto:一般只给水平方向的margin使用
- padding:影响盒子所占空间的大小(内边距)
28. (补充)对于相邻的兄弟元素,垂直外边距会取最值,而不是相加.
发生重叠需要两元素垂直且相邻(父子情况)
对于一个页面而言,去除margin或padding是必要的,因为有些元素会有默认值
对于水平方向的边距会进行求和而不是重叠(内联元素).

29. 隐藏:
- visibity:hidden 隐藏元素,元素小时候依旧在原地占位
- display:none  隐藏元素实际上将元素剔除,使元素没有占位
30. overflow:hidden  隐藏超出盒子的内容(解决高度坍塌)
31. 定位 position
- 相对定位:relative   相当于自己对自己的移动,即原本位置A移动会把自身当做参照物,它不会改变元素的特性,并且在不设定的情况下不会继承元素的宽度,他不会覆盖文本流中的元素

- 绝对定位:absolate   他是相对于窗口或者有relative属性的元素为参照物,进行定位,它会以"优先靠近,优先使用"为原则(relative)  子绝父相

- 固定定位 fixed  类似网站中的联系电话(IT培训机构的那种)是以整个HTML文档为参照物   
( 关于固定定位:如果要将一个元素固定到一个页面最左或最右,可以设置 top/buttom 50%   left/right  50%.  但如果只是将元素固定到视口中心需要对元素左右边距进行延长:延长距离=版心距离+元素离页面的边缘距离)
- 粘性定位: sticky  是相对定位和固定定位的混合,以固定的阀值为界限,在固定定位和相对定位间切换(阀值自己设置)

- z-indes  可以将定位的元素优先级进行变化,0-9逐级变大,默认0
32. 行距: line-height
33. 在页面布局时以标准的方式为优先,其次浮动,最后定位,页面是一个个元素累计搭建的,在布局时不要急,一步步来
44. 页面布局通常准行左浮动右定位
35. 对于代码极多情况需要仔细对比
36. 表格
	- 在网页中可以通过表格来表示一些格式化的数据
	- 表格相关的标签
		- <table> 用来创建一个表格
		- <tr> 表示表格中的一行
		- <th> 表示表头中的单元格
		- <td> 表示表格中的单元格
			- 属性：
				colspan 横向的合并单元格
				rowspan 纵向的合并单元格
		- 例子：
			<table>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
			
		- 长表格
			- <thead> 表格的头部
			- <tbody> 表格的主体
				- 注意：如果表格中没有写thead tbody tfoot，浏览器会自动向table中添加一个tbody
					并且将所有的tr都放到tbody中，tr是tbody的子元素，不是table的子元素
			- <tfoot> 表格的底部
			
37. 表单
	- 表单可以将用户的信息提交到服务器中
	- <form>
		- 用来创建一个表单
		- 属性：
			action:需要一个服务器地址，提交表单时表单中的内容将会被提交到该地址
	- 表单项
		- <input />
			- 它可以根据不同的type属性值，生成不同的表单项
			- type="text" 文本框 <input type="text" name="" />
			- type="password" 密码框 <input type="password" name="" />
			- type="radio" 单选按钮 <input type="radio" name="" value="" checked="checked" />
			- type="checkbox" 多选框 <input type="checkbox" name="" value="" checked="checked" />
			- type="submit"  提交按钮 <input type="submit" value="按钮上的文字" />
			- type="reset"  重置按钮 <input type="reset" value="按钮上的文字" />
			- type="button" 普通按钮 <input type="button" value="按钮上的文字" /> 
			
		- <select>
			- 下拉列表
			- <select name="">
					<option value="" selected="selected"></option>
					<option value=""> </option>
					<option value=""></option>
				</select>
		
		- <button>
			- 按钮功能input那几个按钮一样，但是它们要灵活一些
				<button type="submit">按钮的文字</button>
				<button type="reset">按钮的文字</button>
				<button type="button">按钮的文字</button>
				
