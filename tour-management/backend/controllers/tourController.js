import { Long } from "mongodb";
import Tour from "../models/Tour.js";

// create new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const sevedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: sevedTour,
    });
    return;
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};
// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};
// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      successs: false,
      message: "not found",
    });
  }
};
// getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  console.log(page);
  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    // send response
    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};