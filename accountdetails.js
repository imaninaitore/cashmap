const fs = require("fs");

const rawData = fs.readFileSync("./financedata.json");
const data = JSON.parse(rawData);

const user = data.users.find(user => user.id === 1);

console.log(user);

function renderTotal(){
    totalBalance.innerHTML = "";
    let total = 0;
}
