$(document).ready(function () {

  var plane = document.querySelector('#feedback__plane');

  function parallaxPlane(e) {
    plane.style.transform = "translate(".concat(-(e.clientX - 900) / 10, "px, ").concat(-(e.clientY) / 9, "px)");
  }


    // другие страницы
    // Отслеживание самолетика на форме feedback
    flag = true;
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('#feedback__plane').offset().top - 800) {
        $('#feedback__plane').addClass('animation_plane');
        if (flag) {
          setTimeout(document.addEventListener('mousemove', function (e) {
            parallaxPlane(e);
          }), 200);
          flag = false;
        }
      }
    });
  
});