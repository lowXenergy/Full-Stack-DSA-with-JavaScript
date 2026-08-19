const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower:{
        type:String
    },
    followee:{
        type:String
    },status:{
        type:String,
        default:"pending",
        enum:{
            values:["pending","accepted","rejected"],
            message:"Status can only be pending, accepted or rejected"
        }
    }
},
   {
        timestamps:true
    }
) 

// Validation layers 1) Frontend , 2) Backend -> Express validator , controller , Db/Schema level
followSchema.index({followe:1,followee:1},{unique:true})

const followModel = mongoose.model("follows",followSchema);

module.exports = followModel