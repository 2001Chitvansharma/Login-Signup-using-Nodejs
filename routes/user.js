const express=require("express")
const {createuser, loginuser} = require("../controllers/user")
const userRouter=express.Router()

const multer = require("multer")
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/images")
    },
    filename:function(req,file,cb){
        const uniquesuffix = Date.now()+file.originalname;
        cb(null,uniquesuffix)

    }
})
const upload = multer({storage:storage})
userRouter.post("/", upload.single("avatar"),createuser)
userRouter.get("/login",loginuser)

module.exports=userRouter;