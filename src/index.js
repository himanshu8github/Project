// src/index.js
import 'dotenv/config';
import connectDB from './db/index.js';
import express from 'express';

const app = express();



connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT} `);
    })
})
.catch((error) => {
    console.log("MONGOdb Connection failed ", error)
})

// require('dotenv').config({path: './env'});
// import dotenv from 'dotenv';

// import {mongoose} from 'mongoose';
// import { DB_NAME } from './constants.js'; 
// import {mongoose} from 'mongoose';
// import{DB_NAME} from './constants.js'

// import {connectDB} from './db/index.js';

// dotenv.config({
//     path:'./env'
// })

// connectDB();

//read this also ;;;

// import express from 'express';
//  const app = express();


// //starting IFEE
// ;(async()=> {
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URL} / ${DB_NAME}`)

//       app.on("error", (error) => {
//         console.log("Error :" , error);
//         throw error
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`app is listening on port ${process.env.PORT}`);
//       })
//     }catch(error){
//         console.error("Error :" , error)
//         throw err
//     }
//      }
// )() 