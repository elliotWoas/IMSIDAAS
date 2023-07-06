import express from "express";
import { verifyUser} from "../utils/verifyToken.js";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);

export default router;
