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

//fetch financial data
fetch("./financedata.json")
  .then(response => response.json())
  .then(data => {
    //match by email
    const accountUser = data.users.find(user =>
   user.email === currentUser.email);
//check if found
 if (!accountUser) {
   console.log("Users financial accounts not found !");
   return;
}  

//display balances
document.getElementById("current-account").textContent =
accountUser["Account balance"];

document.getElementById("transactional-account").textContent =
accountUser["transactional account balance"];

document.getElementById("savings-account").textContent =
accountUser["savings account balance"];

});
