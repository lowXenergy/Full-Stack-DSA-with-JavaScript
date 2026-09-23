//error handling middleware
import dotenv from "dotenv";

dotenv.config();

function handleError(err,req,res,next){
    // res.status(500).json({
    //     message:err.message
    // })

    // res.status(err.status).json({
    //     message:err.message,
    //     stack:err.stack // Tells us exaclty where the error came from(only for developer not for production)
    // })

    //After dotenv
    const response = {
        message:err.message
    }

    if(process.env.NODE_ENVIRONMENT==="development"){
        response.stack=err.stack
    }

    res.status(err.status).json(response)
}

export default handleError;