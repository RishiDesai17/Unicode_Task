$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('bg-dark');
    $('nav').removeClass('bg-transparent');
  } else {
    $('nav').addClass('bg-transparent');
    $('nav').removeClass('bg-dark');
  }
})
