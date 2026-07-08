class User{
    constructor(email,password){
        this.email = email,
        this.password = password

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password= value.toUpperCase()
    }
}
const misbah = new User("misbah@example.com", "abc")
console.log(misbah.email)
console.log(misbah.password)