import dotenv from "dotenv";

dotenv.config();

// function handleError(err,req,res,next){
//     res.status(err.status).json({
//         message:err.message,
//         stack:err.stack //Using this we can locate where we got our error, only useful for devloper, should't be told during production that's why we use development in env.
//     })
// }

function handleError(err,req,res,next){
    const response = {
         message:err.message
    }

    if(process.env.NODE_ENVIRONMENT==="development"){
        response.stack=err.stack
    }
    res.status(err.status).json(response)
}

export default handleError