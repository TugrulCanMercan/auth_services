import { Router } from "express";
import  LoginApi  from "./Api/LoginApi";
import SignUpApi from "./Api/SignUpApi"
import userRepo from "./Infrustructures/Repository/userRepo";




const routerModule = (UserRepository:any)=> {
    const router = Router()
    const imports = [
        LoginApi(UserRepository),
        SignUpApi(UserRepository)

    ]
    router.use(imports)
    return router
}




export default routerModule