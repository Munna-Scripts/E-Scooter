// AOS JS
AOS.init({disable: 'mobile'});

// Counter Js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



$('.main_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'<i class="fa-solid arrows prr fa-chevron-left"></i>',
    nextArrow:'<i class="fa-solid arrows nrr fa-chevron-right"></i>',
    dots:true,
  });

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
// Slider js
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows:false,
});

// Slider js 2
$('.testimonials_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-sharp arrows prr fa-solid fa-arrow-left-long"></i>',
  nextArrow:'<i class="fa-sharp arrows nrr fa-solid fa-arrow-right-long"></i>',
});
