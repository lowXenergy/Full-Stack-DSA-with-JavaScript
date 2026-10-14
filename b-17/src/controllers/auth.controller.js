// export async function registerUser(req,res,next){
//     try{
//         throw new Error("Encountered an error while registering new user")
//     }catch(err){
//         next(err)
//     }
// }

// export async function registerUser(req,res,next){
 
//     // const err =  new Error("Password is too weak")
//     // err.status = 400
//     // next(err)

//     try{
//         throw new Error("Password is too weak")
//     }catch(err){
//         err.status=400
//         next(err)
//     }
// }

//Validation
export async function registerUser(req,res,next){
  res.status(201).json({
    message:"User registered successfully"
  })
}


//Response => html ; we require json that's why error handling middleware