const mongoose=require("mongoose")
require('dotenv').config()


const ConnectMongoDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(" DataBase connected")
    } catch (error) {
        console.log("MongoDb connection error",error.message)
        process.exit(1)
    }
}


mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb Disconnected")
})

mongoose.connection.on("error",(err)=>{
    console.log("MongoDb Connection Error",err);
})




module.exports=ConnectMongoDB