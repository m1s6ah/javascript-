function sayMyName( ){
  console.log("m")
console.log("i")
console.log("s")
console.log("b")
console.log("a")
console.log("h")
}

// sayMyName()
                      // parameters
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);

// }
           //arguments
// const result = addTwoNumbers(3,4)


function add2Numbers(num1,num2){
    // let result = num1 + num2
    //  console.log("misbah");
    // return result
   
    return num1 + num2                   

}

const result = add2Numbers(3,5)
// console.log("Result:",result);



function loginUserMessage(username){
    if (username == undefined){
        console.log("please enter a username")
        return

    }
    return `${username} just logged in`
   }


// console.log(loginUserMessage()) 

///// how multiple number of parameters are passed using rest operator ...
function calculateCartPrice(...num1){//rest and spread operation 
   return num1 
}

// console.log(calculateCartPrice(200,400,500))

const user ={
    username:"hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({   // object bana kar values pass ki
    username:"sam",
    price:399
})

/// array bana kar value pass krenge

const mynewArray =[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([100,200,300,400]));