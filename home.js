$(document).ready( function(){
	
    $.fn.snow();
    
    $('.page-title').fadeIn(4500);
    $(document).on('click', function(){
	    $('.navbar-container').fadeIn(300);
    });
    $('.arrow-down').hover(function(){
	    $('.navbar-container').fadeIn(300);
    });
    
    contactOverlay();
    signInOverlay();
    
    $('.arrow-down').on('click', function(){
	    $('.slide-up-banner').slideDown(500);
    });
    
    $('.arrow-up').on('click', function(){
	    $('.slide-up-banner').slideUp(500);
    });
});

(function($){
	$.fn.snow = function(options){
		var $flake 			= $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#8226;'),
			documentHeight 	= $(document).height(),
			documentWidth	= $(document).width(),
			defaults		= {
								minSize		: 8,
								maxSize		: 10,
								newOn		: 230,
								flakeColor	: "#FFFFFF"
							},
			options			= $.extend({}, defaults, options);
		
		var interval		= setInterval( function(){
			var startPositionLeft 	= Math.random() * documentWidth - 100,
			 	startOpacity		= 0.5 + Math.random(),
				sizeFlake			= options.minSize + Math.random() * options.maxSize,
				endPositionTop		= documentHeight - 40,
				endPositionLeft		= startPositionLeft - 100 + Math.random() * 200,
				durationFall		= documentHeight * 10 + Math.random() * 5000;
			$flake
				.clone()
				.appendTo('body')
				.css(
					{
						left: startPositionLeft,
						opacity: startOpacity,
						'font-size': sizeFlake,
						color: options.flakeColor
					}
				)
				.animate(
					{
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 0.2
					},
					durationFall,
					'linear',
					function() {
						$(this).remove()
					}
				);
		}, options.newOn);
	
	};
	
})(jQuery);

function contactOverlay() {
	$('#contact').on('click', function() {
		$('#overlay-contact, .social').fadeIn(500);
		$('.page-container').css('filter','blur(3px)');
		$('.slide-up-banner').css('filter','blur(3px)');
	});
    
	$(document).on('click','#overlay-contact',function() {
        $('#overlay-contact, .social').fadeOut(300);
        $('.page-container').css('filter','blur(0)');
        $('.slide-up-banner').css('filter','blur(0)');
    });
}

function signInOverlay() {
	$('#sign-in').on('click', function() {
		$('#overlay-sign-in, .sign-in-container').fadeIn(500);
		$('.page-container').css('filter','blur(3px)');
		$('.slide-up-banner').css('filter','blur(3px)');

	});
    
	$(document).on('click','#overlay-sign-in',function() {
        $('#overlay-sign-in, .sign-in-container').fadeOut(500);
        $('.page-container').css('filter','blur(0)');
        $('.slide-up-banner').css('filter','blur(0)');

    });
}