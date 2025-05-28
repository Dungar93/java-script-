 function User (username,email){
    this._username  =  username
    this._email =  email

    Object.defineProperty(this,'email',{
        get :function(){
            return this._email.toUpperCase()
        } 

    })
 }