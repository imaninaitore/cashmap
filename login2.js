function logInUser(usernameValue,emailValue,passwordValue){
    let users = JSON.parse(localStorage.getItem("users")) || [] ;

    const correctUser = users.find(user => {
        return user.email === emailValue && user.password === passwordValue;
    });

    if(!correctUser) return{success: false, message:"wrong log in details or not signed in yet"};

    localStorage.setItem("currentUser", JSON.stringify(correctUser));

  return { success: true, user: correctUser };
}