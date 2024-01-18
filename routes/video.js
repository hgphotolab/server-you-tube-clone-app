import express from "express";
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
//CREATE VIDEO
router.put("/", verifyToken, addVideo);
//UPDATE VIDEO
router.put("/:id", verifyToken, updateVideo);
//DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo);
//GETVIDEO
router.get("/find/:id", getVideo);

export default router;
