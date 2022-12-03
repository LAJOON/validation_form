function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == "lajoon" && password == "lajoon123") {
    alert("login successful");
    window.open("https://www.google.co.in/");
    return false;
  } else {
    alert(" Usernamr or Password incorrecg.");
    return false;
  }
}
