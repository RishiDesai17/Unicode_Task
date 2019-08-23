$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('bg-dark');
    $('nav').removeClass('bg-transparent');
  } else {
    $('nav').addClass('bg-transparent');
    $('nav').removeClass('bg-dark');
  }
});

$(document).ready(function() {
  setTimeout(function() {
    PopUp();
  }, 1500);
});

function PopUp() {
  $("#popup-surrounding").fadeIn('slow');
}

function Close() {
  $("#popup-surrounding").fadeOut('slow');
}
var final = new Date(2019, 7, 31, 23, 59, 59).getTime();
setInterval(function() {
  var present = new Date().getTime();
  var remainingTime = final - present;
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";
  if (remainingTime < 0) {
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);

$("#title1").mouseover(function() {
  $("#share").show();
});
