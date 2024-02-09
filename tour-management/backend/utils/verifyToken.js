import env from "dotenv";
import jwt from "jsonwebtoken";
import session from "express-session";
import createError from "http-errors";

env.config();
const JWT_SECRET_KEY = "himynameis1382eefuck";

// Configure express-session middleware
const sessionMiddleware = session({
  secret: 'your-secret-key', // Change this to a secure secret
  resave: false,
  saveUninitialized: true
});

const verifyToken = (req, res, next) => {
  // Check if session exists
  if (!req.session || !req.session.userToken) {
    return next(createError(401, "You're not authorized"));
  }

  try {
    const user = jwt.verify(req.session.userToken, JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    return next(createError(401, "Token is invalid"));
  }
};

export const verifyUser = (req, res, next) => {
  sessionMiddleware(req, res, () => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.role === "admin") {
        next();
      } else {
        return next(createError(401, "You're not authorized"));
      }
    });
  });
};

export const verifyAdmin = (req, res, next) => {
  sessionMiddleware(req, res, () => {
    verifyToken(req, res, () => {
      if (req.user.role === "admin") {
        next();
      } else {
        return next(createError(401, "You're not authorized"));
      }
    });
  });
};


// import jwt from "jsonwebtoken";
// import env from "dotenv";
// env.config();
// const JWT_SECRET_KEY="himynameis1382eefuck"

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.userToken;

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "You're not authorized",
//     });
//   }

//   try {
//     const user = jwt.verify(token, JWT_SECRET_KEY);
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       message: "Token is invalid",
//     });
//   }
// };

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id || req.user.role === "admin") {
//       next();
//     } else {
//       return res.status(401).json({
//         success: false,
//         message: "You're not authorized",
//       });
//     }
//   });
// };

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.role === "admin") {
//       next();
//     } else {
//       return res.status(401).json({
//         success: false,
//         message: "You're not authorized",
//       });
//     }
//   });
// };
