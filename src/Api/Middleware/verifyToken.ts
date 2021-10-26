import jwt from "jsonwebtoken";
import {Request,Response,NextFunction} from "express";
export default (req:any,res:Response,next:NextFunction) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.JSON_WEB_SECRET_TOKEN!, (err: any, user: any) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.body.user = user

        next()
    })


}