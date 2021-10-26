import { rejects } from "assert";
import mongodb from "mongoose";
import { resolve } from "path/posix";
import userModel from "../mongo-model/userModel";

import mongoModel from "../mongo-model/userModel";

export default class userRepo {

   

    async createUser(user:any){
        return new Promise<string>((resolve,reject)=>{
            user.save().then(()=>{
                console.log("kayıt başarıyla tamamlandı")
                resolve("kayıt başarıyla tamamlandı")
            })
            .catch(()=>{
                console.log("kayıt başarısız")
                reject("kayıt başarısız")
            });
        })
    }
    async findUser(email:any){
        
        return new Promise<any>((resolve,reject)=>{
            mongodb.model("User",userModel).find(email).then((result)=>{
                console.log(result + " başarıyla bulundu")
                resolve(JSON.parse(JSON.stringify(result)))
            }).catch((err)=>{
                console.log(err)
                reject(err)
            })
        })
    }
}
