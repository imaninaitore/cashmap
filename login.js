const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

//submit event
loginForm.addEventListener("submit", function(event){
 event.preventDefault();

//get login inputs
const usernameValue = usernameInput.value
const emailValue = emailInput.value
const passwordValue = passwordInput.value

//get all users from local storage
let users =JSON.parse(localStorage.getItem ("users")) || [];

//find matching user
const correctUser = users.find(user =>{
return user.email === emailValue && user.password === passwordValue;

});

//condition for no match found
if(!correctUser) {
    alert("wrong log in details or not signed in yet")
    return;
}

//save the logged in user
localStorage.setItem("currentUser", JSON.stringify(correctUser));
//redirect
window.location.href = "member.html"

});












