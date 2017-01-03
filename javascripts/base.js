$(function(){

  // 현재메뉴 활성화
  let current = $('#navbar').attr('data-active');
  $('#navbar > ul > li').each(function(i,el){
    let path = $(this).children('a').attr('href');
    if(current == path) $(this).addClass('active');
  });

});
