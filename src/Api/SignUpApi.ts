import SignUp from '../Helpers/RouterManager'
import signUpController from "../Controllers/SignUpController";

 const signUpApi = (userRepository:any) => {

    SignUp.post('/signUp',async (req, res) => {
        const controller = new signUpController(userRepository)
        controller.userSing(req).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)
        })
    })
  return SignUp
}
export default signUpApi