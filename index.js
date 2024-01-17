import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config()

const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB!");
    }).catch((err)=>{
        throw err;
    });
}

app.listen(8800, ()=>{
    connect();
    console.log("Listening at PORT: 8800");
})