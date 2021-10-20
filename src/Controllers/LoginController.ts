



import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import UserDto from "../Core/dtos/userDTO";
import { resolve } from "path/posix";

const saltRounds = 10;

export default class loginController {
    userLogin(token:string){
        jwt.verify(token, process.env.JSON_WEB_SECRET_TOKEN!, function(err:any, decoded:any) {
            console.log(decoded) // bar
          });
    }
}