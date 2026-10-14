const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "User name already exists" ],
        required: [ true, "User name is required" ]
    },
    email: {
        type: String,
        unique: [ true, "Email already exists" ],
        required: [ true, "Email is required" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ]
    },
    bio: String,
    profileImage: {
        type: String,
        default:"https://ik.imagekit.io/rg5md0acx/Screenshot%202026-09-16%20at%2010.36.22%E2%80%AFAM%201.png"
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel