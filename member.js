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
calculateTotalExpenses();
giveInsights()

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

//creating insights section
function giveInsights(){

let food = 0;
let transport = 0;
let shopping = 0;
let bills = 0; 

//loop
expenses.forEach(expense => {
    if (expense.name.toLowerCase() === "food") {
        food += expense.amount;
    }
    else if (expense.name.toLowerCase() === "transport") {
        transport += expense.amount;
    }
    else if (expense.name.toLowerCase() === "shopping") {
        shopping += expense.amount;
    }
    else if (expense.name.toLowerCase() === "bills") {
        bills += expense.amount;
    }
});

//highest spending
let highestCategory = "food";
let highestAmount = food;

if (transport > highestAmount) {
    highestAmount = transport;
    highestCategory = "transport";
}

if (shopping > highestAmount) {
    highestAmount = shopping;
    highestCategory = "shopping";
}

if (bills > highestAmount) {
    highestAmount = bills;
    highestCategory = "bills";
}


//displaying the insight
const insightDisplay = document.getElementById("spending-insight");
insightDisplay.textContent =
`You spend most on ${highestCategory} : (KSh ${highestAmount})`;
}

//display on transactional account
const transactionSpentDisplay = document.getElementById("spent");
const transactionRemainingDisplay = document.getElementById("remaining");

//edit savings goals
function updateSavingsDashboard() {

    // total goals target
    const totalGoals = savingsGoals.reduce((sum, goal) => {
        return sum + goal.target;
    }, 0);

    // overall progress based on savings pool
    const progress = (savingsBalance / totalGoals) * 100;

    // remaining to reach full goal
    const remaining = totalGoals - savingsBalance;

    // display
    document.getElementById("total-savings").textContent = savingsBalance;
    document.getElementById("total-goals").textContent = totalGoals;
    document.getElementById("savings-progress").textContent = `${progress.toFixed(0)}%`;
    document.getElementById("savings-remaining").textContent = remaining;
}

//SAVINGS ACCOUNT SECTION
const goalDisplay = document.getElementById("savings-goal");
const progressDisplay = document.getElementById("progress-percentage");
const savingsRemainingDisplay = document.getElementById("savings-remaining");

const editGoalBtn = document.getElementById("edit-goal");
const savingsGoalEditSection = document.getElementById("savings-goal-edit-section");
const goalInput = document.getElementById("goal-input");
const saveGoalBtn = document.getElementById("save-goal");

