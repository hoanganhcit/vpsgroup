// HOMEPAGE

$(window).scroll(function(){
	if ($(window).scrollTop() >= 200) {
		$('.navbar-menu').addClass('fixed-menu');
	}
	else {
		$('.navbar-menu').removeClass('fixed-menu');
	}
});

$(document).ready(function(){

	$(window).on("load", function () {
		setTimeout(function () {
			$("#preloader").fadeOut("slow", function () {});
		}, 1000);
	});

	var lengt_product = $('.product-item').size();
	if(lengt_product > 5) { 
		$('.products-home').slick({
			centerMode: true,
			centerPadding: '30px',
			slidesToShow: 5,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			responsive: [
			{
				breakpoint: 1400,
				settings: { 
					arrows: false,
					centerMode: true,
					centerPadding: '30px',
					slidesToShow: 5
				}
			},
			{
				breakpoint: 900,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});
	}

	var lengt_project = $('.project-item').size();
	if(lengt_project > 3) { 
		$('.project-home').slick({
			slidesToShow: 3,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			arrows:false,
			responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
			]
		});

	}

	var lengt_post = $('.post-home .project-item').size();
	if(lengt_post > 2) { 
		$('.post-home').slick({
			slidesToShow: 2,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			arrows:false,
			responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
			]
		});

	}


	$('.count').each(function () {
		$(this).prop('Counter',100).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	// Responsive Menu Mobile 

	$('.droppdown-submenu').on('click',function(event){
		event.preventDefault();
		if ($(this).hasClass('fa-chevron-up')) {
			$(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
		}else{
			$(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}
		if ($(this).parent().children('.sub-menu-nav').is(':visible')) {
			$(this).parent().children('.sub-menu-nav').slideUp('fast');
		} else {
			$(this).parent().children('.sub-menu-nav').slideDown('fast');
		}
	});
	$('.droppdown-children').on('click',function(event){
		event.preventDefault();
		if ($(this).hasClass('fa-chevron-up')) {
			$(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
		}else{
			$(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}
		if ($(this).parent().children('.children').is(':visible')) {
			$(this).parent().children('.children').slideUp('fast');
		} else {
			$(this).parent().children('.children').slideDown('fast');
		}
	});

	// Responsive Menu Mobile End

});