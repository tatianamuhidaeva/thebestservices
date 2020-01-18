$(document).ready(function () {
  function getComputedTranslateY(obj) {
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(obj),
      transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  /* Toggle-menu */
  // let header = document.querySelectorAll('#header>.header-row')[1];
  let body = document.querySelector('body');
  let menu = document.querySelector('#nav');
  let header = document.querySelector('#header');
  let toggle = document.querySelector('#header-humburger');



  function toggleHeight(elem, height) {
    if (parseInt(getComputedTranslateY(elem)) <= 0) {
      elem.style.transform = "translateY(" + height + ")";
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      elem.style.transform = "translateY(-100%)";
    }
  }
  toggle.addEventListener('mouseover', function () {
    header.classList.remove('nav-up');
  });
  header.addEventListener('mouseleave', function (e) {
      header.classList.add('nav-up');
  });
  toggle.addEventListener('click', function () {
    var adaptTop;

    if (window.innerWidth >= 993) {
      adaptTop = '144px';
    } else if (window.innerWidth >= 577) {
      adaptTop = '78px';

    } else {
      adaptTop = '60px';
    }
    toggleHeight(menu, adaptTop);
  });

  /*  Аккордион на не главных страницах */
  $('.accordion__item-checkbox').on('change', function () {
    if (this.checked == true) {
      $('.accordion__item-checkbox').prop('checked', false);
      this.checked = true;
    }
  })

  /*Анимация переход по ссылкам*/
  function toHref(obj, event) {
    event.preventDefault();
    var id = $(obj).attr('href'),
      top = $(id).offset().top - 50;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  }
  $(".tostart").on("click", function (event) {
      toHref(this, event);
  });


  /*Блок навиации на главной странице*/
  $(".navblock__thumbs").on("click", "a", function (event) {
    if (window.innerWidth <= 576) {
      toHref(this, event);
    } else {
      event.preventDefault();
    }
  });
  /*Барабан на странице микрозаймов*/
  $(".microfinance-calc__thumbs").on("click", "a", function (event) {
    event.preventDefault();
    $(".microfinance-calc__thumbs-item").removeClass("swiper-slide-thumb-prev");
    $(".microfinance-calc__thumbs-item").removeClass("swiper-slide-thumb-next");
    $(this).prev().addClass('swiper-slide-thumb-prev');
    $(this).next().addClass('swiper-slide-thumb-next');
  });


  $('[data-fancybox="gallery"]').fancybox();

  //---Select----
  $('.select-options input[name="lawform"]').change(function () {
    $('label.select .select__placeholder').hide();
    $('label.select .select__text').text($('.select-options input[name="lawform"]:checked + label').text());
    $('label.select .select__switch').prop('checked', false);
  })

  //---Settings-page----
  $('.settings-form__tochange').click(function (event) {
    event.preventDefault();
    $(this).closest('.settings-form').find('.settings-form-read').hide();
    $(this).closest('.settings-form').find('.settings-form-edit').css('display', 'flex');
  })
  $('.settings-form__btn--cancel').click(function (event) {
    event.preventDefault();

    $(this).closest('.settings-form').find('.settings-form-edit').hide();
    $(this).closest('.settings-form').find('.settings-form-read').css('display', 'flex');
  })
  $('.settings-events__close').click(function (event) {
    event.preventDefault();

    $(this).closest('.settings-events__item').remove();
  })

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
  
    $(window).scroll(function (event) {
      didScroll = true;
    });
  
    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);
  
    function hasScrolled() {
      var st = $(this).scrollTop();
  
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
  
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up');
        }
      }
      lastScrollTop = st;
    }
})