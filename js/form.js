function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    var text;

    //Decison Making Statements for Client Side Form Validation
    if(name.length < 5 ){
        text = "Please Enter the valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 10){
        text = "Please Enter the valid subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter the valid phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter the valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length < 50){
        text = "Please Enter the valid message";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Data is submitted successfully!!");
    return true;
}

 