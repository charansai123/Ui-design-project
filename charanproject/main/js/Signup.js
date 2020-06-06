function MyInput() {
    document.getElementById("name").focus();
}
function validate(){
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value
    var subject = document.getElementById("subject").value;
    var date = document.getElementById("date1").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(pass.length<6){
        text="Password must be greater than 6 digits";
        error_message.innerHTML=text;
        return false;
    }
    if(subject.length != pass.length){
      text = "Please Enter Correct Password";
      error_message.innerHTML = text;
      return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    
    alert("Signed in  Successfully!");
    return true;
  }