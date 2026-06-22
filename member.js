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
expenses = accountUser["mpesa-expense-records"];

//call functions
displayExpenses();
updateBudget();

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
const totalBudgetDisplay= document.getElementById("total-budget");
const usedBudget = document.getElementById("used-money");
const remainingBudget = document.getElementById("remaining-money");
const editBtn = document.getElementById("edit-btn");
const budgetEditSection = document.getElementById("budget-edit-section");
const budgetInput = document.getElementById("budget-input");
const saveBudgetBtn = document.getElementById("save-budget-btn");

//display to show
let totalBudget = 10000;
let expenses = [];

// Function to update budget 
function updateBudget() {

    // Calculate total spent
    const usedSoFar = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    // Calculate remaining
    const remaining = totalBudget - usedSoFar;

    // Display values
    totalBudgetDisplay.textContent = totalBudget;
    usedBudget.textContent = `KSh ${usedSoFar}`;
    remainingBudget.textContent = `KSh ${remaining}`;
}
//edit button
editBtn.addEventListener("click", function () {
    if (budgetEditSection.style.display === "none") {
        budgetEditSection.style.display = "block";
    } else {
        budgetEditSection.style.display = "none";
    }
});

//save new budget
saveBudgetBtn.addEventListener("click", function () {
    const newBudget = Number(budgetInput.value);

    if (newBudget > 0) {
        totalBudget = newBudget;
        updateBudget();

        budgetInput.value = "";
        budgetEditSection.style.display = "none";
    } else {
        alert("Enter a valid amount");
    }
});


//EXPENSE TRACKING SECTION
const expenseList = document.getElementById("expenses");

function displayExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.textContent = `${expense.name}: KSh ${expense.amount}`;
        expenseList.appendChild(li);
    });
}


//calculating total expenses
const totalExpensesDisplay = document.getElementById("total-expenses");

function calculateTotalExpenses() {
const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
}, 0);
totalExpensesDisplay.textContent = totalExpenses;
}

calculateTotalExpenses();