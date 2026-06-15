//arrays
// resizable , any datatypes , access by index, 


const myArr = [1,2,3,4,5]
const myHeros = ['shaktiman','naagraj','doga','batman','superman']

const myHeroes = new Array()
// console.log(myArr[0]);
// console.log(myHeros[2]);

// // Array Methods

// myArr.push('6') /// add new item at the end of array
// console.log(myArr);

// myArr.pop() /// remove last item from array
// myArr.unshift('0') /// add new item at the beginning of array
// console.log(myArr);
// console.log (myArr.includes(6))
// console.log (myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

/// slice and splice methods

const myNewArr = [1,2,3,4,5,6,7,8,9]

console.log("A", myArr);

const myn1 = myArr.slice(1,3)   
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) 
console.log("C", myArr);  
console.log(myn2);
