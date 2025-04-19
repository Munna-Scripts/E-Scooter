// AOS JS
AOS.init();

// Slick slider Js
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