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
			arrows: false,
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
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: false,
					slidesToShow: 1
				}
			}
			]
		});
	}

	var lengt_project = $('.index-1 .project-item').size();
	if(lengt_project > 3) { 
		$('.index-1').slick({
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

	$('.navbar-toggler').click(function() {
		$('.main-menu').addClass('open');
	});
	$('.title-menu-mobile').click(function() {
		$('.main-menu').removeClass('open');
	});
	

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

	// Responsive Menu Mobile End.



	// SHOP PRODUCT 

	if($('.filter-category').length){
		var obj = $('.filter-category > ul > li:has(ul)');
		obj.prepend('<span class="show_btn fal fa-chevron-up"></span>');
		$('.show_btn').on('click',function(event){
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

		var obj_child = $('.cat-item ul li:has(ul)');
		obj_child.prepend('<span class="show_btn_child fal fa-chevron-up pull-right"></span>');
		$('.show_btn_child').on('click',function(event){
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
	}

	var lengt_post = $('.post-gallery .project-item').size();
	if(lengt_post > 3) { 
		$('.post-gallery').slick({
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
					slidesToShow: 1
				}
			}
			]
		});

	}

	$('.slide-gallery').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows:true
	});



	// PRODUCT DETAIL
	detail_gallery();
	function detail_gallery() {
		if($('.detail-gallery').length>0){
			$('.detail-gallery').each(function(){
				var data=$(this).find(".carousel").data();
				var seff = $(this);
				if($(this).find(".carousel").length>0){
					$(this).find(".carousel").jCarouselLite({
						btnNext: $(this).find(".gallery-control .next"),
						btnPrev: $(this).find(".gallery-control .prev"),
						visible:data.visible,
						vertical:data.vertical,
					});
				}           
				$.removeData($('.detail-gallery .mid img'), 'elevateZoom');
				$('.zoomContainer').remove();
				if($(window).width()>=768) {
					$(this).find('.zoom-style1 .mid img').elevateZoom();
					$(this).find('.zoom-style2 .mid img').elevateZoom({
						scrollZoom : true
					});
					$(this).find('.zoom-style3 .mid img').elevateZoom({
						zoomType: "lens",
						lensShape: "square",
						lensSize: 150,
						borderSize:1,
						containLensZoom:true,
						responsive:true
					});
					$(this).find('.zoom-style4 .mid img').elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 750
					});
				}

				$(this).find(".carousel a").on('click',function(event) {
					event.preventDefault();
					$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
					$(this).addClass('active');
					var z_url =  $(this).find('img').attr("data-src");
					var srcset =  $(this).find('img').attr("data-srcset");
					$(this).parents('.detail-gallery').find(".mid img").attr("src", z_url);
					$(this).parents('.detail-gallery').find(".mid img").attr("srcset", srcset);
					$('.zoomWindow,.zoomLens').css('background-image','url("'+z_url+'")');
					$.removeData($('.detail-gallery .mid img'), 'elevateZoom');
					$('.zoomContainer').remove();
					if($(window).width()>=768){
						$(this).parents('.detail-gallery').find('.zoom-style1 .mid img').elevateZoom();
						$(this).parents('.detail-gallery').find('.zoom-style2 .mid img').elevateZoom({
							scrollZoom : true
						});
						$(this).parents('.detail-gallery').find('.zoom-style3 .mid img').elevateZoom({
							zoomType: "lens",
							lensShape: "square",
							lensSize: 150,
							borderSize:1,
							containLensZoom:true,
							responsive:true
						});
						$(this).parents('.detail-gallery').find('.zoom-style4 .mid img').elevateZoom({
							zoomType: "inner",
							cursor: "crosshair",
							zoomWindowFadeIn: 500,
							zoomWindowFadeOut: 750
						});
					}
				});
				$('.image-lightbox').on('click',function(event){
					event.preventDefault();
					var gallerys = $(this).attr('data-gallery');
					var gallerys_array = gallerys.split(',');
					var data = [];
					if(gallerys != ''){
						for (var i = 0; i < gallerys_array.length; i++) {
							if(gallerys_array[i] != ''){
								data[i] = {};
								data[i].src = gallerys_array[i];
							}
						};
					}
					$.fancybox.open(data);
				})
			});
		}
	}

	var lengt_product = $('.products-related .product-item').size();
	if(lengt_product > 4) { 
		$('.products-related').slick({
			slidesToShow: 4,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: false,
					slidesToShow: 3
				}
			},
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
});