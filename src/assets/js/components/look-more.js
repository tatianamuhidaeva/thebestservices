window.addEventListener('load', function () {
  var coundAddSlides = 4;

  function getCoundAddSlides() {
    if (window.innerWidth >= 1486) {
      coundAddSlides = 4;
    } else if (window.innerWidth >= 993) {
      coundAddSlides = 3;
    } else if (window.innerWidth >= 577) {
      coundAddSlides = 2;
    } else {
      coundAddSlides = 1;
    }
  }
  getCoundAddSlides();
  window.addEventListener('resize', function () {
    getCoundAddSlides();
  });

  $("#calendar-slider").on("click", ".look-more a", function (event) {
    event.preventDefault();
    var $days = $(this).closest(".swiper-slide").find(".calendar__day");
    var j = 0;
    $days.each(function (i) {
      //условие на количество добавляемых блоков
      if (j < coundAddSlides) {
        if ($(this).css("display") == "none") {
          j++;
          $(this).css({
            'display': 'block',
            'opacity': '1'
          });
        }

      } else {

        return false;
      }
    });
    if (j == 0) {
      $(this).css("display", "none");
    }

  })


  $("#allevents-day-slider").on("click", ".look-more a", function (event) {
    event.preventDefault();
    var $days = $(this).closest(".swiper-slide").find("li");
    var j = 0;
    $days.each(function (i) {
      //условие на количество добавляемых блоков
      if (j < 1) {
        if ($(this).css("display") == "none") {
          j++;
          $(this).css("display", "block");
          $(this).animate({
            opacity: "1",
          }, 2000)
        }

      } else {

        return false;
      }
    });
    if (j == 0) {
      $(this).css("display", "none");
    }

  });


  $("section.persons-department").on("click", ".look-more a", function (event) {
    event.preventDefault();
    var $days = $(this).closest(".swiper-wrapper").find(".swiper-slide");
    var j = 0;
    $days.each(function (i) {
      //условие на количество добавляемых блоков
      if (j < 1) {
        if ($(this).css("display") == "none") {
          j++;
          $(this).css("display", "block");
          $(this).animate({
            opacity: "1",
          }, 2000)
        }

      } else {
        return false;
      }
    });
    if (j == 0) {
      $(this).css("display", "none");
    }
  });

  $("section.about-procurement").on("click", ".look-more a", function (event) {
    event.preventDefault();
    var $days = $(this).closest(".about-procurement-content").find(".about-procurement__paragraph");
    var j = 0;
    $days.each(function (i) {
      //условие на количество добавляемых блоков
      if (j < 1) {
        if ($(this).css("display") == "none") {
          j++;
          $(this).css("display", "block");
          $(this).animate({
            opacity: "1",
          }, 2000)
        }

      } else {
        return false;
      }
    });
    if (j == 0) {
      $(this).css("display", "none");
    }
  })

  $("section.about-procurement").on("click", "a.look-more-big", function (event) {
    event.preventDefault();
    var $days = $(".about-procurement").find(".about-procurement-one");
    var j = 0;
    $days.each(function (i) {
      //условие на количество добавляемых блоков
      if (j < 1) {
        if ($(this).css("display") == "none") {
          j++;
          $(this).css("display", "block");
          $(this).animate({
            opacity: "1",
          }, 2000)
        }

      } else {
        return false;
      }
    });
    if (j == 0) {
      $(this).css("display", "none");
    }
  })
})