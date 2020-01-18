window.addEventListener('load', function () {
  $('.close__btn').on('click', function(){
    $(this).closest('.popup').toggleClass('popup-show');
  })
  $('.btn-auth').on('click', function(){
    $('.popup-auth').toggleClass('popup-show');
  })
});