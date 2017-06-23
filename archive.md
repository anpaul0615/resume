---
layout: base
title: Archive
permalink: /archive
---

<div id="archive" class="row"></div>

<link href="/assets/stylesheets/card.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js"></script>
<script src="/assets/javascripts/components/cardview.js"></script>
<script src="/assets/javascripts/archive.js"></script>
<script>
function setCardview(){
  getAchiveName()
  .then(function(archiveName){
    return getPostMetaData(archiveName);
  })
  .then(function(posts){
    ReactDOM.render(
      React.createElement(CardContainer,{'posts': posts}),
      document.querySelector('#archive')
    );
  })
  .fail(function(msg){
    ReactDOM.render(
      React.DOM.h1({'className':'text-muted text-center'}, msg),
      document.querySelector('#archive')
    );
  });
}
$(function(){
  window.addEventListener('hashchange', setCardview, false);
  setCardview();
});
</script>
