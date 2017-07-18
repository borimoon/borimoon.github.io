// mobile menu show-hide
$(function() {
	var menuVisible = false;
	$('#toggle').click(function() {
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

// mobile-menu open-close
$(document).ready(function(){
	$('#toggle').click(function(){
		$(this).toggleClass('menuopen');
	});

	$('#menu').click(function(){
		$('#toggle').removeClass('menuopen');
	});
});


// stop youtube video
$(function(){
	$('.stop').click(function(){
		$('iframe').attr('src', $('iframe').attr('src'));
	});
});
