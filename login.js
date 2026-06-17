//get login inputs
const username = username.value
const email = email.value
const password = password.value

//get all users from local storage
let users =JSON.parse(localStorage.getItem ("users")) || [];

//find matching user
const correctUser = users.find(user =>{
return user.email === emailValue && user.password === passwordValue;

//condition for no match found
if(!loggedInUser) {
    alert("wrong log in details or not signed in yet")
    return;
}

//save the logged in user
localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
window.location.href = "member.html"

})













