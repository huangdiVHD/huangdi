# HTML+CSS 基础

## 认识网页

网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及 Flash 等。

![](https://i.loli.net/2019/07/22/5d355b7ec5ff110369.png)

## 常见浏览器介绍

浏览器是网页运行的平台，常用的浏览器有 IE、火狐（Firefox）、谷歌（Chrome）、Safari 和 Opera 等。我们平时称为五大浏览器。

![](https://i.loli.net/2019/07/22/5d355ba724f0984570.png)

```
浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS 引擎。
渲染引擎 它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
JS 引擎 则是解析 Javascript 语言，执行 javascript语言来实现网页的动态效果。
```

## Web 标准

由 W3C 和其他标准化组织制定的一系列标准的集合。主要包括结构（Structure）、表现（Presentation）和行为（Behavior）三个方面。

![](https://i.loli.net/2019/07/22/5d355bc6d9c5e66463.png)

```
结构标准：结构用于对网页元素进行整理和分类，主要指的是HTML。
样式标准：表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS。
行为标准：行为是指网页模型的定义及交互的编写，主要包括DOM和ECMAScript两个部分(JavaScript)。
```

直观感受：

![](https://i.loli.net/2019/07/22/5d355bde8960b34676.png)

## 网页的构成

> 我们可以先来看一段网页源码。[不凡学院官网](http://www.bufanui.com/)

-   结构：指的就是用 `html` 标签描述网页的结构。比如描述标题，段落，表格，表单等。
-   表现：指的就是 `css` 控制网页的样式。比如字体颜色和大小，背景颜色等。
-   行为：指的就是用 `JavaScript` 控制网页的交互行为。比如用户点击时，页面如何响应。

## HTML 介绍

HTML（Hyper Text Markup Language）中文译为“超文本标记语言”，主要是通过 HTML 标签对网页中的文本、图片、声音等内容进行描述。

```html
<strong> 我是加粗的字体 </strong>
```

### HTML 骨架格式

> 日常生活的书信，我们要遵循共同的约定。 同理：HTML 也有自己的语法骨架格式。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
	</head>
	<body></body>
</html>
```

-   html 标签：

作用：网页的根节点。

-   head 标签：

作用：用于存放`title`,`meta`,`style`,`script`,`link`等标签。辅助浏览器解析页面，并不会在页面中展示。

-   title 标签：

作用：让页面拥有一个属于自己的标题。

-   body 标签：

作用：页面的主体部分，用于存放网页要展示的标签 `p`,`h`,`a`,`img`等。

注意：在`<body>`中多个空格或者换行符，会被当做一个空格来处理。

那么，如何编辑代码？

## 编辑工具介绍

![](https://i.loli.net/2019/07/22/5d355c093433158276.png)

在以后的工作中，我们可能会用到不同的编辑工具，每种编辑工具都有各自的优缺点，至于使用哪一个看自己喜好，接下来的学习当中，我们会使用`vscode`编辑代码。

### vscode 基本使用

-   [下载/安装](https://code.visualstudio.com/)
-   设置中文语言环境(https://jingyan.baidu.com/article/7e44095377c9d12fc1e2ef5b.html)
-   扩展插件功能
-   新建文件
    -   顶部菜单栏=>文件=>打开文件夹=>选择自己的项目文件夹
    -   资源管理器中=>'+'=>输入文件名+文件扩展名=>回车保存(会自动将我们新建的文件保存在当前打开的项目文件夹中)
-   生成页面骨架结构 `!`。
-   `vscode`中为我们内置了`Emmet`插件，可以让我们的代码写起来更方便。

## 认识标签

### HTML 标签分类

在 HTML 页面中，带有“< >”符号的元素被称为 HTML 标签，如上面提到的 &lt;html&gt;、&lt;head&gt;、&lt;body&gt;都是 HTML 标签。所谓标签就是放在“< >” 标签符中表示某个功能的编码命令，也称为 HTML 标签或 HTML 元素。

-   双标签

```html
<标签名> 内容 </标签名>
```

该语法中`<标签名>`表示该标签的作用开始，一般称为`开始标签`，`</标签名>` 表示该标签的作用结束，一般称为`结束标签`。和开始标签相比，结束标签只是在前面加了一个关闭符`/`。

标签的内容可以是文本，也可以是其他标签。

```html
<body>
	我是文字
</body>
```

-   单标签

```html
<标签名 />
```

单标签也称空标签，是指用一个标签符号即可完整地描述某个功能的标签。

```html
<br />
```

### HTML 标签关系

标签的相互关系就分为两种：

-   嵌套关系

```html
<head>
	<title> </title>
</head>
```

> 简而言之：父子关系。

-   并列关系

```html
<head></head>
<body></body>
```

> 简而言之：兄弟关系。

> 如果两个标签之间的关系是嵌套关系，子元素最好缩进一个 tab 键的身位。如果是并列关系，最好上下对齐。

### 标签属性

使用 HTML 制作网页时，如果想让 HTML 标签提供更多的信息，可以使设置标签的属性。其基本语法格式如下：

```html
<标签名 属性1="属性值1" 属性2="属性值2" …> 内容 </标签名>
```

> 属性 1="属性值 1"，这种 key="value" 的格式，我们称之为键值对，在以后的学习中我们还会遇到。

> 属性就是特性，比如手机的颜色，手机的尺寸，总结就是手机的...

注意:

-   标签可以拥有多个属性，必须写在开始标签中，位于标签名后面。

-   属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。

-   任何标签的属性都有默认值，省略该属性则取默认值。

```html
<hr width="400" />
```

属性名是`宽度`，属性值是`400`。

### 注释标签

在 HTML 中还有一种特殊的标签——`注释标签`。如果需要在 HTML 文档中添加一些便于阅读和理解但又不需要显示在页面中的注释文字，就需要使用注释标签。其基本语法格式如下：

```html
<!-- 注释语句 -->
```

注释内容不会显示在浏览器窗口中，但是作为 HTML 文档内容的一部分，也会被下载到用户的计算机上，查看源代码时就可以看到。

注释重要性：

![](https://i.loli.net/2019/07/22/5d355c335aebc47274.png)

## 常用标签

HTML 标签有很多，这里我们学习最为常用的，后面有些较少用的，我们可以查下手册就可以了。

### 文档类型 `<!DOCTYPE>`

```html
<!DOCTYPE html>
```

声明文档类型，告诉浏览器以`HTML5`的标准去解析页面。

`<!DOCTYPE>` 标签位于文档的最前面，用于向浏览器说明当前文档使用哪种 HTML 标准规范，必需在开头处声明文档类型，只有这样浏览器才能按指定的文档类型进行解析。

### `<meta>` 标签

设置网页的元数据，不同的属性会使`<meta>`标签具备不同的功能。

-   `<meta charset="utf-8" />` 指定字符集编码 `utf-8`(优化后的全球码)

-   用于设置关键字 `<meta name="keywords" content="xxx" />`

-   用于设置描述信息 `<meta name="description" content="xxxx" />`

> utf-8 是目前最常用的字符集编码方式，常用的字符集编码方式还有 gbk 和 gb2312。gb2312 包括 6763 个汉字。GBK 包含全部中文字符，是 GB2312 的扩展，加入对繁体字的支持，兼容 GB2312。UTF-8 则包含全世界所有国家需要用到的字符。

> [字符集编码介绍](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="description"
			content="河南郑州不凡学院开设UI设计培训课程和web前端开发课程。北京一线讲师现场教学，学习就等于工作。做自己擅长的事，分享知识与快乐！"
		/>
		<!-- 网站描述信息 -->
		<meta
			name="keywords"
			content="不凡学院,郑州UI培训,河南郑州UI设计培训,河南郑州前端开发培训,郑州H5培训,郑州WEB前端培训,郑州HTML5前端培训,郑州软件培训"
		/>
		<!-- 网站的关键词,用于搜索引擎优化的 -->
		<title>不凡学院</title>
		<!-- 浏览器的tab栏当中显示 -->
	</head>
	<body>
		<!-- 这里边的内容就是网页真正展示的内容 -->
		欢迎 来到不凡 学院
	</body>
</html>
```

## 常见标签

### 标签的语义化

所谓标签语义化，就是指标签的含义。在合适的地方给一个最为合理的标签。使网页结构组织有序，并且有良好的可读性。

-   方便代码的阅读和维护

-   同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容

-   使用语义化标签会具有更好地搜索引擎优化

### 标题标签

标题标签：

```html
<hn> 标题文本 </hn>
```

在 `html` 中一共有 6 级标题。`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`和`<h6>`。依据重要性依次递减。`<h1>`是最大的标题，一般在页面中只能出现一次。其他的无所谓。

### 段落标签

```html
<p>文本内容</p>
```

在网页中要把文字有条理地显示出来，离不开段落标签，就如同我们平常写文章一样，整个网页也可以分为若干个段落，是 `HTML`文档中最常见的标签，默认情况下，文本在一个段落中会根据浏览器窗口的大小自动换行。

### 水平线标签

```html
<hr />
<!-- 单标签 -->
```

在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。这些水平线可以通过插入图片实现，也可以简单地通过标签来完成，`<hr />`就是创建横跨网页水平线的标签。

### 换行标签

```html
<br />
```

在 `HTML`中，一个段落中的文字会从左到右依次排列，直到浏览器窗口的右端，然后自动换行。如果希望某段文本强制换行显示，就需要使用换行标签。

### `div` `span` 标签

```html
<div>这是头部</div>
<span>今日价格</span>
```

`div` `span` 是没有语义的，是我们网页布局常用的 2 个标签。

### 文本格式化标签

在网页中，有时需要为文字设置粗体、斜体或下划线效果，这时就需要用到`HTML`中的文本格式化标签，使文字以特殊的方式显示。

-   斜体/加粗 `<em>` `<strong>` 。`em` 标签用于表示一段内容中的着重点。`strong` 标签用于表示一个内容的重要性。

-   斜体/加粗 `<i>` `<b>` 单纯的表示斜体/加粗，没有语义化。

-   上标/下标 `<sup>` `<sub>` ，比如: `5<sup>2<sup>` `H<sub>2</sub>O`。

-   下划线/删除线 `<ins>` `<del>`。

```html
<!-- 开发中不常用 -->
<em>这是一个em标签</em>
<i>这是一个i标签</i>
<br />
<strong>这是一个strong标签</strong>
<b>这是一个b标签</b>
<p>H<sub>2</sub>O</p>
<p>5<sup>2</sup>=25</p>
<ins>下划线</ins>
<del>删除线</del>
```

-   转义字符
    -   空格 `&nbsp;` `&#160;`
    -   小于号 `&lt;` `&#60;`
    -   大于号 `&gt;` `&#62;`
    -   ...

```html
<p>这是一个 &lt;p&gt;标签</p>
<p>张&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三</p>
```

### 图像标签

```html
<img src="图像URL" />
```

`HTML` 网页中任何元素的实现都要依靠 `HTML` 标签，要想在网页中显示图像就需要使用图像标签。

`src` 属性用于指定图像文件的路径和文件名，他是 `img` 标签的必需属性。

`alt` 属性用于指定图片未找到时，显示的内容。

`jpg` `png` `svg` `gif` 是图片的格式。

### 路径

**相对路径和绝对路径**

**相对路径**

-   相对当前文件

-   同一级目录下，输入图像文件的名称即可 `<img src="avatar.jpg" />`。

-   图像文件位于当前文件的下一级目录：输入文件夹名和文件名，之间用`/`隔开，如`<img src="img/avatar.jpg" />`。

-   图像文件位于当前文件的上一级目录：在文件名之前加`../` ，如果是上两级，则需要使用 `../ ../`，以此类推，`<img src="../avatar.jpg" />`。

**绝对路径**

-   本地绝对路径

`D:\web\img\avatar.jpg`

-   网络路径

`https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=586984b5572c11dfded1b8255b1c05ed/bd3eb13533fa828b9caedeb5fd1f4134960a5ad2.jpg`

```html
<!-- 本地绝对路径 -->
<img src="H:/html+css课程/01-html/mydev/bf.png" alt="sorry,图片未找到" />
<!-- 网络路径 -->
<img
	src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=586984b5572c11dfded1b8255b1c05ed/bd3eb13533fa828b9caedeb5fd1f4134960a5ad2.jpg"
	alt="sorry,图片未找到"
/>

<!-- 相对路径,相对当前文件所在的目录 -->
<!-- 同级目录 -->
<img src="bf.png" alt="sorry,图片未找到" />
<!-- 下级目录 -->
<img src="img/bf.png" alt="sorry,图片未找到" />
<!-- 上一级目录 -->
<img src="../bf.png" alt="sorry,图片未找到" />

<!-- alt 属性 用来表示 图片未找到时 所显示的内容 -->
```

### 链接标签

```html
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
```

在 `HTML` 中创建超链接非常简单，只需用链接标签环绕需要被链接的对象即可。

`href`：用于指定链接目标的 `url` 地址，当为标签应用 `href` 属性时，它就具有了超链接的功能。 Hypertext Reference 的缩写，意思是超文本引用。

`target`：用于指定链接页面的打开方式。

-   `_self` 为在当前窗口打开（默认值）。

-   `_blank` 为在新窗口中打开方式。

**注意：**

-   外部链接 直接链接网络路径即可。

-   内部链接 直接链接内部页面名称即可，比如 `<a href="index.html"> 首页 </a>`。

*   如果当时没有确定链接目标时，通常将链接标签的 href 属性值定义为`href="#"`，表示该链接暂时为一个空链接。

*   不仅可以创建文本超链接，在网页中各种网页元素，如图像、表格、音频、视频等都可以添加超链接。

```html
<!-- 当前窗口跳转 -->
<a href="https://www.baidu.com/">百度</a>
<a target="_self" href="https://www.baidu.com/">百度</a>
<!-- 新窗口跳转 -->
<a target="_blank" href="https://www.baidu.com/">百度</a>
<!-- 点击图片跳转 -->
<a href="https://www.baidu.com/">
	<img src="bf.png" alt="sorry,图片未找到" />
</a>
```

## 列表标签

### 无序列表 `ul`

无序列表的各个列表项之间没有顺序级别之分，是并列的。其基本语法格式如下：

```html
<ul>
	<li>列表项1</li>
	<li>列表项2</li>
	<li>列表项3</li>
	......
</ul>
```

比如下面这些，新闻是没有顺序的，不用排队，先到先得，后发布先显示。

![](https://i.loli.net/2019/07/22/5d355c8a6941286724.png)

**注意**

-   列表具有严格的嵌套关系

-   `<ul></ul>`中只能嵌套`<li></li>`，直接在`<ul></ul>`标签中输入其他标签或者文字的做法是不被允许的。

-   `<li></li>`之间相当于一个容器，可以容纳所有元素。

-   无序列表会带有自己样式属性，但是我们通常不使用自带样式。

### 有序列表 `ol`

有序列表即为有排列顺序的列表，其各个列表项按照一定的顺序排列定义，有序列表的基本语法格式如下：

```html
<ol>
	<li>列表项1</li>
	<li>列表项2</li>
	<li>列表项3</li>
	......
</ol>
```

所有特性基本与`ul`一致。但是实际工作中，较少用 `ol`。

### 自定义列表

自定义列表常用于对术语或名词进行解释和描述，自定义列表的列表项前没有任何项目符号。其基本语法如下：

```html
<dl>
	<dt>名词1</dt>
	<dd>名词1解释1</dd>
	<dd>名词1解释2</dd>
	...
	<dt>名词2</dt>
	<dd>名词2解释1</dd>
	<dd>名词2解释2</dd>
	...
</dl>
```

![](https://i.loli.net/2019/07/22/5d355cb616ac395046.png)

```html
<!-- 无序列表 -->
<!-- 常用 -->
<ul>
    <li>电脑</li>
    <li>手机</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>美食</li>
    <li>箱包</li>
</ol>

<!-- 自定义列表,书籍目录 -->
<dt>
    <dl>第一章</dl>
        <dd>美食</dd>
        <dd>箱包</dd>
    <dl>第二章</dl>
        <dd>电脑</dd>
        <dd>手机</dd>
</dt>
```

## `HTML` 基本规范(语法规范)

-   注释不能嵌套
-   标签必须完整
-   标签可以嵌套，但要注意语义。
-   标签的属性必须加双引号
-   标签属性尽量使用小写

## 表格

表格到现在还是较为常用的一种标签，但不是用来布局，常用于处理表格式数据。

![](https://i.loli.net/2019/07/22/5d355d255783f63394.png)

```html
<table>
	<tr>
		<th>表头内的文字</th>
		...
	</tr>
	<tr>
		<td>单元格内的文字</td>
		...
	</tr>
	...
</table>
```

![](https://i.loli.net/2019/07/22/5d355d4107b8820328.png)

-   `<table></table>`用于定义一个表格。

-   `<tr></tr>` 用于定义表格中的一行，必须嵌套在`<table></table>`标签中，在 `<table></table>`中包含几对`<tr></tr>`，就有几行表格。

-   `<td></td>' 用于定义表格中的单元格，必须嵌套在`<tr></tr>`标签中，一对`<tr> </tr>`中包含几对`<td></td>`，就表示该行中有多少列（或多少个单元格）。

-   `<th></th>' 表头一般位于表格的第一行或第一列，必须嵌套在`<tr></tr>`标签中。

### 表格属性

![](https://i.loli.net/2019/07/22/5d355d715567549148.png)

> 这些属性可以修改表格的样式，但是目前很多属性已经废弃不用，我们需要用 CSS 控制表格的样式。

### 表格结构（了解）

```
在使用表格进行布局时，可以将表格划分为头部、主体和页脚（页脚因为有兼容性问题，我们不在赘述），具体 如下所示：

<thead></thead>：用于定义表格的头部。

<tbody></tbody>：用于定义表格的主体。

```

![](https://i.loli.net/2019/07/22/5d355db93a61874440.png)

### 合并单元格

-   rowspan 单元格所占行
-   colspan 单元格所占列

```html
<table bgcolor="orange" cellspacing="20" cellpadding="10" border="5">
	<!-- 表格标题 -->
	<caption>
		课程表
	</caption>
	<tr>
		<th>周一</th>
		<th>周二</th>
		<th>周三</th>
		<th>周四</th>
	</tr>
	<tr>
		<td rowspan="2">语文</td>
		<td colspan="2">数学</td>
		<!-- <td>语文</td> -->
		<td>体育</td>
	</tr>
	<tr>
		<!-- <td>语文</td> -->
		<td>数学</td>
		<td>语文</td>
		<td>体育</td>
	</tr>
</table>
```

## 表单

现实中的表单，类似我们去银行办理信用卡填写的单子。 目的是为了收集用户信息。

在我们网页中，我们也需要跟用户进行交互，收集用户资料，此时也需要表单。

在 HTML 中，一个完整的表单通常由表单控件（也称为表单元素）、提示信息和表单域 3 个部分构成。

![](https://i.loli.net/2019/07/22/5d356501413c720261.png)

-   表单控件：

​ 包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

-   提示信息：

​ 一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

-   表单域：

相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的 url 地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

### `input` 控件

在上面的语法中，`<input />`标签为单标签，`type`属性为其最基本的属性，其取值有多种，用于指定不同的控件类型。除了`type`属性之外，`<input />`标签还可以定义很多其他的属性，其常用属性如下表所示。

![](https://i.loli.net/2019/07/22/5d3565442e57642802.png)

### `label` 标签

`label` 标签为 `input` 元素定义标注。

作用：用于绑定一个表单元素, 当点击 label 标签的时候, 被绑定的表单元素就会获得输入焦点。

`for` 属性规定 `label` 与哪个表单元素绑定。

```html
<label for="male">Male</label> <input type="radio" name="sex" id="male" value="male" />
```

### textarea 控件(文本域)

如果需要输入大量的信息，就需要用到`<textarea></textarea>`标签。通过 `textarea` 控件可以轻松地创建多行文本输入框，其基本语法格式如下：

```html
<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>
```

### 下拉菜单

使用 `<select></select>` 控件定义下拉菜单的基本语法格式如下:

```html
<select>
	<option>选项1</option>
	<option>选项2</option>
	<option>选项3</option>
	...
</select>
```

**注意：**

-   `<select></select>`中至少应包含一对`<option></option>`。
-   在 `<option></option>` 中定义 `selected="selected"`属性时，当前项即为默认选中项。可以简写为`selected`

### 表单域

在 `HTML` 中，`<form></form>` 标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，`form` 中的所有内容都会被提交给服务器。创建表单的基本语法格式如下：

```html
<form action="url地址" method="提交方式" name="表单名称">
	各种表单控件
</form>
```

### 表单补充属性

-   `<fieldset>` `<legend>` 可以实现表单的分组。
-   `get` 提交
    -   参数被放到地址提交，比如: /D:/abc?username=张三&pwd=123&sex=0&experience=0
    -   不安全
    -   地址栏拼接的参数长度有限，一般是<4k
    -   一般用于获取数据
-   `post` 提交
    -   地址栏不显示提交内容，再请求体显示
    -   相对安全
    -   提交的数据量没有上限
    -   一般用于提交保存数据
-   `disabled` 禁用
-   `readonly` 只读
-   `placeholder` 占位符提供可描述输入字段预期值的提示信息
-   `autofocus` 元素应该自动获得焦点
-   `multiple` 多文件上传

```html
<!-- action 是当前表单提交的地址 -->
<form action="www.bufanui.com" method="get">
	<fieldset>
		<legend>基本信息</legend>
		用户名: <input type="text" readonly name="username" value="张三" /> <br />
		曾用名： <input type="text" disabled name="oldname" value="张小三" /><br />
		密码: <input type="password" name="pwd" /> <br />
		性别:
		<label> 男: <input type="radio" name="sex" value="0" /> </label>
		<label> 女: <input type="radio" checked name="sex" value="1" /> <br /> </label>
	</fieldset>

	<fieldset>
		<legend>补充信息</legend>
		爱好:
		<label> 篮球: <input type="checkbox" name="like" value="basketball" /> </label>
		<label> 足球: <input type="checkbox" checked name="like" value="football" /> </label>
		<label> 乒乓: <input type="checkbox" name="like" value="pingpang" /><br /> </label>

		工作年龄:
		<select name="experience">
			<option value="0">--无--</option>
			<option value="1">1年</option>
			<option value="2" selected>2~3年</option>
			<option value="3">3~5年</option>
		</select>
		<br />
		上传头像: <input type="file" name="avatar" multiple /> <br />
		个人描述:
		<textarea name="desc" cols="30" rows="4">
    				我对工作有极大地热情,我喜欢写代码!
    			</textarea
		>
		<br />
	</fieldset>

	<input type="submit" value="提交" />
</form>
```

## CSS

> 全称层叠样式表 (Cascading Style Sheets)，用于实现页面的样式。
> 层叠：简单来说就是一个元素可以多次对他设置同一个样式。

## 书写位置

-   行内样式 `<p style="color: red; font-size: 24px;">这是一个p标签</p>`
-   内部样式 `<style>p{color: red;font-size: 24px;}</style>`
-   外部引入 `<link rel="stylesheet" href="style.css">`
-   区别
    -   行内样式：严重耦合，用的很少。
    -   内部样式：测试使用，当前页面的样式只能当前页面使用。
    -   外部样式：上线使用，多个页面可以复用样式。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<!-- 外链,外部引入方式 -->
		<!-- 引入路径规则 和 图片引入规则一样 -->
		<link rel="stylesheet" href="style.css" />
		<!-- 内部书写 -->
		<style>
			/* 语法: 
            选择器{
                样式名:样式值;
                样式名:样式值;
            } */
			/* 分号不能省略 */
			p {
				color: orange;
				font-size: 16px;
			}
		</style>
	</head>
	<body>
		<!-- 行内样式语法 -->
		<!-- style="样式名:样式值;样式名:样式值;" -->
		<!-- 分号不能省略 -->
		<p style="color: red; font-size: 24px;">我是一个P标签</p>
		<p>我是内部样式的p标签</p>
	</body>
</html>
```

## CSS 选择器

-   简单选择器
    -   标签选择器
    -   id 选择器
    -   class 选择器

```css
        /* 标签选择器 */
        p{
            color：red；
        }
        /* id选择器 */
		#h3{
			color: orange;
		}
        /* class选择器 */
        .header{
            color:blue;
        }
```

-   复杂选择器
    -   交集选择器
    -   并集选择器
    -   后代选择器
    -   通配符

```css
/*标签p 和.p1的交集*/
p.p1 {
	color: red;
}
.p2.danger {
	color: blue;
}
/*并集选择器 都被选中*/
.p1,
.p2 {
	font-size: 30px;
}
/*后代选择器 空格*/
.p3 a {
	color: red;
}
/** 通配符 选择所有标签*/
* {
	/*background-color: pink;*/
}
```

## CSS 继承性

[css 中可以和不可以继承的属性总结](https://www.cnblogs.com/thislbq/p/5882105.html)

## CSS 层叠性

样式冲突，必然只有一个样式生效。

## CSS 权重问题

-   行内样式 > id 选择器 > class 选择器 >标签选择器
-   复杂选择器权重计算
    -   行内样式 1000
    -   id 选择器 100
    -   class 选择器 10
    -   标签选择器 1
    -   通配符/继承属性 0
-   如果两个选择器是一样的，遵循就近原则。
-   如果写了相同的选择器，希望某个选择器权重更高，添加 class 类名，使用交集选择器即可。

```css
.header .nav .nav-item {
	color: red;
}
.header .nav .nav-item.active {
	color: blue;
}
```

## CSS 常见单位

-   px 像素单位，用于表示标签的宽和高，或者字体的大小。
-   百分比，通常用来表示长度或高度，相较于父类元素的百分比。
-   em 基于当前字体的倍数。

```css
p {
	text-indent: 2em;
}
```

-   颜色
    -   预定义颜色：blue、yellow、pink、purple、red 等。
    -   十六进制：每两位表示一种颜色的深度，分别表示 red、green、blue，比如：#ff00ff。
    -   rgb: rgb(0,0,255) ==> 绿色。rgb 和十六进制是可以相互转换的。
    -   rgba: rgba(0,0,255,0.5)。跟 rgb 一样，a 是透明度：0~1，0.5==> .5

```shell
十六进制==> 十进制换算
十进制：  0  1  2  3  4  5  6  7  8  9
十六进制：0  1  2  3  4  5  6  7  8  9   a(10)  b(11)   c(12)  d(13)   e(14)   f(15)
比如： 1e  ==>  1*16 + e ==> 16+ 14 = 30;
    ff ==> f * 16 + f ==> 15*16 + 15 = 255;
比如一个颜色是 aabbcc ==> abc, #00ffaa ==> #0fa
```

## CSS 常用属性

| 属性名称         | 属性作用     | 值                                                                                 |
| ---------------- | ------------ | ---------------------------------------------------------------------------------- |
| width / height   | 宽高         | px 百分比 em 等                                                                    |
| background-color | 背景颜色     | color                                                                              |
| cololr           | 字体颜色     | color                                                                              |
| font-size        | 字体大小     | px em 等                                                                           |
| text-align       | 文字对齐方式 | center left right                                                                  |
| text-indent      | 首行缩进     | px em 等                                                                           |
| font-family      | 字体         | 微软雅黑 Microsoft YaHei、黑体 SimHei、Arial 等                                    |
| font-weight      | 字体加粗     | 100-900.加粗 700-900/ bolder lighter normal                                        |
| font-style       | 字体样式     | Italic 斜体 / normal 正常                                                          |
| line-height      | 行高         | 单位： px /倍数 / 百分比 ;- 设置文字的行间距- 单行文字垂直居中 ：行高=父类盒子高度 |
| font             | 字体缩写     | `font:italic bolder 20px/1.2 'Arial','Microsoft YaHei'                             |

## 标签的表现形式

-   块状标签：独占一行，宽高有效。比如：`div` `p` `h1~h6` `form` `table` `hr` `br` `ul>li` `ol>li` `dl>dt/dd`
-   行内块标签：可以同一行显示，宽高有效。比如: `input` `select` `img` `button`
-   行内标签：可以同一行显示，但是宽高无效。比如：`a` `span` `strong` `del` `ins` `em` `i` `b`
-   `display:` 修改元素的性质。
    -   block：设置元素为块元素
    -   inline：设置元素为行内元素
    -   inline-block：设置元素为行内块元素
    -   转换的必要性：比如可以把`a`标签转换为块状元素，设置宽高，使用户可点击的区域增大，进而实现一个按钮的样式。

## 背景图片属性

| 属性名称              | 属性作用           | 值                                                          |
| --------------------- | ------------------ | ----------------------------------------------------------- |
| background-color      | 背景图片颜色       | color                                                       |
| background-image      | 背景图片           | url(‘1.png’);                                               |
| background-repeat     | 平铺方式           | repeat 、 no-repeat 、 repeat-x 、 repeat-y                 |
| background-position   | 图片位置           | left、 right、 top、 bottom、 center                        |
| background-attachment | 背景滚动           | scroll、fixed (注意：基于 body 的定位）                     |
| background            | 简写（顺序不能错） | background: green url(1.jpg) no-repeat center center fixed; |

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<style>
			body {
				background-image: url("img/banner.jpg");
				background-repeat: no-repeat;
				background-position: left top;
				/*是否跟最滚动*/
				background-attachment: fixed;
			}
			.d1 {
				width: 100%;
				height: 400px;
				/*background-color: green;*/
				/*background-image: url('img/bf.png');*/
				/*background-repeat: no-repeat;*/
				/*center 默认的是x轴  y轴默认居中*/
				/*跟数学的坐标系是不同的，x轴为正 ，y轴向下正 */
				/*background-position: -35px 30%;*/
				background: green url("img/bf.png") no-repeat right 200px fixed;
				/*如果设置了fixed 那么背景图片的位置将会基于body*/
				/*background-attachment:fixed;*/
				/*精灵图片 雪碧图 做案例的时候再补充*/
				background-color: purple;
			}
			.d2 {
				widows: 100%;
				height: 1000px;
				background-color: pink;
				/*透明度 ： 0~1  */
				opacity: 0.5;
			}
		</style>
	</head>
	<body>
		<!-- div 是一个标签，不表示任何的内容，没有自带样式。只是用于划分结构 -->
		<div class="d1"></div>
		<div class="d2"></div>
	</body>
</html>
```

## 盒子模型

> CSS 处理网页时，它认为每个元素都包含在一个不可见的盒子里。包含内容区域、padding（内边距）、border（边框）、margin（盒子与盒子的距离）。

> 所有的页面的元素都可以看成是一个盒子，占据一定的页面空间。

![](/media/hezi.jpg)

### padding

-   `padding:10px 20px 30px 40px;` 这样会设置元素的上、右、下、左四个方向的内边距。
-   `padding:10px 20px 30px;` 分别指定上、左右、下四个方向的内边距。
-   `padding:10px 20px;` 分别指定上下、左右四个方向的内边距。
-   `padding:10px;` 同时指定上左右下四个方向的内边距。
-   同时在 css 中还提供了 `padding-top`、`padding-left`、`padding-right`、`padding-bottom` 分别用来指定四个方向的内边距。
-   改变元素的大小。

```html
<style>
	.d1 {
		width: 300px;
		height: 300px;
		background-color: green;
		/*padding: 50px  100px 30px 80px;
			padding-left: 100px;*/
		padding: 100px;
	}
</style>
```

### margin

-   设置方法和`padding`类似，同样也提供了四个方向的 `margin-top/margin-right/margin-bottom/margin-left`。
-   `margin: xxx auto;`可以使块状元素水平居中。
-   `嵌套崩塌`：两个盒子发生嵌套的时候，给子类设置 margin 会给父类造成一种崩塌现象，子类元素的 margin-top 没有效果，而是直接作用到父类元素。

```
解决方案：
1. 父类 overflow: hidden;
2. 父类 设置极小的 padding 或者 border；
```

-   `margin重叠`： 如果垂直方向上两个块状元素同时设置了 margin-bottom 和 margin-top，那么这两个值将会发生重叠，不会累加，哪个值大用哪个。
-   margin-top/margin-bottom 对于行内元素无效。

```html
<style>
	.d2 {
		width: 200px;
		height: 200px;
		background-color: red;
		/*margin: 100px;
		margin-top: 200px;*/
		/*d2将会左右居中*/
		margin: 100px auto;
	}
</style>
<!-- ======================= -->
<!-- 当两个盒子发生嵌套的时候，给子类设置maring会给父类造成一种崩塌现象，子类的margin-top没有效果，而直接作用到父类 -->
<!-- 解决方案： 1. 父类  overflow: hidden
			   2. 父类 设置极小的padding -->
<div class="box">
	<div class="inner-box"></div>
</div>

<hr />

<!-- 如果垂直两个块状元素同时设置了margin-bottom和margin-top,那么这两个值将会发生重叠,不会累加，哪个值大用哪个 -->
<div class="box2"></div>
<div class="box3"></div>
```

### border

-   可以在元素周围创建边框，边框是元素可见框的最外部。
-   `border:1px solid red;` 分别指定了边框的宽度、颜色和样式，是一种缩写：`border-width border-style border-color`。
-   `border-style:` `none (默认) / dashed(虚线) / dotted（点） / solid(实线) / double(双实线)`。
-   可以单独设置某一条边框：`border-right: 20px solid blue;`
-   改变元素的大小。

```html
<style>
	.d1 {
		width: 200px;
		height: 200px;
		background-color: green;
		/*简写属性*/
		/*border: 10px solid red;*/
		border-width: 10px;
		border-style: solid;
		border-color: red;
		/*右边单独添加20像素*/
		border-right: 20px solid blue;
	}
</style>
```

## 显示和隐藏

-   `display:none;` 隐藏元素，不再在文档中占据位置。
    -   显示：可以将 display 设置为其他属性值，不为 none 即可。
-   `visibility:hidden;` 隐藏元素，隐藏后其在文档中所占的位置会依然保持，不会被其他元素覆盖。

```html
<style>
	.baidu {
		/*display 可以改变元素的表现形式*/
		display: inline-block;
		width: 300px;
		height: 300px;
		background-color: pink;
	}
	.p1 {
		/*display:none;*/
		visibility: hidden;
	}
</style>
```

## overflow

`overflow` 指定标签里面的内容超出了样式的宽度和高度时如何处理。

-   visible：默认值
-   scroll：添加滚动条
-   auto：根据需要添加滚动条
-   hidden：隐藏超出盒子的内容

```html
<style>
	.d1 {
		width: 200px;
		height: 200px;
		background-color: green;
		overflow: auto;
		/*overflow: scroll;
			overflow: hidden;*/
	}
</style>
```

## 文档流

-   块状元素独占一行
-   行内元素可以同一行显示，自左向右，如果不够会自动换行
-   自上而下的展示
-   脱离文档流：浮动和定位

## 浮动

> 浮动指的是使元素脱离原来的文本流，在父元素中浮动起来。

-   浮动使用 float 属性。
-   可选值：
    -   none：不浮动
    -   left：向左浮动
    -   right：向右浮动

### 浮动的表现形式

-   当一个元素浮动以后，其下方的元素会上移。元素中的内容将会围绕在元素的周围。
-   浮动会使元素完全脱离文本流，也就是不再在文档中在占用位置。
-   元素设置浮动以后，会一直向上漂浮直到遇到父元素的边界或者其他浮动元素。
-   元素浮动以后即完全脱离文档流，这时不会再影响父元素的高度。也就是浮动元素不会撑开父元素。
-   浮动元素默认会变为块元素，即使设置 display:inline 以后其依然是个块元素。
-   块级元素和行内元素都可以浮动，当一个行内元素浮动以后将会自动变为一个块级元素。
-   当一个块级元素浮动以后，宽度会默认被内容撑开，所以当漂浮一个块级元素时我们都会为其指定一个宽度。

### 浮动的影响

如果子类元素设置了浮动，而父类元素没有设置高度，或者高度比子类元素小，那么子类元素脱离了文档流，就无法把父类盒子撑开。那么整个文档的结构将受到破坏。

-   清除浮动的影响：
    -   严格计算父类盒子高度
    -   clear: left/right/both 不允许当前元素的 left/right/both 有浮动元素。
        -   在浮动元素的最后面追加一个空的 div,设置 clear:both 即可清除浮动的影响。
-   因为浮动会对文档流造成影响，所以能用流式布局就不要使用浮动。

```
补充：
1.display：inline-block 标签的换行符会被显示为空格。
2.float:right 会改变标签的前后顺序。
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			.header {
				width: 100%;
				height: 100px;
				background-color: green;
			}
			.content {
				width: 100%;
				/*height: 500px;*/
				background-color: pink;
			}
			/*同级要浮动，都浮动*/
			.content .aside {
				float: left;
				width: 200px;
				height: 300px;
				background-color: red;
			}
			.content .main {
				float: left;
				width: 800px;
				height: 900px;
				background-color: gray;
			}
			.footer {
				width: 100%;
				height: 100px;
				background-color: black;
			}
			/*不允许当前元素左右出现浮动元素  这样可以清除浮动的影响*/
			.clr {
				clear: both;
			}
		</style>
	</head>
	<body>
		<div class="header"></div>
		<div class="content">
			<div class="aside"></div>
			<div class="main"></div>
			<div class="clr"></div>
		</div>
		<div class="footer"></div>
	</body>
</html>
```

## 定位

> 通过 `position` 属性可以实现元素的定位。元素定位之后，需要通过设置 left/right 和 top/bottom 值对元素定位。

-   position 属性可以把一个元素放置到网页中的任何位置。
-   可选值：

    -   static（默认）
    -   relative
    -   absolute
    -   fixed
    -   sticky

### `relative` 相对定位

相对元素本身的位置定位。

-   每个元素在页面的文档流中都有一个自然位置。相对于这个位置对元素进行移动就称为相对定位。周围的元素完全不受此影响。
-   当开启了相对定位以后，可以使用 top、right、bottom、left 四个属性对元素进行定位。
-   如果不设置元素的偏移量，元素位置不会发生改变。
-   相对定位不会使元素脱离文本流。元素在文本流中的位置不会改变。
-   相对定位不会改变元素原来的特性。
-   相对定位会使元素的层级提升，使元素可以覆盖文本流中的元素。

```css
.d1 {
	position: relative;
	left: 100px;
	top: 100px;
	width: 200px;
	height: 200px;
	background-color: green;
}
```

### `absolute` 绝对定位

指使元素相对于`视口`或离他最近的祖先定位元素进行定位。

-   当开启了绝对定位以后，可以使用 top、right、bottom、left 四个属性对元素进行定位。
-   绝对定位会使元素完全脱离文本流。
-   绝对定位的块元素的宽度会被其内容撑开。
-   绝对定位会使行内元素变成块元素。
-   一般使用绝对定位时会同时为其父元素指定一个相对定位，以确保元素可以相对于父元素进行定位。

```css
.d1 {
	/*有绝对的事情吗？绝对的值必须有参照物*/ /*如何才能既保证父类有定位元素 而且父类不会再原来的位置偏移*/ /*子绝父相*/
	position: relative;
	left: 0;
	top: 0; /* left: 100px; top: 100px;*/
	margin-left: 100px;
	width: 400px;
	height: 400px;
	background-color: green;
}
.d11 {
	position: absolute;
	left: 100px;
	top: 100px;
	width: 150px;
	height: 150px;
	background-color: red;
}

/* 结构 */
/* <div class="d1">
	<div class="d11"></div>
</div> */
```

### fixed 固定定位

元素会被锁定在屏幕的某个位置上，当访问者滚动网页时，固定元素会在屏幕上保持不动。 (相对于视口定位)

-   固定定位不占据原来的位置，会脱离文档流。
-   给元素设置固定定位之后，元素位置从浏览器左上角出发。 - 可以将行内元素转换块元素。

```css
.zx {
	position: fixed;
	right: 100px;
	bottom: 200px;
	width: 200px;
	height: 200px;
	background-color: red;
}

/* <a class="zx" href="#">
	w shi a
</a> */
```

### sticky 粘性定位

粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

```css
#one {
	position: sticky;
	top: 10px;
}
```

在网页滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 网页回滚到阈值以下。

### z-index

-   当元素开启定位以后就可以设置 z-index 这个属性。默认是 0。
-   z-index 可以指定一个整数作为参数，值越大元素显示的优先级越高，也就是 z-index 值较大的元素会显示在网页的最上层。

```css
.d1,
.d2,
.d3 {
	position: fixed;
	left: 0;
	top: 0px;
	width: 200px;
	height: 200px;
	background-color: green;
}
.d1 {
	z-index: 9;
}
.d2 {
	left: 30px;
	top: 30px;
	background-color: blue;
	z-index: 2;
}
.d3 {
	left: 80px;
	top: 80px;
	background-color: red;
	z-index: 0;
}

/* <div class="d1">
	d1
</div>
<div class="d2">
	d2
</div>
<div class="d3">
	d3
</div> */
```

## 规避脱标流

> 经验： 一般布局采用标准流，如果标准流布局实现不了用浮动。定位一般用于解决小范围的某个标签的位置。

-   能用标准流（没有脱标）解决就不用浮动
-   解决不了就考虑有浮动（页面布局类型，“不完全脱标”）
-   浮动解决不了用定位（小图标，完全脱标，不影响内容）

## 结束

> html 和 css 基础内容基本概况完毕，当然只掌握这些内容是不够的。只要跟着老师的教程走，耐心学，三四个案例下来就可以完全掌握页面基础知识。期间对于类命名，组织规则及实现技巧，都会一一说到。
