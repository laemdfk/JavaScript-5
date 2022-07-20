// Queryを使うには、HTMLと紐づけする必要がある

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// 上から下に向かってアニメーション表示
$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
});

// 下から上に向かってアニメーション表示
$(function(){
  $('.box1').slideUp();
});