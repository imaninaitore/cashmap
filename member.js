//retrieve logged-in user
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//check if user exists
if(!currentUser){
     window.location.href = "login.html";
}
//display their info
document.getElementById("welcome").textContent =
`Welcome back ${currentUser.username} !`;

document.getElementById("member-email").textContent =
`Email: ${currentUser.email}`;

document.getElementById("member-phone").textContent =
`Phone: ${currentUser.phoneNumber}`;

function logout() {
   localStorage.removeItem("currentUser");
   window.location.href = "index.html";
}