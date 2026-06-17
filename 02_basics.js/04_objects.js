/// singleton and constructor objects

// const tinderUser = new Object();    /// singleton object
const tinderUser ={} // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

// consle.log(tinderUser);


const regularUser ={     /// nesting of objects
    fullname:{
        userfullname:{
            firstname:"jhon",
            lastname:"doe"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={ 1: 'a', 2: 'b' } /// object with number as key
const obj2 ={ 3: 'a', 4: 'b' } 

// const obj3 = Object.assign({},obj1,obj2) // an empty object {} is passed as the first argument to Object.assign() to create a new object that will hold the combined properties of obj1 and obj2. The properties from obj1 and obj2 are then copied into this new object, resulting in a merged object that contains all the key-value pairs from both obj1 and obj2. 
// console.log(obj3);                       // this empty object will behave like a target which will hold the elements of both obj1 and obj2

const obj3 = {...obj1,...obj2}  /// spread operator to merge two objects
// console.log(obj3);


//when data comes from a database or an API, we can use the spread operator to merge objects. This is particularly useful when we want to combine data from different sources into a single object for easier manipulation and access.

const users =[
    { 

},
{

},
{

},
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


/////// destructuring


const course = {
    coursename: " ja in hindi ",
    price : "999",
    courseInstructor: "misbah"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

console.log(Instructor)

// const navbar = ({company}) =>{
                                    /// react concept of destructuring
// }
// navbar(company = "misbah")



/////////// api 's

           ////// json : javascript object notation
        //    {
        //     "name": "misbah",
        //     "age" :"22"
        //    }                              //can use json formatter to understand the script
        