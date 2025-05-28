class User {
    constructor(username , email ){
        this.username  =  username 
        this .email =  email
    }
    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
            this._email = value 
    }
}
const dungar  =  new User ("dungar","dungar@gmail.com")
console.log(dungar.username);
console.log(dungar.email)