/// numbers ////
const score = 400

const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal k baad kitne digit chahiye vo bata rahi hai brackets k andar ki value
console.log(typeof balance);

const str = balance.toString();

console.log(str);                      // "100"
console.log(typeof str);               // string
console.log(str.length);   

const otherNumber = 123.1234
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


////////// maths //////////////


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.min(2,3,4,5,6,7,8,9));
console.log(Math.max(2,3,4,5,6,7,8,9));

console.log(Math.random()); // 0 se 1 k beech value dega
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)); // 1 se 9 k beech value dega

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min));
