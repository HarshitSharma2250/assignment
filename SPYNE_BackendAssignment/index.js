const express=require("express")
require('dotenv').config()
const ConnectMongoDB=require('./config/db')
const cors=require("cors")
const ImageRouter=require('./routes/image.routes')


// define port
const PORT=process.env.PORT || 4100

// initiate server
const server=express()



// middlewares
server.use(express.json())
server.use(cors({
    origin: (origin, callback) => {
        const allowedLocalhost=/^http:\/\/localhost(5173|3000)?$/;

        if (!origin || allowedLocalhost.test(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


// routes middlewares
server.get('/home',async(req,res)=>{
    res.send("server is setup fine")
})
 server.use("/user",ImageRouter)


// server listening
server.listen(PORT, async()=>{
    try {
        await ConnectMongoDB()
        console.log(`server is up on port ${PORT}`);
    } catch (error) {
        console.log(`Connection to DB Failed : ${error.message}`)
    }
}).on("error", (error)=>{
    console.log(`Error Starting Server. ${error.message}`);
})
