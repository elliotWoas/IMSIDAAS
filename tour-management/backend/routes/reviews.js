import express from "express";
import { createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/:tourId", createReview);

export default router;
