---
layout: base
title: Home
permalink: /
---

<link href="/assets/stylesheets/typed.css" rel="stylesheet" />
<script src="/assets/javascripts/typed.js"></script>
<script>
$(function(){
  $("#typed > h1 > span").typed({
      strings: ["Firmware, Javascript, Cloud", "Happy Coding!"],
      typeSpeed: 20,
      backDelay: 2500,
      backSpeed: 0,
      callback: function(){
      }
  });
})
</script>
<div id="typed" class="text-center">
  <h1><span/></h1>
</div>
