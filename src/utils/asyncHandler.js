const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
       Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
   }
}

export {asyncHandler}



// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         })
//         console.error("Error in asyncHandler:", error);
//         throw error; // Re-throw the error to be handled by the caller
//     }
// }