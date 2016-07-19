var swiper = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    paginationClickable: true,
    loop: true
});

$(window).resize(function() {
	var ww = $(window).width();
	var c = 495  / 1170;
	var sheight = ww * c;
	var banner = document.getElementsByClassName('banner')[0];
	if (ww < 1170) {
		banner.style.height = sheight + 'px';
	};
	if (ww >= 1170) {
		banner.style.height = '500px';
	};
	swiper.onResize();
});