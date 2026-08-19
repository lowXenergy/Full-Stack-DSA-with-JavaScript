const followModel = require("../models/follow.model");
const userModel = require("../models/user.model")

//Currently it can follow itself
async function  followUserController (req,res) {
    const followerUsername = req.user.username;//Who is following
    const followeeUsername = req.params.username;//Kisko follow kiya ja rha hai 

    console.log(followerUsername,followeeUsername)

    if(followeeUsername===followerUsername){
        return res.status(400).json({
            message:"You can't follow yourself"
        })
    }

    const isFolloweeExist = await userModel.findOne({
        username:followeeUsername
    })
console.log(isFolloweeExist)
    if(!isFolloweeExist){
        return res.status(404).json({
            message:`User ${followeeUsername} does't exist`
        })
    }

    
    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`You are already following ${followeeUsername}`,
            follow:isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername
    })
    // console.log(followRecord)

    res.status(201).json({
        message:`You are now following ${followeeUsername}`,
        follow:followRecord
    })
}

async function  unfollowUserController(req,res) {
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(!isAlreadyFollowing){
        return res.status(200).json({
            message:`You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isAlreadyFollowing._id)

    res.status(200).json({
        message:`You have unfollowed ${followeeUsername}`
    })

}

module.exports = {
    followUserController,
    unfollowUserController
}