enum int{admin =1,user}
class user{
    protected name:string;
    protected email: string;
    role: int;
    constructor(name:string,email: string, role:int) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getinfo(){
        return `user ${this.name}, email: ${this.email}`
    }
    isAdmin() :void{
        if(this.role ==1){
            console.log("admin")
        }else {
            console.log("user")
        }
    }
}
let user1 = new user("okchoac","okchoac@gmail.com",2)
console.log(user1.getinfo())
user1.isAdmin()