import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.userToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You're not authorized",
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Token is invalid",
    });
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You're not authorized",
      });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You're not authorized",
      });
    }
  });
};
