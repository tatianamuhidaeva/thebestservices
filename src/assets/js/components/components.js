$(document).ready(function () {

  var fromMain = document.querySelector('.navblock__thumbs-frommain');
  var imgsMain = document.querySelectorAll('.navblock__main-img');
  var blocksMain = document.querySelectorAll('.navblock__main-item');

  function copyImg(index) {
    fromMain.innerHTML = "";
    fromMain.append(imgsMain[index].querySelector('.navblock__main-img-figure').cloneNode('true'));
  }
  if (imgsMain.length != 0) {
    copyImg(0);
  }

    var navblockThumbs = new Swiper('.navblock__thumbs-container', {
      direction: 'vertical',
      slidesPerView: 6,
      loop: false,
      allowTouchMove: false,
      breakpoints: {
        576: {
          loopedSlides: 6,
          loop: true,
        }
      }
    });
    var navblockMain = new Swiper('.navblock__main-container', {
      effect: 'fade',
      speed: 500,
      direction: 'vertical',
      allowTouchMove: false,
      thumbs: {
        swiper: navblockThumbs
      },
      on: {
        slideChange: function () {
          navblockMain.thumbs.swiper.slideToLoop(navblockMain.realIndex);
          copyImg(navblockMain.realIndex);
        }
      },
      breakpoints: {
        576: {
          thumbs: {
            swiper: navblockThumbs,
            loopedSlides: 6,
            loop: true,
          },
        }
      }
    });
  /**/
var date = new Date();
var cYear = date.getFullYear();
var cMonth = date.getMonth() + 1;
var cAllDate = cMonth+'.'+cYear;
var cIndex = $('.calendar-thumbs-slide[data-date="'+cAllDate+'"]').attr('data-inn');
//console.log(cAllDate);
//console.log(Number(cIndex));
/**/
    var calendarThumbs = new Swiper('#calendar-thumbs', {
      slidesPerView: 1,
      speed: 800,
      centeredSlides: true,
      loop: true,
      allowTouchMove: false,
      navigation: {
        nextEl: '.calendar-thumbs-next',
        prevEl: '.calendar-thumbs-prev',
      },
      breakpoints: {
        577: {
          slidesPerView: 3,
        },
      }
    });

    var calendarSlider = new Swiper('#calendar-slider', {
      effect: 'fade',
      centeredSlides: true,
      initialSlide: Number(cIndex),
      speed: 800,
      allowTouchMove: false,
      thumbs: {
        swiper: calendarThumbs,
      },
      on: {
        slideChange: function () {
          $('#calendar-slider .calendar__day').css({
            'display': '',
            'opacity': ''
          });
        },
      }
    });

//$('')./on()
$(document).on('click','#calendar-thumbs .swiper-slide-next',function(){
  calendarThumbs.slideNext();
  calendarSlider.slideNext();
})
/*$(document).on('click','.calendar-thumbs-next',function(){
  calendarSlider.slideNext();
})
$(document).on('click','.calendar-thumbs-prev',function(){
  calendarSlider.slidePrev();
})*/
    var alleventsDayThumbs = new Swiper('#allevents-day-thumbs', {
      slidesPerView: 1,
      centeredSlides: true,
      // loop: true,
      allowTouchMove: false,
      navigation: {
        nextEl: '.allevents-day-thumbs-next',
        prevEl: '.allevents-day-thumbs-prev',
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          navigation: {},
        },
      },
    });
    
    var alleventsDaySlider = new Swiper('#allevents-day-slider', {
      effect: 'fade',
      speed: 500,
      centeredSlides: true,
      allowTouchMove: false,
      // loop: true,
      thumbs: {
        swiper: alleventsDayThumbs,
      },
      on: {
        slideChange: function () {
          alleventsDaySlider.thumbs.swiper.slideToLoop(alleventsDaySlider.realIndex);
          $('#allevents-day-slider li').css({
            'display': '',
            'opacity': ''
          });
        }
      },
    });
  if (document.querySelector('#calendar-slider') != null) {
    calendarSlider.thumbs.swiper.slideToLoop(1);
  }
  /*  Переход от дня в слайдере к блоку с событиями  */
  $(".calendar-slider").on("click", ".calendar__day a", function (event) {
    ;
    alleventsDaySlider.slideTo($("#" + $(this).find('time').attr('datetime')).index());
    toHref(this, event);
  });

  if (document.querySelectorAll('.microfinance-calc__thumbs-container').length > 0) {
    var microfinanceCalcThumbs = new Swiper('.microfinance-calc__thumbs-container', {
      direction: 'vertical',
      slidesPerView: 7,
      centeredSlides: true,
      loopedSlides: 7,
      loop: true,
      allowTouchMove: false,
      breakpoints: {
        576: {
        }
      }
    });
  }
    var microfinanceCalcMain = new Swiper('.microfinance-calc__main-container', {
      effect: 'fade',
      speed: 500,
      allowTouchMove: false,
      // centeredSlides: true,
      thumbs: {
        swiper: microfinanceCalcThumbs,
        loopedSlides: 7,
        loop: true,
      },
      on: {
        slideChange: function () {
          microfinanceCalcMain.thumbs.swiper.slideToLoop(microfinanceCalcMain.realIndex);
        }
      },
      breakpoints: {
        576: {

        }
      }
    });

    var pictureSlider = new Swiper('#picture-slider', {
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 22,
      navigation: {
        nextEl: '.picture-next',
        prevEl: '.picture-prev',
      },
      breakpoints: {
        577: {
          slidesPerView: 2,
        },
        993: {
          slidesPerView: 3,
        }
      }
    });
    var personSliders = document.querySelectorAll('.persons-department-container');
    var personsDepartmentSliders = [];
    for (var i = 0; i < personSliders.length; i++) {
      var next = "#" + personSliders[i].id + ' ~ .persons-department-next';
      var prev = "#" + personSliders[i].id + ' ~ .persons-department-prev';
      personsDepartmentSliders.push(new Swiper("#" + personSliders[i].id, {
        init: false,
        slidesPerView: 1,
        speed: 500,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        breakpoints: {
          680: {
            slidesPerView: 2,
          },
          993: {
            slidesPerView: 3,
          },
          1486: {
            slidesPerView: 4,
          }
        }
      }));

    function initPersonSliders() {
      if (window.innerWidth >= 577) {
        for (var i = 0; i < personsDepartmentSliders.length; i++) {
          personsDepartmentSliders[i].init();
        }
      }
    }

    initPersonSliders();

    window.addEventListener('resize', function () {
      initPersonSliders();
    });
  }

});