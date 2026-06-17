const signupForm = document.getElementById('signup-form');

const username  = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const confirmPasswordInput = document.getElementById("confirm-password");

const dateOfBirth = document.getElementById("birth");
const phoneNumber = document.getElementById("number");

class User{
    constructor(username,email,password,dateOfBirth,phoneNumber){
        this.username = username;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
    }
}

function signUpUser(username,email,password,dateOfBirth,phoneNumber){
    return new User(username,email,password,dateOfBirth,phoneNumber);
}

let users = JSON.parse(localStorage.getItem("users")) || [];

//submit event 
signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const dateOfBirthValue = dateOfBirth.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    const phoneNumberValue = phoneNumber.value; 

//confirming password
if(passwordValue !== confirmPasswordValue){
    alert("Passwords do not match");
    return;
}

    const user = new User(
     usernameValue,
     emailValue,
     passwordValue,
     dateOfBirthValue,
     phoneNumberValue
    );

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users));

    alert("Account created successfully!");
});




