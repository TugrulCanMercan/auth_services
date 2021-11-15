


export default class UserDto {
    private UUID:string
    private email:string
    private password:string

    constructor(email:string,password:string,UUID:string){
        this.email = email
        this.password = password
        this.UUID = UUID
    }

    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
    getUUID(){
        return this.UUID
    }

}