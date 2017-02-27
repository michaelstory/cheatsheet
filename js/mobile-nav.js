jQuery(document).ready(function($){

	$('.js-c-hamburger').click(function() {

		$('html').toggleClass('mob-nav--active');

	});


	$("label[for='c-hamburger__input']").click(function(e) {
		e.preventDefault();
	});

});