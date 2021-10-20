import  LoginApi from "../Helpers/RouterManager";
import loginController from "../Controllers/LoginController";
import signUpController from "../Controllers/SignUpController";
import userRepository from "../Infrustructures/Repository/userRepo";
LoginApi.route("/deneme")
.get((req,res)=>{  
})
.post(async (req,res)=>{
    const controller = new signUpController(new userRepository())
    controller.userSing(req).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })
})
LoginApi.get('/user/:id', function(req, res) {
    const controller = new loginController()
    res.send(controller.userLogin(req.params.id)) 
  });

export default LoginApi