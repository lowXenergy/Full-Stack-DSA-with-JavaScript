const userModel = require("../models/user.model");
// const crypto = require("crypto");// Very low level package
const bcrypt = require("bcryptjs");// For advacne security
const jwt = require("jsonwebtoken");


async function registerController(req,res){
    const {email,username,password,bio,profile_img}=req.body;

    // const isEmailAlreadyExist = await userModel.findOne({email});
    // if(isEmailAlreadyExist){
    //     return res.send(409).json({
    //         message:"User  already exist with same email"
    //     })
    // }

    // const isUserNameAlreadyExist = await userModel.findOne({username})

    // if(isUserNameAlreadyExist){
    //     return res.send(409).json({
    //         message:"User name already exist"
    //     })
    // }

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409)
        .json({
            message:"User already exists " + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex');

    const hash = await bcrypt.hash(password,10);//(password and salt ie. how many time we want to hash, Its just a no)

    const user = await userModel.create({
        username,
        email,
        bio,
        profile_img,
        password:hash
    })

    const token = jwt.sign({
        // User data , unique data
        id:user._id,
        username:user.username
    },
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)

    res.cookie("tokens",token)

    res.status(201)
    .json({
        message:"User registered successfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            porfile_img:user.profile_img
        }
    })

}

//Currectly we can login with email being of differnt user and username of being diffrent user. The only thing that should be same is password.
async function loginController (req,res){
    const {username,email,password} = req.body
//     const { userNameOrEmail, password } = req.body;

// console.log("userNameOrEmail", userNameOrEmail);
// console.log("password:", password);
// console.log("body:", req.body);

    const user = await userModel.findOne({
        $or:[
            {
                //Array of conditions ie cond 1->1st obj , cond 2-> 2nd obj
                username:username
            },
            {
                email:email
            }
        ]
    })



// const user = await userModel.findOne({
//     $or: [
//         { username: userNameOrEmail },
//         { email: userNameOrEmail }
//     ]
// });

    if(!user){
        return res.status(404).json({
            message:"User not found."
        })
    }

    // const hash = crypto.createHash('sha256').update(password).digest('hex');

    // const isPasswordValid = hash === user.password;

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Incorrect password"
        })
    }

    const token = jwt.sign(
        {
            id:user._id,
            username:user.username 
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.status(200)
    .json({
        message:"User logged in successfully",
          user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            porfile_img:user.profile_img
          }
    })
}


module.exports= {
    registerController,
    loginController
}