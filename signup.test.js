const{signUpUser} = require("./signup") //importing function
describe("Test for Signup", () =>{
    it("should successfully create an account",() =>{
     expect(signUpUser("username","email","password"))
    .toBe("account creation successful");   
    });
    
});









