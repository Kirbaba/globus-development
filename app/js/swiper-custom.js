var swiper_arr = [];

var swiper = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    paginationClickable: true,
    loop: true
});

var swiper_deals = new Swiper('.deals__carousel', {
    pagination: '.deals__carousel-pagination',
    nextButton: '.deals__carousel-next',
    prevButton: '.deals__carousel-prev',
    spaceBetween: 30,
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

var store__info = new Swiper('.p-store__info_carousel', {
    nextButton: '.p-store__info_carousel-next',
    prevButton: '.p-store__info_carousel-prev',
    spaceBetween: 0,
    loop: true,
});

$(".p-store__photoreport_item").click(function(event) {
    event.preventDefault();
    var slide = $(this).data("slide");
    slide = (slide - 1);
    store__info.slideTo(slide);
});



/*$(window).resize(function() {
	var ww = $(window).width();
	var c = 495  / 1170;
	var sheight = ww * 0.75;
	var banner = document.getElementsByClassName('banner')[0];
	if (ww < 1170) {
		banner.style.height = sheight + 'px';
	};
	if (ww >= 1170) {
		banner.style.height = '500px';
	};
	swiper.onResize();
});*/