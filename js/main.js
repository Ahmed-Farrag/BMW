$(document).ready(function () {
	$('.to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 2000)
	});
	$('a').click(function () {
		let aHref = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(aHref).offset().top
		}, 1000)
	});
	AOS.init();
	$('.parallax').parallax({
		imageSrc: 'img/bm.jpg'
	});
});
$(document).ready(function () {
	$("#testimonial-slider").owlCarousel({
		loop: true,
		pagination: true,
		autoplay: true,
		dots: false,
		margin: 10,
		navText: [$('.owl-nav .owl-prev'), $('.owl-nav .owl-next')],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: true,
				loop: false
			}
		},
	});
});
$(document).ready(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 500
	});
});
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 200) {
		$('.scrolling-navbar').addClass('top-nav-collapse');
	} else {
		$('.scrolling-navbar').removeClass('top-nav-collapse');
	}
});
$('.main-naigation').onePageNav({
	currentClass: 'active'
});
$(window).on('load', function () {
	$('.main-naigation').onePageNav({
		currentClass: 'active'
	});
	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 200) {
			$('.fixd-top').addClass('mnu-bg');
		} else {
			$('.fixed-top').removeClass('menu-bg');
		}
	});
});
let coloContainers = $(".items");
coloContainers.eq(0).css("backgroundImage", "url('img/blue.png')");
coloContainers.eq(1).css("backgroundImage", "url('img/white.png')");
coloContainers.eq(2).css("backgroundImage", "url('img/red.png')");
coloContainers.eq(3).css("backgroundImage", "url('img/black.png')");
coloContainers.click(function () {
	let col = $(this).css("backgroundImage");
	$(".header").css("backgroundImage", col)
});
$(document).ready(function () {
	let $btns = $('.project-area .button-group button');
	$btns.click(function (e) {
		$('.project-area .button-group button').removeClass('active');
		e.target.classList.add('active');
		let selector = $(e.target).attr('data-filter');
		$('.project-area .grid').isotope({
			filter: selector
		});
		return false;
	});
	$('.project-area .button-group #btn1').trigger('click');
	$('.project-area .grid .test-popup-link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});