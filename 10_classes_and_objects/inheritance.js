class User{
    constructor(username){
        this.username =username
 
    
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }



    addCourse(){
        console.log(` new course was added by ${this.username}`);
        
    }
}


const chai = new Teacher("chai","math")
chai.addCourse();
chai.logMe();