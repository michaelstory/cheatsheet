# Inuit CSS

<https://github.com/inuitcss/inuitcss>

<https://github.com/batchdev/inuitcss>

---



# 3rd Party Helpers

## Text Transform
<https://convertcase.net/>

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


