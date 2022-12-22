$(function () {


	$("#rateYo").rateYo({
		starWidth: "36px",
		normalFill: "#D7D1C7",
		ratedFill: "#FFB648", 
		numStars: 5,
		halfStar: true,
		rating: 4.5,
    	spacing: "2px",
	});
	
// ---------------------------------------------------------
	var mixer = mixitup('.our__filter-list');
	$('.slider__inner-general').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				 breakpoint: 815,
				 settings: {
					  slidesToShow: 1,
				 }
			}
	  ]
	})
	$('.slider__arrow-prev').on('click',function (e) {
		e.preventDefault()
		$('.slider__inner-general').slick('slickPrev')
	})	

	$('.slider__arrow-next').on('click',function (e) {
		e.preventDefault()
		$('.slider__inner-general').slick('slickNext')
	})

// ---------------------------------------------------------
	$('.acc__content-link').on('click',function (e) {
		e.preventDefault()
		if($(this).hasClass('acc__content-link--active')) {
			$(this).removeClass('acc__content-link--active')
			$(this).children('.acc__content-text').slideUp()
		} else {
			$('.acc__content-link').removeClass('acc__content-link--active')
			$('.acc__content-text').slideUp()
			$(this).addClass('acc__content-link--active')
			$(this).children('.acc__content-text').slideDown()
		}
		})

// ---------------------------------------------------------
		ymaps.ready(init);

		function init() {
		  var map = new ymaps.Map("map", {
			center: [40.71636542785752, -74.00389944726564], // ваши данные
			zoom: 12
		});
		
		map.controls.remove('geolocationControl'); // удаляем геолокацию
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
		map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) 
}

$(".header__navbar-list a, .bottom__inner2-inner a").on("click", function (e) {
	
			  //отменяем стандартную обработку нажатия по ссылке
	
			  e.preventDefault();
	
	 
	
			  //забираем идентификатор бока с атрибута href
	
			  var id  = $(this).attr('href'),
	
	 
	
			  //узнаем высоту от начала страницы до блока на который ссылается якорь

					top = $(id).offset().top;
	
				

			  //анимируем переход на расстояние - top за 1500 мс

			  $('body,html').animate({scrollTop: top}, 1000);

		 });
	// -----------------MEDIA----------------------------------------
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('.burger').addClass('burger--follow')
		} else {
			$('.burger').removeClass('burger--follow')
		}
	})
	setInterval(() => {
		if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top-open') === false ) {
			$('.burger').addClass('burger--follow')
		} else {
			$('.burger').removeClass('burger--follow')
		}
	}, 0);




	$('.burger, .overlay, .header__navbar-list a').on('click',function (e) {
		e.preventDefault()
			$('.header__top').toggleClass('header__top-open')
			$('.overlay').toggleClass('overlay--show')
		})




		$('.list-info-sub--slide').on('click', function () {
			$(this).next().slideToggle()
		 })


 });


