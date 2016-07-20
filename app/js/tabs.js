jQuery(document).ready(function($) {
	$('.p-projects__tab_btn').click(function(event) {
		event.preventDefault();
		$('.p-projects__tab_btn').removeClass('p-projects__tab_btn-active');
		$(this).addClass('p-projects__tab_btn-active');

		var target = ($(this).data('tab'));

		$('.p-projects__tebcontent').hide();
		$("."+ target).show();
	});


});
