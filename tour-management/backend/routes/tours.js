import express from "express";
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour } from "../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

export default router;
