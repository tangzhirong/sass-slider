(function(){
	function Slider(options){
		if (!options) {
			throw new Error("请传入参数")
		} 

		this.oDiv = options.oDiv;

		this.oDiv.style.height = options.height ||'440px';
		this.oDiv.style.width = options.width||'100%';
		this.height = options.height ||'440px';//这是设置图片的高度 也是外层div的高度
		this.width = options.width ||'100%';//图片的宽度   也是外层div的宽度
	
		this.imgs = options.imgs;
		this.hrefs = options.hrefs;
		
		this.ulName = options.ulName;
		this.liName = options.liName;
		this.navName = options.navName;
		this.liName = options.liName;
		this.btnName = options.btnName;
		this.navActive = options.navActive;

		this.curIndex = 0;//当前轮播图序号
		this.auto_timer = null;
		this.time = options.time||3000;//设置轮播时间间隔
		this.len = this.imgs.length;
		//初始化
		this.init();
	}
	
	//原型的方法
	Slider.prototype.init=function(){
		this.oDiv.onmouseover=this.stopPlay.bind(this);	
		this.oDiv.onmouseout=this.autoPlay.bind(this);
		this.createUl();
		this.createButton();
		this.createNav();
		this.autoPlay();
	}
	
	//创建 ul li a
	Slider.prototype.createUl=function(){
		var oUl = document.createElement("ul");
		this.oUl = oUl;
		oUl.className=this.ulName;
	
		var oLi = null;
		var oA = null;
		for (var i=0;i<this.len;i++) {
			oLi=document.createElement("li");
			oLi.className=this.liName;
	
			oA=document.createElement("a");
			oA.href = this.hrefs[i];
			oA.style.backgroundImage = "url(" + this.imgs[i] + ")";//动态创建
	
			oLi.appendChild(oA);
			oUl.appendChild(oLi);
		}
		
		oUl.children[0].style.opacity=1;
		this.oDiv.appendChild(oUl);
	}
	//创建左右按钮
	Slider.prototype.createButton=function(){
		var oPrev = document.createElement("span");
		oPrev.innerHTML="&lt";
		oPrev.className=this.btnName;
		var oNext = document.createElement("span");
		oNext.innerHTML = "&gt";
		oNext.className=this.btnName;
		this.oDiv.appendChild(oPrev);
		this.oDiv.appendChild(oNext);
	
		oNext.onclick = this.nextSlider.bind(this);
		oPrev.onclick = this.prevSlider.bind(this);
	}
	
	//创建原点按钮导航
	Slider.prototype.createNav = function(){
		var oUl = document.createElement("ul");
		oUl.classList.add(this.navName);
		oUl.classList.add("clearfix");
		
		for (var i = 0; i<this.len; i++) {
			var oLi = document.createElement("li");
			oUl.appendChild(oLi);		
		}
		
		oUl.children[0].classList.add(this.navActive);
		this.oDiv.appendChild(oUl);

		//点击原点改变图片
		var oLi = document.querySelectorAll(".nav li");
		var that = this;
		console.dir(that)
		
		for(var i = 0; i < oLi.length; i++){
			oLi[i].index = i;
			oLi[i].onmouseover = function(){
				that.changeSlider(0);
				that.curIndex = this.index;
				console.log(that.curIndex);
				that.changeSlider(1);
				that.changeNav();
			}
		}
	}
	//上一张
	Slider.prototype.prevSlider=function(){
		this.changeSlider(0);
	
		if (this.curIndex>0) {
			this.curIndex--;		
		} else{
			this.curIndex=this.len-1;
		}
		this.changeNav();
		this.changeSlider(1);
		console.log(this.curIndex);
	}
	//下一张
	Slider.prototype.nextSlider=function(){
		this.changeSlider(0);
		if (this.curIndex<this.len-1) {
			this.curIndex++
		} else{
			this.curIndex=0;	
		}
		this.changeNav();
		this.changeSlider(1);
		console.log(this.curIndex)
	}
	
	//自动轮播
	Slider.prototype.autoPlay=function(){
		this.auto_timer=setInterval(this.nextSlider.bind(this),this.time);
	}
	//鼠标放上去自动轮播停止
	Slider.prototype.stopPlay=function(){
		clearInterval(this.auto_timer);
	}
	
	
	//改变原点导航
	Slider.prototype.changeNav=function(){
		this.oDiv.querySelector(".nav li.active").classList.remove("active");
		this.oDiv.querySelectorAll(".nav li")[this.curIndex].classList.add("active");
	}
	
	//改变图片
	Slider.prototype.changeSlider=function(p){
		this.oDiv.querySelectorAll(".slider-ul .slider-li")[this.curIndex].style.opacity=p;
	}

	window.Slider = Slider;
})();
