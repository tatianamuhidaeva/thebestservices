$(document).ready(function () {
 $('#toggle').on('click', function(){
   $('.header-nav').toggleClass('open');
 });
 $(document).on('mouseup', function (e){ 
  var menu = $(".header-nav.open");
  if (!menu.is(e.target)
      && menu.has(e.target).length === 0
      && !$('#toggle').is(e.target)) { 
    menu.removeClass('open'); 
  }
});

})