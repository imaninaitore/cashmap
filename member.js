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

//monthly budget section
//get elements
const totalBudget = document.getElementById("total-budget");
const usedBudget = document.getElementById("used-money");
const remainingBudget = document.getElementById("remaining-money");
const editBtn = document.getElementById("edit-btn");


//display to show
let totalBudget = 0;
let expenses = [
    { name: "Food", amount:0 },
    { name: "Transport", amount: 0},
    { name: "Shopping", amount: 0}
    { name: "Bills", amount: 0}

]

// Function to update budget 
function updateBudget() {

    // Calculate total spent
    const usedSoFar = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    // Calculate remaining
    const remaining = totalBudget - usedSoFar;

    // Display values
    totalBudget.textContent = totalBudget;
    usedBudget.textContent = usedSoFar;
    remainingBudget.textContent = remaining;
}

// Edit button
editBtn.addEventListener("click", function () {
    const newBudget = Number(prompt("Enter new monthly budget"));

    if (!isNaN(newBudget) && newBudget > 0) {
        totalBudget = newBudget;
        updateBudget();
    } else {
        alert("Please enter a valid budget amount");
    }
});

updateBudget(); //call the function