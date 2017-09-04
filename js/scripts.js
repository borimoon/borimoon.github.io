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
			$('#toggleOn').removeClass('menuopen');
			menuVisible = false;
			return;
		}
		$('#menu').css({'display':'block'});
		$('#toggleOn').toggleClass('menuopen');
		menuVisible = true;
	});
	$('#menu').click(function() {
		$(this).css({'display':'none'});
		$('#toggleOn').removeClass('menuopen');
		menuVisible = false;
	});
});
