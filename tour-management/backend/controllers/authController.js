import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET_KEY = "himynameis1382eefuck";

//user registeration
export const register = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to register. try again" });
  }
};

//user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;
    //create jwt token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, {
      expiresIn: "15d",
    });

    // set token in the browser cookies and send the response to the client
    // res.setHeader('Set-Cookie', `userToken=${token}; Path=/api/auth; HttpOnly; SameSite=Strict`).status(200)
    // .json({
    //   token,
    //   success: true,
    //   data: { ...rest },
    //   role,
    // });;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 15);

    res
      .cookie("userToken", token, {
        // sameSite: "strict", // Cookie is not sent in cross-site requests
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        sameSite: "Lax", // Allow cross-site usage with some restrictions
        path: "/api/auth", //path to the cookie
        httpOnly: true, // Cookie is accessible only by the server
        // sameSite: "None",
        // secure: true, // Cookie is sent only over HTTPS
        // expires: expirationDate,
        // expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        success: true,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
    });
  }
};
