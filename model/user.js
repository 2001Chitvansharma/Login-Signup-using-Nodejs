const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({


    username: {

        type: String,
        default: "",
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    image:{
        type:String,
        
    }

});
module.exports = mongoose.model("User", userSchema);

