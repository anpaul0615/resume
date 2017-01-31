---
layout: base
title: Archive
permalink: /archive/
---

<link href="/assets/stylesheets/timeline.css" rel="stylesheet" />
<div class="container">
  <ul class="timeline">
    {% for post in site.posts %}
      {% include timeline.html %}
      {% assign month = post.date | date: "%Y%m" %}
      {% assign pmonth = post.previous.date | date: "%Y%m" %}
      {% if month != pmonth %}
        {% include timeline-month.html %}
      {% endif %}
    {% endfor %}
  </ul>
</div>
