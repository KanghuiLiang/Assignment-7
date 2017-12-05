// function checkUsername() {
// 	var elMsg = document.getElementById('feedback');
// 	if (this.value.length < 5) {
// 		elMsg.textContent = 'Username must to be 5 character or more';
// 	} else {
// 		elMsg.textContent = '';
// 	}
// }

// var 

var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.style.color = 'red';
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}
elUsername.addEventListener('blur', function() {
    checkUsername(8);
}, false);

var elPassword = document.getElementById('password');
var elPsw = document.getElementById('psw');

function checkPassword() {
    if (elPassword.value.length < 8) {
        elPsw.style.color = 'red';
        elPsw.textContent = 'Your password must be ' + 8 + ' characters or more';
    } else {
        elPsw.innerHTML = '';
    }
}
// elPassword.addEventListener('blur', function() {
//     checkPassword(8);
// }, false);


function conPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var elConfirm = document.getElementById("nomatch");

    if (password != confirmPassword) {
        elConfirm.style.color = "red";
        elConfirm.innerHTML = "Password and Confirm Password do not match";
    } else {
        elConfirm.style.color = "green";
        elConfirm.innerHTML = "Matching";
    }

}