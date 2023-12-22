var password = [];
var confirmPassword = [];

$("#floatingPassword").keypress(function(event){
    var n = event.key;
    password.push(n);
});

$("#confirmPassword").keypress(function(event){
    var n = event.key;
    confirmPassword.push(n);
});

$("#confirmPassword").blur(function(){
    if(password.length != confirmPassword.length){
        alert("Doesn't match");
    } else {
        for(var i = 0; i < password.length; i++){
            if(password[i] != confirmPassword[i]){
                alert("Doesn't match");
                return;
            }
        }
        alert("Match");
    }
});


