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
function burger(){
	const burger = document.querySelector('.burger');
	const burgerSpan = document.querySelector('.burger>span');
	const menu = document.querySelector('.navigation');
	burger.addEventListener('click',function(){
		burgerSpan.classList.toggle('active');
		menu.classList.toggle('active');
	})
}
function maxMenuLi(){
	var submenu = document.querySelector('.submenu')
	var liSubmenu =document.querySelectorAll('.submenu>li');
	var widthMenu=window.getComputedStyle(submenu).width;
		console.log(widthMenu);
		if(liSubmenu.length > 15 || liSubmenu <30){
			submenu.style.width = '500px';
		}
		if(liSubmenu>30){
			submenu.style.width = '750px';
		}

}
function tab(){
	var hotLink = document.querySelector('.hotLink');
	var bestLink = document.querySelector('.bestLink');
	var hot = document.querySelector('.hot');
	var best = document.querySelector('.best');
	var prev1 = document.querySelector('.prev1');
	var prev2 = document.querySelector('.prev2');
	var next1 = document.querySelector('.next1');
	var next2 = document.querySelector('.next2');
	hotLink.addEventListener('click',function(){
		hotLink.classList.add('active');
		bestLink.classList.remove('active');
		hot.style.display = 'block';
		best.style.display = 'none';
		prev1.style.display ='block';
		prev2.style.display ='none';
		next1.style.display ='block';
		next2.style.display ='none';
	})
	bestLink.addEventListener('click',function(){
		hotLink.classList.remove('active');
		bestLink.classList.add('active');
		hot.style.display = 'none';
		best.style.display = 'block';
		prev1.style.display ='none';
		prev2.style.display ='block';
		next1.style.display ='none';
		next2.style.display ='block';
	})
}
tab();
maxMenuLi();
burger();
subMenu();
