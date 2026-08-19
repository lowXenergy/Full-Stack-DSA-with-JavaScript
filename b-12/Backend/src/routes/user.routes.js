const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const identifyUser = require("../middleware/auth.middleware")

// @route Post /api/users/follow/:userid [private]
//@desc follow the user 

userRouter.post("/follow/:username",identifyUser,userController.followUserController)

userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)

module.exports = userRouter;