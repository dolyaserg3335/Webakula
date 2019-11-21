function subMenu(){
	var subMenu = document.querySelectorAll('.menu>li');
	for(var i = 0; i< subMenu.length; i++){
		subMenu[i].addEventListener('mouseenter',function(event){
			this.classList.add('active');
		});
		subMenu[i].addEventListener('mouseleave',function(event){
			this.classList.remove('active');
		});
	}	
}
function bgSlider(){
	var dots = document.querySelectorAll('.dot');
	var header = document.querySelector('header');
	var bg=['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg','img/banner4.jpg','img/banner5.jpg'];
	var index =0;

	function setBg(){
		header.style.backgroundImage = 'url("' + bg[index] + '")'; 
		index++;
	}
	var interval=setInterval(function(){
		if(index < bg.length){
			setBg();

		}
		else{
			index = 0;
			setBg();
		}
	},4000 );
}
function burger(){
	const burger = document.querySelector('.burger');
	const burgerSpan = document.querySelector('.burger>span');
	const menu = document.querySelector('.navigation');
	burger.addEventListener('click',function(){
		burgerSpan.classList.toggle('active');
		menu.classList.toggle('active');
	})
}
burger();
bgSlider();
subMenu();
