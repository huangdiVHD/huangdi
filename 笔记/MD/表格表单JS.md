1.表格
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
			
2.表单
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
				
3.JavaScript
	- JavaScript负责页面中的的行为。
	- 它是一门运行在浏览器端的脚本语言。
	- JS的编写的位置
		1.可以编写到标签的指定属性中
			<button onclick="alert('hello');">我是按钮</button>
			<a href="javascript:alert('aaa');">超链接</a>
			
		2.可以编写到script标签中   *****
			<script type="text/javascript">
				//编写js代码
			</script>
			
		3.可以将代码编写到外部的js文件中，然后通过标签将其引入 *****
			<script type="text/javascript" src="文件路径"></script>
			
	- 输出语句
		- alert("要输出的内容");
			- 该语句会在浏览器窗口中弹出一个警告框
			
		- document.write("要输出的内容");
			- 该内容将会被写到body标签中，并在页面中显示
			
		- console.log("要输出的内容");
			- 该内容会被写到开发者工具的控制台中
			
	- 基本的语法
		- 注释
			- 单行注释
				//注释内容
			- 多行注释
				/*
					注释内容
				*/
				
		- JS严格区分大小写	
		- JS中每条语句以分号(;)结尾
		- JS中会自动忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化。
		
	- 字面量和变量
		- 字面量
			- 字面量实际上就是一些固定的值，比如 1 2 3 4 true false null NaN "hello"
				字面量都是不可以改变的。
			- 由于字面量不是很方便使用，所以在JS中很少直接使用字面量
		
		- 变量
			- 变量可以用来保存字面量，并且可以保存任意的字面量
			- 一般都是通过变量来使用字面量，而不直接使用字面量，而且也可以通过变量来对字面量进行一个描述
			- 声明变量
				- 使用var关键字来声明一个变量
				var a;
				var b;
				var c;
				
			- 为变量赋值
				a = 1;
				b = 2;
				c = 3;
				
			- 声明和赋值同时进行 *****
				var d = 456;
				var e = 789;
				
	- 标识符
		- 在JS中所有的可以自主命名的内容，都可以认为是一个标识符，
			是标识符就应该遵守标识符的规范。
		- 比如：变量名、函数名、属性名
		- 规范：
			1.标识符中可以含有字母、数字、_、$
			2.标识符不能以数字开头
			3.标识符不能是JS中的关键字和保留字
			4.标识符一般采用驼峰命名法
				xxxYyyZzz