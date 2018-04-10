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
    $('#menu').css({'display':'flex'});
    $('#toggle').toggleClass('menuopen');
    menuVisible = true;
  });
  $('#menu').click(function() {
    $(this).css({'display':'none'});
    $('#toggle').removeClass('menuopen');
    menuVisible = false;
  });
});
