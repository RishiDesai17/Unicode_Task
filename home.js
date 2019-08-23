var d = new Date();
if (d.getHours() >= 5 && d.getHours() < 12) {
  document.getElementsByClassName("greeting")[0].innerHTML = "Good Morning!";
} else if(d.getHours() >= 12 && d.getHours() < 17){
  document.getElementsByClassName("greeting")[0].innerHTML = "Good Afternoon!";
} else if(d.getHours() >= 17 && d.getHours() < 22){
  document.getElementsByClassName("greeting")[0].innerHTML = "Good Evening!"
} else{
  document.getElementsByClassName("greeting")[0].innerHTML = "Hey There!"
}
