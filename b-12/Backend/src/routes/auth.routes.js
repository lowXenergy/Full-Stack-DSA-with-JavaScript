const  express = require("express");
const authRoute = express.Router();
const cookie = require("cookie-parser")
const authController = require("../controllers/auth.controller")
const identifyUser = require("../middleware/auth.middleware")

authRoute.post("/register",authController.registerController)

authRoute.post("/login",authController.loginController)

authRoute.get("/get-me",identifyUser,authController.getMeController)

module.exports = authRoute;