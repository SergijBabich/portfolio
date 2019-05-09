$(window).scroll(function() {

  var sr = $(this).scrollTop();
console.log(sr);
  $(".header_text").css({

"transform" : "translale(0%,-" + sr/2 + "%"

});
});
