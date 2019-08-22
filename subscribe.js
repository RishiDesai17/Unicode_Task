function showPassword() {
  var pass = document.getElementById("password");
  if (document.getElementById("checkbox").checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

function nameValidation() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nameWarn").style.display = "block";
    document.getElementById("tick3").style.display = "none";
  } else {
    document.getElementById("tick3").style.display = "inline-block";
    document.getElementById("nameWarn").style.display = "none";
  }
}

function numberValidation() {
  var validPh = /^\d{10}$/;
  if (document.getElementById("number").value.match(validPh)) {
    document.getElementById("tick3").style.display = "inline-block";
    document.getElementById("phWarn").style.display = "none";
  } else {
    document.getElementById("phWarn").style.display = "block";
    document.getElementById("tick3").style.display = "none";
  }
}

function emailValidation() {
  var validEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email").value.match(validEm)) {
    document.getElementById("tick4").style.display = "inline-block";
    document.getElementById("emWarn").style.display = "none";
  } else {
    document.getElementById("emWarn").style.display = "block";
    document.getElementById("tick4").style.display = "none";
  }
}
/*Password must be 8 to 15 char long and must have*/
var validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
function passwordValidation() {

  if (document.getElementById("password").value.match(validPass)) {
    document.getElementById("tick5").style.display = "inline-block";
    document.getElementById("passWarn").style.display = "none";
  } else {
    document.getElementById("passWarn").style.display = "block";
    document.getElementById("tick5").style.display = "none";
  }
}

function confirmPasswordValidation() {
  if(document.getElementById("password").value==="") {
    document.getElementById("conWarn").innerHTML="Password field is empty!"
    document.getElementById("conWarn").style.display = "block";
    document.getElementById("tick6").style.display = "none";
  }
  else if(document.getElementById("password").value.match(validPass)===false) {
   document.getElementById("conWarn").innerHTML="Password field is invalid!"
   document.getElementById("conWarn").style.display = "block";
   document.getElementById("tick6").style.display = "none";
 }
  else if (document.getElementById("password").value === document.getElementById("confirm").value) {
    document.getElementById("tick6").style.display = "inline-block";
    document.getElementById("conWarn").style.display = "none";
  }
  else{
    document.getElementById("conWarn").style.display = "block";
    document.getElementById("tick6").style.display = "none";
  }
}
