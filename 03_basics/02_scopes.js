/////scope
// var c= 300

let a=300
if(true) {
    let a= 10
const b=20
// console.log("inner:", a);

// var c= 30
}

//  {} this curly braces are scope dont get confuse with object as they are object declaration


// console.log (a)
// console.log (b)
// console.log (c)


function one(){
    const username ="hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);

    }
    // console.log(website);

    // two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website ="youtube"
        // console.log(username+website);
        // console.log(website);

    }
    // console.log(username);
}


function  addone(num){
    return num + 1         //// yeh function hai
}

addone(5)





const addTwo = function(num){
    return num + 2
}                                // yeh function hi hai but expression use karaha hai variable me hold krraha hai function ko concept of hoisting

addTwo(5)