import User from "../models/User.js";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const sevedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: sevedUser,
    });
    return;
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};