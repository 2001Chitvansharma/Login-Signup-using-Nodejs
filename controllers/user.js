const user = require("../model/user")



const createuser = async(req,res) =>{
    try {
        
        const{username,password} =req.body
        console.log(req.file);

        if(await user.findOne({username:username})){

        
            res.send("already exsists")
        }
        else{res.send(await user.create({
            username,
            password,
            image:`http://localhost:9000/images/${req.file.filename}`,
        }))};
        
    } catch (error) {
        res.send(error.message)
        
    }
}

const loginuser = async(req,res)=>{
    try {
        
        const{username,password} =req.body
 if(await user.findOne({username:username,
     password:password})){

        
    res.send("login successfully")
}
else{
    res.send("invalid user")
}
        
    } catch (error) {
        res.send("error")
    }
}



module.exports= {createuser,loginuser}