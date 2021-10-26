



import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import UserDto from "../Core/dtos/userDTO";
import getUser from "../Core/usecases/getUser";
import { resolve } from "path/posix";
import userRepo from "../Infrustructures/Repository/userRepo";
import ResponseDto from "../Core/dtos/responseDTO";

const saltRounds = 10;


 export default interface Repository{
    userRepo:userRepo
}

export default class loginController implements Repository{


    userRepo: userRepo;
    constructor(public userRepository:userRepo){
        this.userRepo = userRepository
    }


    async loginController(req:any){
        const user = await getUser(req,this.userRepo)
        if(user != null){
            const match = await bcrypt.compare(req.body.password,user.getPassword())
            if(match){
                const token = jwt.sign({id:123},process.env.JSON_WEB_SECRET_TOKEN!)
                return new ResponseDto("giriş başarılı",token,"200")
            }else {
                return new ResponseDto("bu kullanıcı bulunamadı",null,"401")
            }
        }else {
            return new ResponseDto("bu kullanıcı bulunamadı",null,"401")
        }


       

    }


    // userLogin(token:string){
    //     jwt.verify(token, process.env.JSON_WEB_SECRET_TOKEN!, function(err:any, decoded:any) {
    //         console.log(decoded) // bar
    //       });
    // }
}