const{logInUser} = require("./login2") //importing function

beforeEach(() => { //says run this code before every test
global.localstorage = { //creating fake localstorage (global variable called localstorage)
storage: {},

setItem(key,value){ //save something in storage
    this.storage[key] = value;
}

getItem(key){ //teaching localstorage how to read
    return this.storage[key] || null;
}

};
});

describe("Test for login", () =>{
      it("should log in user successfully", () => {

localStorage.setItem("users", JSON.stringify([
        {
            username: "Imani",
            email: "imani@gmail.com",
            password: "1234"
        }
    ]));

    const result = logInUser("imani@gmail.com", "1234");

    expect(result.success).toBe(true);

});

});


