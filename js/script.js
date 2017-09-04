$(function(){
	'use strict';
		console.log('ready');

//MENU-NAV - START

	//Funkcja pokazywania i ukrywania tła menu:

	var okno = $(window);
	var menu = $('.main-menu');
	okno.scroll(function(){
		if (okno.scrollTop()>=100){
			menu.addClass('scroll');
			$('.after-back').addClass('back');
		} else {
			menu.removeClass('scroll');
			$('.after-back').removeClass('back');
		}
	});


	//Funkcje przeskakiwania do konkretnych miejsc na stronie:
	$(document).on('click','a[href^="#"]',function(event){
		var menuHeight = $('#menu-nav').height();

		$('html, body').animate({
			scrollTop:$($.attr(this, 'href')).offset().top - menuHeight
		},500);
	});

	$(document).on('click','button[name^="#"]',function(event){
		var menuHeight = $('#menu-nav').height();

		$('html, body').animate({
			scrollTop:$($.attr(this, 'name')).offset().top - menuHeight
		},500);
	});

	//Funkcje rozwijania menu nawigacyjnego:
	$(".hamburger").click(function () {
		this.classList.toggle("change");
		var navText = $(".sd-nav2");
		navText.toggle(1000);
	});

	$(".js5").click(function(){
		$(".js-text").toggle(1000);
	});
	$(".css").click(function(){
		$(".css-text").toggle(1000);
	});

	var mobileViewport = window.matchMedia("(max-width: 767px)");

	//Funkcja składania menu nawigacyjnego po zwiększeniu okna:
	mobileViewport.addListener(function(mq){
		if(mq.matches) {
			$('#side-nav').addClass('sd-nav2');
			$('.sd-nav2').css('display','none');
		} else {
			$('.hamburger').removeClass('change');
			 $('.sd-nav2').css('display','block');
			$('#side-nav').removeClass('sd-nav2');
		}
	});

	//MENU-NAV - STOP


	//Funkcje poruszania w grze:
	$(document).on('keydown',function(event){
		var object = $('#main-person');
		var key = event.which;

		switch (key) {
			case 37: object.css('margin-left','-=10');
				break;
			case 39: object.css('margin-left','+=10');
				break;
			case 40: object.animate({marginTop:'+=100px'});
				break;
			case 38: object.animate({marginTop:'-=100px'});
				break;
			default:

		}
	});
	//Koniec funksji poruszania w grze.

	//HEADER START



	//HEADER STOP

	//Portfolio START:

	$('.left').click(function(){
		// $('.portfolio-items:first').before($('.portfolio-items:last'));
		//$('#carousel:nth-child(1)').css("transform", "translate3d(50%,0,0px)");
		// $('.portfolio-item1').addClass('go1');
		// $('.portfolio-item2').addClass('go2');
		// $('.portfolio-item3').addClass('go3');

		// $('.portfolio-item1').animate({
		// 	marginLeft: '+=250px',
		// });
		// $('.portfolio-item2').animate({
		// 	marginLeft: '-=500px',
		// });
		// $('.portfolio-item3').animate({
		// 	marginLeft: '+=250px',
		// });

		// if($('.portfolio-item3').css("margin-left","0")) {
		// 	$('.portfolio-item3').animate({marginLeft:'+=500px'});
		// 	console.log('0');
		// }if($('.portfolio-item3').css("margin-left","500px")) {
		// 	$('.portfolio-item3').animate({marginLeft:'-=250px'});
		// 	console.log('1');
		// }

	});

	$('.right').click(function(){
		$('.portfolio-items:last').after($('.portfolio-items:first'));
	});
	//Portfolio resp START

	var slider = $("#portfolio-main");
	var slideShow = $("#carousel");
	var slideCount = $(".portfolio-items").length;
	var slideWidth = 100/slideCount;
	var slideIndex = 0;

		//Nadanie dynamicznejwielkości kontenerowi #carousel:
	slideShow.css('width', slideCount * 100 + '%');

		//4.  przypisanie takiego odstępu od lewej strony, aby każdy kolejny slajd był dalej od lewego boku, przez co wyszedł poza zakres widziany:
	slideShow.find('.portfolio-items').each(function(index){
		$(this).css({
			'width': slideWidth + '%',
			'margin-left': slideWidth * index + '%'
		});
	});

		//5. Funkcja click dla przycisków next i prev, żeby przełączały slajdy:
	$('.next-slide').click(function(e){
		e.preventDefault();
		slide(slideIndex + 1);
	});

	$('.prev-slide').click(function(e){
		e.preventDefault();
		slide(slideIndex - 1);
	});

		//5.B. Funkcja przełączania slajdów - dotykowa:
	$('.portfolio-items').on("swipeleft",function(e){
		console.log('lewo');
		e.preventDefault();
		slide(slideIndex + 1);
	});

	$('.portfolio-items').on("swiperight",function(e){
		console.log('prawo');
		e.preventDefault();
		slide(slideIndex - 1);
	});

		//6.
	function slide(newSlideIndex) {
		if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return};
			var slideCaption = $('.slider-caption').eq(newSlideIndex);
			slideCaption.hide();

			var marginLeft = (newSlideIndex) * (-100) + '%';
					//animacja:
			slideShow.animate({'margin-left': marginLeft},800, function(){
				slideIndex = newSlideIndex;
				slideCaption.fadeIn('slow');
			});
		};

	//Portfolio resp END

	//Portfolio END


});
