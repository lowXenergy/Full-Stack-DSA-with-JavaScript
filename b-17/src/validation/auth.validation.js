import {body,validationResult} from "express-validator";

const validate = (req,res,next)=>{
            const errors = validationResult(req)

            if(errors.isEmpty()){
                return next()
            }

            res.status(400).json({
                errors:errors.array()
            })
        }

export const registerValidation =
    [
        body("username").isString().withMessage("Username should be string"),
        body("email").isEmail().withMessage("Email should be a valid email address"),
        body("password").isLength({min:6}).withMessage("Password should be at least 6 in length"),
        validate
    ]