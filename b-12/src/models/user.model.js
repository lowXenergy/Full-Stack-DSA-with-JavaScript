const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username already exist"],
        required:[true,"User name is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exist"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    profile_img:{
        type:String,
        default:"https://ik.imagekit.io/rg5md0acx/default-avatar-profile-social-media-260nw-1920331226.webp"
    } 
})

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;