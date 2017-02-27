jQuery(document).ready(function($){

	$('a:not([href*="#"])').click(function() {
		$('html').fadeOut('1000');
	});

});