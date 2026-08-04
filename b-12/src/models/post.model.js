const mongoose =  require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String ,
        default:""
    },
    imageUrl:{
        type:String,
        required:[true,"Image url is required to create a post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"User id is required for creating an post"]
    },
    // createdAt:Date-time,
})

const postModel = mongoose.model("post",postSchema)

module.exports = postModel;