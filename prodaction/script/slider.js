$('.bgslider').slick({
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows:false,
	prevArrow:$('.prev1'),
	nextArrow:$('.next1'),
	autoplay: true,
	adaptiveHeight: true,
	fade: true,
  	cssEase: 'linear',
	autoplaySpeed: 4000
	
});
$('.slick-example1').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows:true,
	prevArrow:$('.prev1'),
	nextArrow:$('.next1'),
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	    {
	      breakpoint: 1504,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});
$('.slick-example2').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows:true,
	prevArrow:$('.prev2'),
	nextArrow:$('.next2'),
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	    {
	      breakpoint: 1504,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});

