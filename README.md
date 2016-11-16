# Inuit CSS

<https://github.com/inuitcss/inuitcss>

<https://github.com/batchdev/inuitcss>

hr



# 3rd Party Helpers

## Text Transform
<https://convertcase.net/>

hr



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

This example only grabs 1
```
{% for banner_image in post.get_field('banner_backgrounds')|slice(0,1) %}
{% set banner_image = random(post.get_field('banner_backgrounds')) %}
  <div class="c-section c-section-one u-pb0" style="background-image: url('{{TimberImage(banner_image.image).src}}');">
{% endfor %}
```


