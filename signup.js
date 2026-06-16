const signupForm = document.getElementById('signup-form');
const username  = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

let users = JSON.parse(localStorage.getItem("users")) || [];

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const user = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue
    };

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users));

    alert("Account created successfully!");

});




