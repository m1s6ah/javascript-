const name = "misbah"; // 1st way to declare a string
const repoCount = 20;
// console.log(name + repoCount +"Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('misbah-kp-kp') // 2nd way to declare a string

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString =gameName.slice(-1,4);
console.log(anotherString);

const newStringOne = "   misbah    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://www.codewithmisbah.com"
console.log(url.replace('misbah', 'sachin'));

console.log(url.includes('misbah'));

console.log(gameName.split('-'));  