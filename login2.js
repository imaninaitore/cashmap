function logInUser(emailValue,passwordValue){
    let users = JSON.parse(localStorage.getItem("users")) || [] ; //get users form local storage, convert string to array, if nothing exists create empty array

    const correctUser = users.find(user => {
        return user.email === emailValue && user.password === passwordValue;
    });

    if(!correctUser) return{success: false, message:"wrong log in details or not signed in yet"};

    localStorage.setItem("currentUser", JSON.stringify(correctUser)); //get from storage and convert to javascript object

  return { success: true, user: correctUser };
}

module.exports = {logInUser};