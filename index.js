const express=require("express");
const app=express();
const dotenv=require("dotenv");
const  userRouter = require("./routes/user");
const connectDB  =require("./config/db");
dotenv.config()
connectDB()
app.use(express.json());
app.use(express.static("./uploads"))
app.use("/",userRouter)
app.listen(9000,()=>{
    console.log("your app is runnning")
})
