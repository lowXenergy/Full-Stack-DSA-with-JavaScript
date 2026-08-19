const express = require("express");
const postRouter = express.Router();
const PostController = require("../controllers/post.controller");
const multer = require("multer"); // Read the multer doc --> multer npm
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middleware/auth.middleware")
// /api/post[protected]
// caption and image file --> req.body\

postRouter.post("/",upload.single("image"),identifyUser,PostController.createPostController)

// GET  /api/post/ [protected]
postRouter.get("/",identifyUser,identifyUser,PostController.getPostController);

// GET /api/post/details/:postid
// - return a detail about specific post with id. also check wether the post belongs to the user ie is requesting

postRouter.get("/details/:postId",identifyUser,PostController.getPostDetailsController)

// @route POST /api/posts/like/:postid
// @desc like the post

postRouter.post("/like/:postid",identifyUser,PostController.likePostController)

// @route POST /api/posts/unlike/:postid
postRouter.post("/unlike/:postid",identifyUser,PostController.likePostController)

module.exports = postRouter
