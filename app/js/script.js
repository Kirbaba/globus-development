$('.p-deals__nav_btn').click(function(event) {
	event.preventDefault();
	$('.p-deals__nav_btn').removeClass('p-deals__nav_btn-active');
	$(this).addClass('p-deals__nav_btn-active');
});

$(function() {
  $(".storey").click(function(e) {
    e.preventDefault();
    $(".storey").removeClass('active');
    $(this).addClass('active');
  })
});
$(document).ready(function() {
	$('#go').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal_form')
					.css('display', 'block')
					.animate({opacity: 1, top: '26%'}, 200);
		});
	});

	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ 
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});
