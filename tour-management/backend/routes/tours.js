import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount,
} from "../controllers/tourController.js";
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create new tour
router.post("/", verifyAdmin, createTour);
// update the tour
router.put("/:id", verifyAdmin, updateTour);
// delete the tour
router.delete("/:id", verifyAdmin, deleteTour);
// get single tour
router.get("/:id", getSingleTour);
// get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

export default router;
