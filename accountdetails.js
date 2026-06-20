const fs = require("fs");

const rawData = fs.readFileSync("./financedata.json");
const data = JSON.parse(rawData);

console.log(data.users);