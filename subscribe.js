function showPassword() {
  for(var i=0;i<2;i++) {
  var pass = document.getElementsByClassName("password")[i];
  if (document.getElementById("checkbox").checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  } }
}

function nameValidation() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nameWarn").style.display = "block";
    document.getElementById("tick1").style.display = "none";
    return false;
  } else {
    document.getElementById("tick1").style.display = "inline-block";
    document.getElementById("nameWarn").style.display = "none";
    return true;
  }
}
function lastNameValidation(){
  document.getElementById("tick2").style.display = "inline-block";
}
function genderValidation(){
  document.getElementById("tick6").style.display = "inline-block";
}
function numberValidation() {
  var validPh = /^\d{10}$/;
  if (document.getElementById("number").value.match(validPh)) {
    document.getElementById("tick3").style.display = "inline-block";
    document.getElementById("phWarn").style.display = "none";
    return true;
  } else {
    document.getElementById("phWarn").style.display = "block";
    document.getElementById("tick3").style.display = "none";
    return false;
  }
}

function emailValidation() {
  var validEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email").value.match(validEm)) {
    document.getElementById("tick4").style.display = "inline-block";
    document.getElementById("emWarn").style.display = "none";
    return true;
  } else {
    document.getElementById("emWarn").style.display = "block";
    document.getElementById("tick4").style.display = "none";
    return false;
  }
}
/*Password must be 8 to 15 char long and must have*/
var validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
function passwordValidation() {

  if (document.getElementById("password").value.match(validPass)) {
    document.getElementById("tick5").style.display = "inline-block";
    document.getElementById("passWarn").style.display = "none";
    return true;
  } else {
    document.getElementById("passWarn").style.display = "block";
    document.getElementById("tick5").style.display = "none";
    return false;
  }
}

function confirmPasswordValidation() {
  if(document.getElementById("password").value==="") {
    document.getElementById("conWarn").innerHTML="Password field is empty!"
    document.getElementById("conWarn").style.display = "block";
    document.getElementById("tick6").style.display = "none";
    return false;
  }
  else if(document.getElementById("password").value.match(validPass)===false) {
   document.getElementById("conWarn").innerHTML="Password field is invalid!"
   document.getElementById("conWarn").style.display = "block";
   document.getElementById("tick6").style.display = "none";
   return false;
 }
  else if (document.getElementById("password").value === document.getElementById("confirm").value) {
    document.getElementById("tick6").style.display = "inline-block";
    document.getElementById("conWarn").style.display = "none";
    return true;
  }
  else{
    document.getElementById("conWarn").style.display = "block";
    document.getElementById("tick6").style.display = "none";
    return false;
  }
}

function store(){
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("last name", document.getElementById("lastname").value);
 for (var i = 0; i < 3; i++) {
      if (document.getElementsByClassName("gender")[i].checked) {
          var selected = document.getElementsByClassName("gender")[i].value;
          localStorage.setItem("gender", selected);
          break;
       }
  }
  localStorage.setItem("Email", document.getElementById("email").value);
  localStorage.setItem("Contact No.", document.getElementById("number").value);
  localStorage.setItem("password", document.getElementById("password").value);
}
function display(){
  document.getElementById("namedisp").innerHTML = "Name: "+localStorage.getItem("name");
  document.getElementById("lastnamedisp").innerHTML = "Last Name: "+localStorage.getItem("last name");
  document.getElementById("genderdisp").innerHTML = "Gender: "+localStorage.getItem("gender");
  document.getElementById("emaildisp").innerHTML = "Email: "+localStorage.getItem("Email");
  document.getElementById("numberdisp").innerHTML = "Contact No."+localStorage.getItem("Contact No.");
  document.getElementById("passdisp").innerHTML = "Password: ***";
}
