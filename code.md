---
layout: base
title: Code
permalink: /code/
---

<link href="/assets/stylesheets/card.css" rel="stylesheet" />
<div class="row">
  {% for post in site.posts %}
    {% assign cate = post.category %}
    {% if cate == "code" %}
      {% include card.html %}
    {% endif %}
  {% endfor %}
</div>
