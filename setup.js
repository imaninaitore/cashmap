let Url = "./financedata.JSON"
fetch(Url)
.then(response => response.json())
.then (data => {
    console.log(users.name, users.AccountBalance)
})
