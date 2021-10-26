import LoginApi from "../Helpers/RouterManager";
import loginController from "../Controllers/LoginController";
import signUpController from "../Controllers/SignUpController";
import userRepository from "../Infrustructures/Repository/userRepo";
import verifyToken from "./Middleware/verifyToken";

const userRepo = new userRepository()


LoginApi.route("/signUp")
    .get((req, res) => {
    })
    .post(async (req, res) => {
        const controller = new signUpController(userRepo)
        controller.userSing(req).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)
        })
    })
LoginApi.get('/login',  (req, res)=> {
    const controller = new loginController(userRepo)
    controller.loginController(req).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })


});

LoginApi.get('/home',verifyToken,(req,res)=>{
   console.log(req.body.user)
    res.send("adammm")
})

export default LoginApi