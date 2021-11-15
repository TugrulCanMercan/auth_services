import userRepo from "../../Infrustructures/Repository/userRepo";
import mongodb from "mongoose";
import userModel from "../../Infrustructures/mongo-model/userModel";
import UserDto from "../dtos/userDTO";


export default async (req: any, userRepo: userRepo) => {

    const user = await userRepo.findUser({email: req.body.email})
    if (user.length == 0) {
        return null
    } else {
        const userDTO = new UserDto(user[0].email, user[0].password, user[0].UUID)

        return userDTO
    }
}

