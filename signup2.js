class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function signUpUser(username,email,password){
    return new User(username,email,password);
}

module.exports = { User, signUpUser }; 