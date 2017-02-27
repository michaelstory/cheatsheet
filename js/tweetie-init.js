jQuery(document).ready(function($){

	$('.js-tweet').twittie({ 
		dateFormat: '%b. %d, %Y', 
		template: '<h5 class="u-small u-700 u-mb0"><a href="{{options.twitter_url}}" target="_blank">@innovationprecinct</a></h5><h5 class="u-tiny u-600 u-uppercase u-ls1 u-mb0">{{date}}</h5>{{tweet}}<hr class="u-mt" />', 
		count: 2, 
		username: 'realDonaldTrump', 
		loadingText: 'Loading!',
        apiPath: '/wp-content/themes/innovationprecinct/tweetie-api/tweet.php'
	});
});