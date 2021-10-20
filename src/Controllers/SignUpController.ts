
import { response } from "express";
import jwt from "jsonwebtoken";

import responseDTO from "../Core/dtos/responseDTO";
import createNewUser from "../Core/usecases/createNewUser";
import userRepo from "../Infrustructures/Repository/userRepo";
export default class signUpController{

    constructor(public userRepository:userRepo){}

    async userSing(req:any){
        let sonuc = await createNewUser(req,this.userRepository)

        return new responseDTO("200",sonuc,"kayıt başarılı")
        
        // return jwt.sign({id:"denememe"},process.env.JSON_WEB_SECRET_TOKEN!)
    }

    async userPasswordHashing(req:any){
        // return new Promise<any>((resolve,reject)=>{
        //     console.log("gelen şifre" + req.body.password)
        //     bcrypt.hash(req.body.password, 10, function(err, hash) {
        //         if (err){
        //             reject(err)
        //         }else{
        //             console.log("hashlenen şifre db ye at" + hash)
                    
        //             resolve(hash)
        //         }
        //     });
        // }) 
    }
}