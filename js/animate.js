;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			})
		}
	};

	var sliderMain = function() {
		
	  	$('#intro .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000
	  	});

	  	$('#intro .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#intro .flexslider .slides > li').css('height', $(window).height());	
	  	});
	};

	// Parallax
	var parallax = function() {

		$(window).stellar();
	};

	// intro font animation
	var scrolledWindow = function() {

		$(window).scroll(function(){

			var scrollPos = $(this).scrollTop();


			$('#intro .intro-text').css({
		      'opacity' : 1-(scrollPos/300),
		      'margin-top' : (-212) + (scrollPos/1)
		   });

		   $('#intro .flexslider .intro-overlay').css({
				'opacity' : (.5)+(scrollPos/2000)
		   });

		   if (scrollPos > 300) {
				$('#intro .intro-text').css('display', 'none');
			} else {
				$('#intro .intro-text').css('display', 'block');
			}
		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   }
		});
	};

	// Document on load.
	$(function(){

		fullHeight();
		sliderMain();
		parallax();		
		scrolledWindow();
		
		// Animations
		homeAnimate();

	});
}());