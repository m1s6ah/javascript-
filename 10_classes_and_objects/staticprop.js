class User{
    constructor(username){
        this.username = username;
    }

logMe(){
    console.log(`Username: ${this.username}`);
}
static createId(){
    return`123`
}
}
const misbah = new User("misbah")
// console.log(User.createId())

class Teacher extends User{
    constructor(username, email)
{   super(username);
    this.email= email
}}
const ipone = new Teacher("ipone","i@phone.com")
console.log(Teacher.createId())