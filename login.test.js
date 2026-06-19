const{logInUser} = require("./login2") //importing function

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


