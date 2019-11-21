$('.slick-example').slick({
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows:true,
	prevArrow:$('.prev'),
	nextArrow:$('.next'),
	autoplay: true,
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

