//// Dates 

let myDate = new Date()///object or instance
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());

console.log(typeof myDate);

let myCreatedDate = new Date('2020-11-19')
console.log(myCreatedDate.toDateString());

let myCDate = new Date('2023-01-19')
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCDate.getTime());
console.log(Math.floor(Date.now()/1000)); /// ye seconds me value dega  

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday:'long',
    timezone:'UTC'
})