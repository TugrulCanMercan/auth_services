import { Router } from "express";
import  LoginApi  from "./Api/LoginApi";
const router = Router()


const routerModule = {
    imports:[
        LoginApi,

    ]
}


router.use(routerModule.imports)

export default router