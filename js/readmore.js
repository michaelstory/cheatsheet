jQuery(document).ready(function($){

  $('.js-readmore').each(function(){
    var text = $(this);
        h = text[0].scrollHeight; 

    if(h > 160) {
      $(this).next().addClass('less').css({'display': 'block'});
    }
  });

  $('.js-readmore-btn').click(function(e) {
    e.stopPropagation();

    if ($(this).hasClass('less')) {
        $(this).removeClass('less');
        $(this).addClass('more');
        $(this).children('.text').text('Show less');
        var text = $(this).prev();
        h = text[0].scrollHeight; 
        $(this).prev().animate({'height': h});
    } else {
        $(this).addClass('less');
        $(this).removeClass('more');
        $(this).children('.text').text('Read more');
        $(this).prev().animate({'height': '160px'});
    }  
  });

});