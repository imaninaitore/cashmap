function logInUser(usernameValue,emailValue,passwordValue){
    let users = JSON.parse(localStorage.getItem("users")) || [] ;

    const correctUser = users.find(user => {
        return user.email === emailValue && user.password === passwordValue;
    });
    
}