
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#home-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#home-slideshow');
},  3000);
