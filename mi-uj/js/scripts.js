// animate scroll down
$(document).ready(function (){
    $('.cta-main').click(function (){
        $('html, body').animate({
            scrollTop: $('.uvp').offset().top
        }, 700);
    });
});

// animate scroll top
$(document).ready(function (){
    $('.top').click(function (){
        $('html, body').animate({
            scrollTop: $('.landing').offset().top
        }, 700);
    });
});

// mobile menu show-hide
$(function() {
  var menuVisible = false;
  $('#toggle').click(function() {
    if (menuVisible) {
      $('#menu').css({'display':'none'});
      $('#toggle').removeClass('menuopen');
      menuVisible = false;
      return;
    }
    $('#menu').css({'display':'block'});
    $('#toggle').toggleClass('menuopen');
    menuVisible = true;
  });
  $('#menu').click(function() {
    $(this).css({'display':'none'});
    $('#toggle').removeClass('menuopen');
    menuVisible = false;
  });
});
