//funtion declaration
function formValidation() {
    // variable declarations
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // To validate first name
    if (name === "") {
        document.getElementById("namelb").style.visibility = "visible";
  
      return false;
    } else {
        document.getElementById("namelb").style.visibility = "hidden";
    }
  
    // To validate Message
    if (message === "") {
        document.getElementById("messagelb").style.visibility = "visible";

      return false;
    } else {
        document.getElementById("messagelb").style.visibility = "hidden";
    }
  
    // To validate email and specify email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        alert("Email field can not be empty");
      
    } else if (!emailRegex.test(email)) {
        document.getElementById("emaillb").style.visibility = "visible";
       
    } else{
        document.getElementById("emaillb").style.visibility = "hidden";
        
    }

    // when all fields are valid
    return true;
  }
  