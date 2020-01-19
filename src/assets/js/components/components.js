$(document).ready(function () {

    var mainSlider = new Swiper('.main-swiper-container', {
      slidesPerView: 1,
      speed: 500,
      navigation: {
        prevEl: '.main-swiper-arrow--prev',
        nextEl: '.main-swiper-arrow--next',
      },
    });
    var servicesSlider = new Swiper('.services-swiper-container', {
      slidesPerView: 1,
      initialSlide: 1,
      centeredSlides: false,
      speed: 500,
      loop: true,
      navigation: {
        prevEl: '.services-swiper-arrow--prev',
        nextEl: '.services-swiper-arrow--next',
      },
      breakpoints: {
        767: {
          slidesPerView: 3,
          centeredSlides: true,
        },
        575: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      }
    });
    var feedbackThumbs = new Swiper('.feedback-thumbs-container', {
      spaceBetween: 16,
      slidesPerView: 2,
      breakpoints: {
        575: {
          slidesPerView: 3,
        },
      }
    });
    var feedbackTop = new Swiper('.feedback-top-container', {
      navigation: {
        nextEl: '.feedback-top-arrow--next',
        prevEl: '.feedback-top-arrow--prev',
      },
      thumbs: {
        swiper: feedbackThumbs
      },
      on: {
        slideChange: function () {
          feedbackTop.thumbs.swiper.slideToLoop(feedbackTop.realIndex);
        }
      },
    });
});