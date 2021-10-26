
import { response } from "express";
import jwt from "jsonwebtoken";

import responseDTO from "../Core/dtos/responseDTO";
import createNewUser from "../Core/usecases/createNewUser";
import userRepo from "../Infrustructures/Repository/userRepo";
export default class signUpController {

    constructor(public userRepository:userRepo){}

    async userSing(req:any){
        let sonuc = await createNewUser(req,this.userRepository)

        return new responseDTO("200",sonuc,"kayıt başarılı")


        // return jwt.sign({id:"denememe"},process.env.JSON_WEB_SECRET_TOKEN!)
    }

  
}