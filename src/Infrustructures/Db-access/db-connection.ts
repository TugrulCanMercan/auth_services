import mongoose from 'mongoose';


export default function dbConnection(){
    mongoose.connect("mongodb://admin:password@localhost:27017/admin")
    
    mongoose.connection
    .once('open',()=>console.log("bağlantı başarılı"))
    .on("error",(error)=>{
        console.log(error);
    })
}


