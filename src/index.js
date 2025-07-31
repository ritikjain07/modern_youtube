// require('dotenv').config(path)/

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is runnerning at port: ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("mongodb connection fail", err);
})







// import express from "express";
// const app = express();

// ;( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected to MongoDB");
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()


// connectDB()