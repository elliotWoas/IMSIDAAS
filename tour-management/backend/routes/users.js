import express from "express";

import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

// update the user
router.put("/:id", updateUser);
// delete the user
router.delete("/:id", deleteUser);


export default router;
