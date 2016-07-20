jQuery(document).ready(function($) {
	$('.navigation__btn').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('navigation__btn-active');
		$('.navigation__menu').slideToggle();
	});

	var ww = $(window).width();
	
	if (ww <= 736) {
		
		var span = document.createElement('span');
		span.className = 'js_open_menu';
		span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.458 201.457">\<path d="M193.177 46.233l8.28 8.28L100.734 155.24 0 54.496l8.28-8.28 92.46 92.46 92.437-92.442z"/></svg>';
		$('.navigation__menu li').each(function() {
			var but_menu = $(this).find("ul");
			if ( but_menu.length > 0) {
				$(this).children('a').unbind('mouseenter mouseleave');
				$(this).children('a').append(span);
			}
		});
		
		$(document).on('click', '.js_open_menu', function(event) {
			event.preventDefault();
			$('.navigation__menu li ul').slideToggle();
			$('.js_open_menu').toggleClass('js_open_menu_active');
		});
	};

});

