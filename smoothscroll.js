/*
 Smooth scroll v1.1 | @agareginyan | GPL v3 Licensed
*/


jQuery(document).ready(function($) {

    $('#back-to-top').hide();

	$(window).scroll(function() {
        if ($(this).scrollTop() < 200) {
			$('#back-to-top') .fadeOut();
        } else {
			$('#back-to-top') .fadeIn();
        }
    });

	$('#back-to-top').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'fast');
		return false;
    });

});