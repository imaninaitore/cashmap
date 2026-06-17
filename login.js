//get login inputs
const username = username.value
const email = email.value
const password = password.value

//get all users from local storage
let users =JSON.parse(localStorage.getItem ("users")) || []