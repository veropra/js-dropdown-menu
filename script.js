
$('.menu-item').mouseenter(function (){
  $(this).children('.dropdown-menu').addClass();
});
$('.menu-item').mouseleave(function (){
  $(this).children('.dropdown-menu').removeClass();
});
