function setUserName(username){
    this.username =  username 
}
function createUser(username,email,password){
   setUserName.call(this,username)
    this.email =  email;
    this.password =  password
}
const dungar  =  new createUser("dungar","@dungar.com" ,"12345678")
console.log(dungar);
