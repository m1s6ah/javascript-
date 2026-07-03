// console.log("promises");
//do an async task
//db calls,cryptography,network

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log(`Async task complete`);
        resolve();
    },1000)
})
promiseOne.then(() => {
    console.log(`Promise consumed`);
}
)


// 2nd

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function() {
    console.log("Async 2 resolved");
    
})

//3rd'mis@example
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){;
        resolve({username:"misbah",email:"mis@example"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// 4th

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"misbah",password:"123"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)
})

const username = promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>console.log("The promise is either resolved or rejected"))



// 5th


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)

    })
async function consumePromiseFive(){
  try { 
    const response = await promiseFive
    console.log(response);
}
catch(error){
    console.log(error);
}
}
    consumePromiseFive()


// async  function getAllusers(){
// //    const response = await fetch("https://jsonplaceholder.typicode.com/users")
// //    const users = await response.json()
// //    console.log(users)
// try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//    const users = await response.json()
//    console.log(users)}
//    catch(error){
//     console.log("E:",error);
//    }

// }
// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((users) => {
    console.log(users);
})
.catch((error) => {
    console.log("E:", error);
});