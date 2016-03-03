/*
 Smooth scroll v1.2 | @agareginyan | GPL v3 Licensed
*/


jQuery(document).ready(function() {

    jQuery('#back-to-top').hide();

    jQuery(window).scroll(function() {
                     if (jQuery(this).scrollTop() < 200) {
                        jQuery('#back-to-top') .fadeOut();
                     } else {
                        jQuery('#back-to-top') .fadeIn();
                     }
    });

    jQuery('#back-to-top').on('click', function() {
                         jQuery('html, body').animate({scrollTop:0}, 'fast');
                         return false;
    });

});