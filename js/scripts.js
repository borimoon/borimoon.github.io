// sticky header
// var vpHeight = $(window).height();
// var theHeight = (91 * vpHeight) / 100;
//
// $(window).scroll(function () {
// 	if ( $(window).scrollTop() > $('#navbar').offset().top){
// 		$('#navbar').addClass('fix');
// 	} else if ( $(window).scrollTop() < theHeight){
// 		$('#navbar').removeClass('fix');
// 	}
// });

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
