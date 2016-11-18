# Inuit CSS

<https://github.com/inuitcss/inuitcss>

<https://github.com/batchdev/inuitcss>

## Alias

$spacing-unit: $inuit-global-spacing-unit;

## Custom Spacing

```
$inuit-spacing-directions: (
  null: null,
  't': '-top',
  'r': '-right',
  'b': '-bottom',
  'l': '-left',
  'h': '-left' '-right',
  'v': '-top' '-bottom',
) !default;

$inuit-spacing-properties: (
  'padding': 'p',
  'margin': 'm'
);

$inuit-spacing-sizes: (
  null: $inuit-global-spacing-unit,
  '--': $inuit-global-spacing-unit-tiny,
  '-': $inuit-global-spacing-unit-small,
  \+: $inuit-global-spacing-unit-large,
  \+\+: $inuit-global-spacing-unit-huge,
  '0': 0
) !default;
```

make it responsive

```
@if (variable-exists(mq-breakpoints)) {

  @each $inuit-bp-name, $inuit-bp-value in $mq-breakpoints {

    @include mq($from: $inuit-bp-name) {
      @each $property, $property-namespace in $inuit-spacing-properties {

        @each $direction, $direction-namespace in $inuit-spacing-directions {

          @each $size, $value in $inuit-spacing-sizes {

            .u-#{$property-namespace}#{$direction-namespace}#{$size}\@#{$inuit-bp-name} {
              #{$property}#{$direction}: $value !important;
            }

          }

        }

      }
      
    }

  }

}
```

---



# 3rd Party Helpers

## Text Transform
<https://convertcase.net/>

## Word and Letter Count
<https://wordcounter.net/>

## SVGO
<https://jakearchibald.github.io/svgomg/>

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

### Shortcodes

```
{% filter shortcodes %}
    [tabs tab1="Tab 1 title" tab2="Tab 2 title" layout="horizontal" backgroundcolor="" inactivecolor=""]
        [tab id=1]
            Something something something
        [/tab]

        [tab id=2]
            Tab 2 content here
        [/tab]
    [/tabs]
{% endfilter %}
```

### Menu
```
{% if menu %}
    <ul>
    {% for item in menu %}

        <li class="c-nav__item{% if item.current or item.current_item_parent or item.current_item_ancestor or post_type_slug == item.get_link %} active{% endif %}">
            <a class="c-nav-item__link" href="{{item.get_link}}" >
                {{item.title}}
            </a>
                {% if item.get_children %}
                    <ul class="c-nav__child-menu">
                    {% for child in item.get_children %}
                        <li class="c-nav__item {% if child.current or child.current_item_parent %} active{% endif %}">
                            <a class="c-nav-item__link" href="{{child.get_link}}">{{child.title}}</a>
                        </li>
                    {% endfor %}
                    </ul>
                {% endif %}
        </li>
    {% endfor %}
    </ul>
{% endif %}
```

#### Base.twig

```
<!-- Mobile Hamburger -->
    <label for="c-hamburger__nav-trigger">
        <span class="c-hamburger js-c-hamburger">
            <span class="slice1"></span>
            <span class="slice2"></span>
            <span class="slice3"></span>
            <span class="u-hidden-visually">Menu</span>
        </span>
    </label>


    <!-- Site c-header -->
    <header class="c-header">

        <!-- Branding can change h1 to div on internal pages -->
        <h1 class="c-header__branding u-pt u-pl"><a href="{{site.url}}" class="c-header-branding__link"><span class="u-hidden-visually">{{site.name}}</span> <svg class="c-header-branding__img" width="162px" height="79px"><use xlink:href="{{site.theme.link}}/assets/img/svg-defs.svg#shape-branding"></use></svg></a></h1>
    
      <input type="checkbox" id="c-hamburger__nav-trigger" class="u-hidden-visually" />
      <div class="c-nav">
          <svg class="" width="162px" height="79px"><use xlink:href="{{site.theme.link}}/assets/img/svg-defs.svg#shape-branding"></use></svg>
          <nav>
              {% include "menu.twig" with {'menu': menu.get_items} %}
          </nav> 
      </div> 

    </header>
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
---

# ACF

## Options Page

```
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}
```

```

<?php the_field('field_name', 'option'); ?>

```

### Timber

<https://github.com/timber/timber/blob/master/docs/wiki/_acf-cookbook.md#options-page>

```
/* functions.php */
add_filter( 'timber_context', 'mytheme_timber_context'  );

function mytheme_timber_context( $context ) {
    $context['options'] = get_fields('option');
    return $context;
}
```

then

```
/* footer.twig */
<footer>{{options.copyright_info}}</footer>
```

---

# Worpress

## Search

```
<!-- Search Form -->
<form role="search" method="get" action="{{site.url}}">
    <input type="search" autocomplete="off" value="" name="s" name="search" placeholder="Search" />
    <input type="submit" value="" class="" />
    <svg><use xlink:href="{{site.theme.link}}/assets/img/svg-defs.svg#shape-search" /></svg>
</form>	
```

## Google jQuery

```
if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", false, null);
   wp_enqueue_script('jquery');
}
```

