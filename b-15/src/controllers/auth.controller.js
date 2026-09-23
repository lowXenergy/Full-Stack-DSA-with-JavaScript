// export async function registerUser(req,res,next){
//     // throw new Error("Encounter an error while registering new user");//Express inbulid error handler that avoids server creashing but the problem is this gives us response in html format and api accept request json format.
//     // try {
//     //     throw new Error("Encounter an error while registering new user");
//     // } catch (error) {
//     //     next(error)
//     // }

//     //for properly throwing error status code
//     try{
//         throw new Error("Password is too weak");
//     }catch(err){
//         err.status=400
//         next(err)
//     }
// }

export async function registerUser(req,res,next){
   res.status(201).json({
    message:"User registered successfully"
   })
}