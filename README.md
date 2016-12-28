# sass-slider 轮播图
原生js、sass编写轮播图组件，支持自定义属性
## 特点
原生JS编程，不依赖任何第三方库
组件化
支持自定义属性
使用sass编写样式

## 使用方法
### html：
```html
<head>
		<meta charset="UTF-8">
		<title>轮播</title>
		<link rel="stylesheet" type="text/css" href="./style/slider.css">
	</head>
	<body>
		<div id="banner"></div>
		<script type="text/javascript" src="./scripts/slider.js"></script>
	</body>
```
### script：
```javascript
    <script type="text/javascript">
			
			//设置你所需要的参数
			var options = {};
			options.oDiv=document.getElementById("banner");
			var imgs = ["./img/bg1.jpg","./img/bg2.jpg","./img/bg3.jpg","./img/bg4.jpg","./img/bg5.jpg","./img/bg6.jpg","./img/bg7.jpg","./img/bg8.jpg"]; //传入所需图片的地址
			options.imgs = imgs;
			options.hrefs=["#","#","#","#","#"]; //点击图片跳转地址
			options.height = "440px";  //轮播图宽高
			options.width = "100%";
			options.ulName = "slider-ul";//轮播图ul的样式类名字
			options.liName = "slider-li";//轮播图li的样式类名字
			options.navName = "nav";//小圆点的样式类名字
			options.navActive = "active";//选中圆点时的样式 对应当前图片的圆点的样式
			options.btnName = "btn";  //前后翻页按钮类名字
			options.time= 3000;//传入轮播时间间隔
			var slider = new Slider(options);
			
		</script>

```
