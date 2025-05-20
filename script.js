// function for password visibility
$("#password").hover(
          function functionName() {
            //Change the attribute to text
            $("#password").attr("type", "text");
            $(".glyphicon").removeClass("glyphicon-eye-open").addClass("glyphicon-eye-close");
          },
          function () {
            //Change the attribute back to password
            $("#password").attr("type", "password");
            $(".glyphicon").removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");
          }
        );

$(function() {
 $("#password").passwordStrength();
});
// for email validation
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


// Minimum eight characters, at least one letter, one number and one special character:
function validatePassword(password) {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var msg=''

  if (password.length < minLength) {
    return  "Password must be at least 8 characters long.";
  }


  if (!uppercaseRegex.test(password)) {
    return  "Password must contain at least one uppercase letter.";
  }

  if (!lowercaseRegex.test(password)) {
    return   "Password must contain at least one lowercase letter.";
  }

  if (!numberRegex.test(password)) {
    return   "Password must contain at least one number.";
  }

  if (!specialCharRegex.test(password)) {
    return  "Password must contain at least one special character.";
  }

  return ""; // Return an empty string if the password is valid
}

// validation checking method

$('#submit').click(function(){

 var errormsg=''
 if((isEmail($('#email').val())==false)&& $('#email').val()!='' ) {
errormsg+='<p>Please enter valid email address</p>'
}
 else if(($('#email').val()=='')||($('#phoneno').val()=='')||($('#password').val()=='')){
  errormsg+='<p>Plaese fill all details</p>'
}
  else if(($('#phoneno').val().length)>10 || $('#phoneno').val().length<10)  {
  errormsg+='<p>Please enter valid phone number</p>'
}


 else if( (validatePassword($('#password').val())!='') || $('#password').val()!=$('#confirmpass').val() ){
errormsg+='<p>password not valid </p> <p>must have 8 character</p> <p> 1 uppercase character</p> <p>1 lowercase character</p> <p>1 number and 1 special character</p>'
}

// output message
if(errormsg==''){
     $('#errors').html('').remove()
     $('#success').html('You are registered').css('border','1px solid green')
 }
 else{
 $('#errors').html(errormsg ).css('border','1px solid red')
 }
})




   
  