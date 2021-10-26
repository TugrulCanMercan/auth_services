
import express from "express";
import routerModule  from "./RouterModule";

import dbConnection from "./Infrustructures/Db-access/db-connection";

import 'dotenv/config'
import userRepo from "./Infrustructures/Repository/userRepo";



const app = express()
const PORT = process.env.PORT || 3000 
app.use(express.json())
app.use(routerModule)



app.listen(PORT,()=>{
    dbConnection()
    // mongoose.connect("mongodb://admin:password@mongo:27017/")
    console.log(PORT+ "dinleniyor")
})
 




