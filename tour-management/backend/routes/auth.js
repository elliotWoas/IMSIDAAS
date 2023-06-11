import express from "express";
const router = express.Router();

import { register, } from "../controllers/authController.js";

//user register
router.post("/register", register);


export default router;
