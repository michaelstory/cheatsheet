jQuery(document).ready(function($){

    $('.js-toggle-trigger').on('click',function(e){
    e.preventDefault();

        if (!$(this).hasClass('c-toggle-trigger--active')) {
            
            var currentAttrValue=jQuery(this).attr('href');
            $(currentAttrValue).fadeIn(400).addClass('c-toggle-content--active');
            $(this).addClass('c-toggle-trigger--active');

            // $('html, body').animate({
            //     scrollTop: $(currentAttrValue).offset().top
            // }, 1000);
        }

        else {
            $(this).removeClass('c-toggle-trigger--active');
            var currentAttrValue=jQuery(this).attr('href');
            $(currentAttrValue).fadeOut(400).removeClass('c-toggle-content--active');

        }
    
    });

});