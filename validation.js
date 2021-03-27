var email=document.getElementById("email");
var error=document.getElementById("error");


function emvalidate(){
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color="green";
        email.style.border="2px solid darkgreen"
        return true;
    }

    else  {
        error.innerHTML ="Invalid Email provided";
        error.style.color="red";
        email.style.border="2px solid red"
        return false;
    }

    
}
 function valipass(){
     var pas1=document.getElementById("pass1");
     var pas2=document.getElementById("pass2");
     var message=document.getElementById("message");
     var green = "#66cc66";
     var red = "#ff6666";
     var orange="#FFA500";

     if(pas1.value.length>8){
        pas1.style.backgroundColor = green;
        message.style.color = green;
        message.innerHTML = "character number ok!"
     }
     else if(pas1.value.length>5 ){
        pas1.style.backgroundColor =orange ;
     }

     else {
        pas1.style.backgroundColor = red;
        message.style.color = red;
        message.innerHTML = " you have to enter at least 8 digit!"
        return;
    }
    if (pas1.value == pas2.value) {
        pas2.style.backgroundColor = green;
        message.style.color = green;
        message.innerHTML = "success!"
    } else {
        pas2.style.backgroundColor = red;
        message.style.color = red;
        message.innerHTML = " These passwords don't match"
    }
}

    var re = document.getElementById("phvalid");


$(document).ready(function () {

    $(".phone_us").keyup(function (e) {
        var value = $(".phone_us").val();
        if (e.key.match(/[0-9]/) == null) {
            value = value.replace(e.key, "");
            $(".phone_us").val(value);
            return;
        }
    
        if (value.length == 3) {
            $(".phone_us").val(value + "-")
        }
        if (value.length == 7) {
            $(".phone_us").val(value + "-")
        }
    });
    });