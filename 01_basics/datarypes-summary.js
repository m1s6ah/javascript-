const score = 100;
const scoreValue = 100.5;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('id')
const anotherId = Symbol('id')

console.log(id === anotherId) // false

const bigNumber = 344999594969068568n

///// non primitive data types

// array , objects, functions

const heros = ['shaktiman', 'doga', 'nagraj'];
const myObj = {
    name: 'sachin',
    age: 48,
    isLoggedIn: true
} 

const myFunc = function  (){
    console.log("Hello world")
}
console.log(typeof bigNumber);




///////////////////////////////////////////////////////////////////


// Stack (primitive),Heap (non-primitive)

let myYoutubeName ="misbah"

let anotherName = myYoutubeName
anotherName = "code with misbah"

console.log(anotherName);
console.log(myYoutubeName);

let userOne ={
    email:"user@google.com",
    upi:"user@okaxis"
}

let userTwo = userOne

userTwo.email = "misbah@google.com"

console.log(userOne.email);
console.log(userTwo.email);
