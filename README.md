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

## Replace

```
{{options.facebook_url|replace({'http://': ''})}}
```

## Featured Image with Alt text

```
{% if post.thumbnail %}
      <img class="u-aligncenter" src="{{post.thumbnail.src}}" alt="{% if post.thumbnail._wp_attachment_image_alt %}{{post.thumbnail._wp_attachment_image_alt}}{% else %}{{post.title}}{% endif %}" />
    {% endif %}
```

## Timber Image Bits

<https://github.com/timber/timber/wiki/TimberImage>

```
<img src="{{post.get_thumbnail.src|resize(600, 400)}}" />
```
This will resize the image to 600 x 400 pixels.

```
<img src="{{post.get_thumbnail.src|resize(600)}}" />
```
This will resize the image to 600 pixels wide. The height will be determined naturally based on preserving the image's aspect ratio.
```
<img src="{{post.get_thumbnail.src|resize(600, 400, 'top')}}" />
```
This will resize the image to 600 x 400 pixels. In cropping it will crop starting from the top edge. The other cropping options are: default(which generally crops from the center, but in vertical situations has a bias toward preserving the top of the image), center, top, 'top-center', bottom, 'bottom-center', left and right.

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

#### CSS

##### Hamburger

```
/**********************

    Style the c-hamburger

    <!-- Mobile c-hamburger -->
    <label for="c-hamburger__nav-trigger">
        <span class="c-hamburger">
          <span class="slice1"></span>
          <span class="slice2"></span>
          <span class="slice3"></span>
          <p class="u-hidden-visually">Menu</p>
      </span>
    </label>
    <input type="checkbox" id="c-hamburger__nav-trigger" class="u-hidden-visually" />

    <header class="c-header">

        <nav class="nav"></nav>

    </header>

    <div clas="site-wrap">

**********************/

.c-hamburger {
    position: absolute;
    top: $spacing-unit*1.8;
    right: $spacing-unit;
    z-index: 6000;
    height: 34px;
    cursor: pointer;
    transition: all $global-transition;

    @include mq(tablet) {
        right: $spacing-unit*1.5;
    }

    span {
        display: block;
        width: 32px;
        height: 2px;
        margin: 0 0 8px 2px;
        background: $primary-color;
        transition: all 600ms cubic-bezier(.68, -.55, .265, 1.55);
        -webkit-transform: translate3d(0, 0, 0);

        -webkit-backface-visibility: hidden;
           -moz-backface-visibility: hidden;
             -o-backface-visibility: hidden;
                backface-visibility: hidden;
        @include mq(tablet) {
            width: 43px;
            margin: 0 0 10px 0;
        }
    }

    &:hover {
        opacity: .7;
    }
}

label[for='c-hamburger__nav-trigger'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 0;
}

/**********************

    JS adds .mob-nav--active to html tag

**********************/

.js.mob-nav--active .c-hamburger span {
    filter: alpha(opacity=0);
    opacity: 0;
}

.js.mob-nav--active .c-hamburger span.slice1 {
    margin-top: 12px;
    -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
            transform: rotate(45deg);
}

.js.mob-nav--active .c-hamburger span.slice3 {
    margin-top: -20px;
    margin-left: 2px;
    -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);

    @include mq(tablet) {
        margin-top: -24px;
        margin-left: 0;
    }
}

.js.mob-nav--active .c-hamburger span.slice1, .js.mob-nav--active .c-hamburger span.slice3 {
    filter: alpha(opacity=100);
    opacity: 1;
}

/**********************

    NAV enters

**********************/

.no-js {
    #c-hamburger__nav-trigger:checked + .c-nav {
        transform: translateX(0);
    }
}

.js.mob-nav--active {
    overflow: hidden;

    .c-nav {
        position: absolute;
        box-shadow: -3px 0 14px rgba(0, 0, 0, .2);
        transform: translateX(0);
    }
}
```

##### NAV

```
.c-nav {
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    z-index: 999;
    width: 100%;
    height: 100%;
    padding: $spacing-unit;
    overflow: scroll;
    line-height: 1.23;
    background: white;
    transition: all .3s cubic-bezier(.17,.67,.28,.92);
    transform: translateX(100%);
    @include inuit-font-size(20px);
    
    @include mq(tablet) {
        max-width: 514px;
        padding-left: $spacing-unit*2.7;
        line-height: 1.25;
        transform: translateX(514px);

        @include inuit-font-size(40px);
    }

    li {
        a {
            color: $base-color;
            &:hover {
                color: $primary-color;
            }
        }

        &.active a {
            color: $primary-color;
        }
    }
}
```

### Timber Multiple Loops

Example in an archive page:

```
$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::get_context();

$context['title'] = 'Archive';
if ( is_day() ) {
  $context['title'] = 'Archive: '.get_the_date( 'D M Y' );
} else if ( is_month() ) {
  $context['title'] = 'Archive: '.get_the_date( 'M Y' );
} else if ( is_year() ) {
  $context['title'] = 'Archive: '.get_the_date( 'Y' );
} else if ( is_tag() ) {
  $context['title'] = single_tag_title( '', false );
} else if ( is_category() ) {
  $context['title'] = single_cat_title( '', false );
  array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
} else if ( is_post_type_archive() ) {
  $context['title'] = post_type_archive_title( '', false );
  array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
}

if(get_post_type() == 'farmer') {
  $args = array('posts_per_page' => '1', 'post_type' => 'farmer', 'orderby' => 'rand');
  $featured_farmer = Timber::get_posts($args);
  
  
  $args2 = array('posts_per_page' => '-1', 'post_type' => 'farmer', 'orderby' => 'rand');
  $all_farmers = Timber::get_posts($args2);
  
  
  $all_farmers_less_featured = array_diff($all_farmers, $featured_farmer);
  
  
  $context['featured_farmer'] = $featured_farmer;
  $context['all_farmers'] = $all_farmers_less_featured;

} else {
  $context['posts'] = Timber::get_posts();
}

Timber::render( $templates, $context );
```

Then on archive page or wherever etc:

```
{% for post in featured_farmer %}
      <h1 class="u-hl-white">{{post.title}}</h1>
    {% endfor %}
    
    {% for post in all_farmers %}
      <p>{{post.title}}</p>
    {% endfor %}
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

