//retrieve logged-in user
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//check if user exists
if(!currentUser){
     window.location.href = "login.html";
}

//display their info
document.getElementById("welcome-message").textContent =
`Welcome back ${currentUser.username} !`;

document.getElementById("user-email").textContent =
`Email: ${currentUser.email}`;

document.getElementById("user-phone").textContent =
`Phone: ${currentUser.phoneNumber}`;

function logout() {
   localStorage.removeItem("currentUser");
   window.location.href = "index.html";
}

