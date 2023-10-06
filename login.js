const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const  password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
e.preventDefault();
checkInput();
})
function checkInput(){
    //get the value from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //username validation
    if (usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    }
    else if (usernameValue.length < 6){
        setErrorFor(username, 'Username must be at least 6 characters long');
    }
    else{
        setSuccessFor(username);
    }

    //email validation
    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else{
        setSuccessFor(email);
    }

    //password validation
    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (passwordValue.length < 8){
        setErrorFor(password, 'Password must be at least 8 characters long');
    }
    else{
        setSuccessFor(password);
    }

    //confirm password validation
    if (password2Value === ''){
        setErrorFor(password2, 'This field cannot be blank');
    }
    else if (passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not match');
    }
    else{
        setSuccessFor(password2);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement //.form-control
    const small = formControl.querySelector('small')
    //add error message inside small
    small.innerText = message;
    //add error class
formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement  //.form-control
     //add error class
formControl.className = "form-control success";
}


