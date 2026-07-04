const user = {
    username: "misbah",
    loginCount:8,
    signedIn:true,

    getUserDetails : function(){
        //  console.log("Got user details from database");
        //  console.log(this);

    }      
}
// console.log(user.username);
// console.log(user.getUserDetails());
//  console.log(this);




/// constructor function


// const promiseOne = new  Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome${this.username} you have logged in ${this.loginCount} times`);
    }

    return this;  ///not mandatory in constructor function, it will return this by default
}

const userOne = new User("misbah", 8, true);
const usertwo = new User("ali", 5, false);
console.log(userOne.constructor);
// console.log(usertwo);

