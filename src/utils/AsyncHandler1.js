const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}




// const asyncHandler = (func) => async (req,res,next,err) => {
//     try{
//         await func(req,res,err,next)

//     }catch(error){
//         res.send(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }