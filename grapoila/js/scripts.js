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

// animate scroll down
$(document).ready(function (){
    $('.to-about').click(function (){
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 700);
    });
});

$(document).ready(function (){
    $('.to-contact').click(function (){
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 700);
    });
});

// animate scroll to top
$(document).ready(function (){
    $('.to-top').click(function (){
        $('html, body').animate({
            scrollTop: $('.uvp').offset().top
        }, 700);
    });
});


// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var sTop = $(this).scrollTop();

	if(Math.abs(lastScrollTop - sTop) <= delta)
	return;

	if (sTop > lastScrollTop && sTop > navbarHeight){
		$('#header').removeClass('down').addClass('up');
	} else {
			if (sTop + $(window).height() < $(document).height()) {
					$('#header').removeClass('up').addClass('down');
			}
	}

	lastScrollTop = sTop;
}
