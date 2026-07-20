const  express = require("express");
const authRoute = express.Router();
const cookie = require("cookie-parser")
const authController = require("../controllers/auth.controller")

authRoute.post("/register",authController.registerController)

authRoute.post("/login",authController.loginController)

module.exports = authRoute;