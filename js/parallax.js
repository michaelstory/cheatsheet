jQuery(window).scroll(function() {

   var wScroll = $(this).scrollTop();
   
   $('.c-header__middle-layer, .c-header__super-top, .c-header__overlay').css({
        'transform' : 'translate(0px, '+ -wScroll *0.5 +'px)'
   });
   

   if(jQuery(window).width() > 1000) {
		$('.home .c-isotope__item:nth-child(1)').css({
     	'transform' : 'translate(0px, '+ -wScroll *0.6 +'px)'
		});
   		$('.home .c-isotope__item:nth-child(2)').css({
        	'transform' : 'translate(0px, '+ -wScroll *0.8 +'px)'
   		});
   		$('.home .c-isotope__item:nth-child(3)').css({
        	'transform' : 'translate(0px, '+ -wScroll *0.4 +'px)'
   		});
   		$('.home .c-isotope__item:nth-child(4), .home .c-isotope__item:nth-child(6)').css({
        	'transform' : 'translate(0px, '+ -wScroll *0.2 +'px)'
   		});
      $('.home .c-isotope__item:nth-child(5), .home .c-isotope__item:nth-child(7)').css({
          'transform' : 'translate(0px, '+ -wScroll *0.4 +'px)'
      });
   };

   if(jQuery(window).width() > 1366) {
    $('.home .c-isotope__item:nth-child(7)').css({
          'transform' : 'translate(0px, '+ -wScroll *0.2 +'px)'
      });
    $('.home .c-isotope__item:nth-child(6)').css({
          'transform' : 'translate(0px)'
      });
   };
});