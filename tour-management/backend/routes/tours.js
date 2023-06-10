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

const router = express.Router();

// create new tour
router.post("/", createTour);
// update the tour
router.put("/:id", updateTour);
// delete the tour
router.delete("/:id", deleteTour);
// get single tour
router.get("/:id", getSingleTour);
// get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTours);
router.get("/search/getTourCount", getTourCount);

export default router;
