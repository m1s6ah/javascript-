// Object in JavaScript
// Object is a collection of key-value pairs
// It is a data structure that allows us to store and manipulate data in a structured way
const mySym = Symbol("key1")///define a symbol and give it a key in object

const jsUser = {
    name: "John",
    "fullName": "John Doe",
    "age": 30,
    location:"Jaipur",
    email:"mkp123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],


    [mySym]: "mykey1"
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);

jsUser.email = "mkp@google.com"
Object.freeze(jsUser) /// freeze the object so that we cannot change the values of the object
jsUser.email = "mkp123@outlook.com"
// console.log(jsUser.email );

jsUser.greeting = function () {
    console.log("Hello, welcome to JavaScript!");
}
console.log(jsUser.greeting);

jsUser.greeting2 = function () {
    console.log(`Hello, welcome to JavaScript!,${this.name}`);
}
console.log(jsUser.greeting2);
