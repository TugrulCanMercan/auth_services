import LoginApi from "../Helpers/RouterManager";
import loginController from "../Controllers/LoginController";
import signUpController from "../Controllers/SignUpController";
import verifyToken from "./Middleware/verifyToken";

const loginApi = (userRepo:any) => {

    LoginApi.get('/signIn',  (req, res)=> {
        const controller = new loginController(userRepo)
        controller.loginController(req).then((result)=>{
            res.send(result)
        }).catch((err)=>{
            res.send(err)
        })
    });

    // LoginApi.get('/home',verifyToken,(req,res)=>{
    //     console.log(req.body.user)
    //     res.send("adammm")
    // })
    return LoginApi
}


export default loginApi