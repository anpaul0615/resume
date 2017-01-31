$(function(){
  // 현재메뉴 활성화
  var current = document.location.pathname.split('/')[1];
  $('#'+current).addClass('active');
});
