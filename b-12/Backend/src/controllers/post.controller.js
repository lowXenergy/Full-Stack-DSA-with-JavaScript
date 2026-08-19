const postModel = require("../models/post.model")
const Imagekit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");
const { post } = require("../app");
const likeModel = require("../models/likes.model")


const imagekit = Imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})


async function createPostController(req,res){
    // console.log(req.body,req.file);

    const file= await imagekit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer), req.file.originalname),
        fileName:req.file.originalname,
        folder:"cohort-2-insta-clone-posts"
    })

    const post = await postModel.create({
        caption:req.body.caption,
        imageUrl:file.url,
        user:req.user.id
    })

    res.status(201).json({
        message:"Post created successfully.",
        post
    })

}

async function getPostController(req,res){
    
    const userId = req.user.id;

    const posts = await postModel.find({
        user:userId
    })

    res.status(200)
    .json({
        message:"post fetched successuflly",
        posts
    })

}

async function getPostDetailsController(req,res){
  
    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    //When we compare 2 obj id in js they don't compared as normal values , we compare them with diffrent method
    const isValidUser = post.user.toString() === userId //Direct comparison using === or == fails for MongoDB ObjectIds because they are objects with different memory references

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content."
        })
    }


    return res.status(200).json({
        message:"Post fetched successfully",
        post
    })

}

async function likePostController(req,res){
    const username = req.user.id
    const postId = req.params.postid

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const like = await likeModel.create({
        post:postId,
        user:username
    })

    res.status(200).json({
        message:"Post liked successfully",
        like
    }) 
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController
}