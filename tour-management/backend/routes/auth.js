import express from "express";
const router = express.Router();

import { register, login } from "../controllers/authController.js";

//user register
router.post("/register", register);
//user login
router.post("/login", login);

export default router;
