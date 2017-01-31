---
layout: base
title: Book
permalink: /book/
---

<link href="/assets/stylesheets/card.css" rel="stylesheet" />
<div class="row">
  {% for post in site.posts %}
    {% assign cate = post.category %}
    {% if cate == "book" %}
      {% include card.html %}
    {% endif %}
  {% endfor %}
</div>
