---
layout: base
title: Diary
permalink: /diary/
---

<link href="/assets/stylesheets/card.css" rel="stylesheet" />
<div class="row">
  {% for post in site.posts %}
    {% assign cate = post.category %}
    {% if cate == "diary" %}
      {% include card.html %}
    {% endif %}
  {% endfor %}
</div>
