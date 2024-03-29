import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comment.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config()

const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB!");
    }).catch((err)=>{
        throw err;
    });
}

app.use(express.json())
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong!";
    return res.status(status).send({
        success: false,
        status,
        message,
    });
});

app.listen(8800, ()=>{
    connect();
    console.log("Listening at PORT: 8800");
});