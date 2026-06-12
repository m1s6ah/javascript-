let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true ; 0 => false
//" " => false
//"hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




//////// Operations /////////

let value = 3
let negValue = -value
// console.log(negValue);

/* console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);
*/

let str1 ="hello"
let str2 ="hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2); // agar string ki value first hai toh saare conversions string k hisaab se honge
// console.log(1+2+"2");//agar string ki value last hai toh pehle jo bhi conversion diya hoga vo hojayega fir string execute hoga
// console.log( (3 + 4) * 5 % 3 );

// console.log(true);
console.log(+"");

let num1 , num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++;
console.log(gameCounter);
///

////// comparision //////

//regular comparision operators
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// cases of confusion comparision 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/// ab isme null > 0 false hoga kyuki yeh comparision me null convert hoga number me  all datatypes will perform conversion,
//  null == 0 false hoga kyuki equality check kabhi bhi element ka datatype convert nhi krta vo jis haal me ho usi haal me comparision krega,
//  null >= 0 true hoga. ye isliye hota hai kyuki null ko number me convert karne par 0 aata hai. and yeh bhi conversion operator hai



/// more cases 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// undefined > 0 false hoga kyuki yeh comparision me undefined convert hoga number me  all datatypes will perform conversion,
//  undefined == 0 false hoga kyuki equality check kabhi bhi element ka datatype convert nhi krta vo jis haal me ho usi haal me comparision krega,
//  undefined >= 0 false hoga. ye isliye hota hai kyuki undefined ko number me convert karne par NaN aata hai. and yeh bhi conversion operator hai