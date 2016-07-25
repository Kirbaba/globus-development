$('.p-deals__nav_btn').click(function(event) {
	event.preventDefault();
	$('.p-deals__nav_btn').removeClass('p-deals__nav_btn-active');
	$(this).addClass('p-deals__nav_btn-active');
});