
import userModel from "../../Infrustructures/mongo-model/userModel";
import mongodb from "mongoose";
import bcrypt from "bcrypt";
import userRepo from "../../Infrustructures/Repository/userRepo";

export default async (req: any,userRepo:userRepo) => {
    const createUser = mongodb.model("User", userModel)
    
  
    console.log("gelen şifre" + req.body.password)
    const hashingPassword = await bcrypt.hash(req.body.password, 10);

    const response = await userRepo.createUser(new createUser({
        email:req.body.email,
        password:hashingPassword
    }))

   return response
}


