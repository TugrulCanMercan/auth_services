import mongodb from "mongoose";
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
}
