function showPassword() {
  var pass = document.getElementById("password");
  pass.required = true;
  if (document.getElementById("checkbox").checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
function numberValidation() {
  var validPh = /^\d{10}$/;
  if(document.getElementById("number").value.match(validPh)){
    document.getElementById("tick3").style.display="inline-block";
    document.getElementById("phWarn").style.display="none";
  }
  else{
    document.getElementById("phWarn").style.display="block";
    document.getElementById("tick3").style.display="none";
  }
}
function emailValidation() {
  var validEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(document.getElementById("email").value.match(validEm)){
    document.getElementById("tick4").style.display="inline-block";
    document.getElementById("emWarn").style.display="none";
  }
  else{
    document.getElementById("emWarn").style.display="block";
    document.getElementById("tick4").style.display="none";
  }
}
