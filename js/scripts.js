// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();

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
		$('#navbar').removeClass('scroll-down').addClass('scroll-up');
	} else {
			if (sTop + $(window).height() < $(document).height()) {
					$('#navbar').removeClass('scroll-up').addClass('scroll-down');
			}
	}

	lastScrollTop = sTop;
}

// mobile menu show-hide
$(function() {
	var menuVisible = false;
	$('#toggleOn').click(function() {
		if (menuVisible) {
			$('#menu').css({'display':'none'});
			menuVisible = false;
			return;
		}
		$('#menu').css({'display':'block'});
		menuVisible = true;
	});
	$('#menu').click(function() {
		$(this).css({'display':'none'});
		menuVisible = false;
	});
});

// slider
$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function()
	{

	var WindowWidth = $('.slider').width();
	var SlideCount = $('.carousel li').length;
	var SlidesWidth = SlideCount * WindowWidth;

   $.global.item = 0;
    $.global.total = SlideCount;

  $('.prev').click(function() { Slide('back'); });
  $('.next').click(function() { Slide('forward'); });

  });

function Slide(direction)
	{

    if (direction == 'back') { var $target = $.global.item - 1; }
    if (direction == 'forward') { var $target = $.global.item + 1; }

    if ($target == -1) { DoIt($.global.total-1); }
    else if ($target == $.global.total) { DoIt(0); }
    else { DoIt($target); }

	}

function DoIt(target)
	{

	  var $windowwidth = $('.slider').width();
		var $margin = $windowwidth * target;
	  var $actualtarget = target+1;

	  $(".carousel li:nth-child("+$actualtarget+")").addClass('alive');

	  $('.carousel').css('transform','translate3d(-'+$margin+'px,0px,0px)');

	  $.global.item = target;
	}
