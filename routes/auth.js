import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE USER or REGISTER
router.post("/signup", signup );
//SIGN IN
router.post("/signin",signin);

//SIGN IN
router.post("/google",);
//GOOGLE


export default router;
