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
