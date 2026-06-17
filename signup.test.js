const{signUpUser} = require("./signup") //importing function
describe("Test for Signup", () =>{
    it("should successfully create an account",() =>{

        const user = signUpUser("Imani","imani@gmail.com","1234");

     expect(user.username)
     .toBe("Imani");
     expect(user.email)
     .toBe("imani@gmail.com");
     expect(user.password)
     .toBe("1234");
    });
    
});









