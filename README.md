# Inuit CSS

<https://github.com/inuitcss/inuitcss>

<https://github.com/batchdev/inuitcss>

---



# 3rd Party Helpers

## Text Transform
<https://convertcase.net/>

## Word and Letter Count
<https://wordcounter.net/>

---



# Timber Twig

## Loop iteration

Use Slice

```
{% for i in [1, 2, 3, 4, 5]|slice(1, 2) %}
    {# will iterate over 2 and 3 #}
{% endfor %}

{{ '12345'|slice(1, 2) }}

{# outputs 23 #}
```

```
{% for i in [1, 2, 3, 4, 5]|slice(start, length) %}
    {# ... #}
{% endfor %}
```

## Loop iteration and grab random ACF

First randomize in PHP file, got this from <https://support.advancedcustomfields.com/forums/topic/random-repeater/>

```
$rows = get_field('review');
if($rows)
{
	shuffle( $rows );
 
	$context['reviews'] = $rows;	
}
```
then in twig file loop
```
{% for item in reviews|slice(0,2) %}
...
{% endfor %}
```

### Truncate

Truncate and allow for custom ...
```
Twig:

<p class="entry-meta">{{ post.character.origin_story | truncate(8) }} ...</p>
Output:

<p class="entry-meta">Bruce Wayne's parents were shot outside the opera ...</p>
```

or ... by default

```
Twig:

<p class="intro">{{post.post_content|excerpt(30)}}...</p>
Output:

<p class="intro">Steve-O was born in London, England. His mother, Donna Gay (née Wauthier), was Canadian, and his father, Richard Glover, was American. His paternal grandfather was English and his maternal step-grandfather ...</p>
```

---

# Google Maps

## Custom Map Simple (experience cape campbell)

```
<style>
   #map {
    height: 500px;
    width: 100%;
   }
</style>

<div id="map"></div>
<script>
	function initMap() {
		var cape_campbell = {lat: -41.727409390266, lng: 174.27447154815695};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: cape_campbell,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			scrollwheel: false,
			//navigationControl: false,
			//mapTypeControl: false,
			//scaleControl: false,
			//draggable: false,
		});
		var marker = new google.maps.Marker({
			position: cape_campbell,
			map: map
		});
	}
</script>

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
```


