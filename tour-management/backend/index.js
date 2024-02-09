import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "dotenv";
env.config();

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

const app = express();
const port = process.env.PORT;
// add domain
const corsOptions = {
  origin: ["https://imsidaas.vercel.app"],
  method: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("welcome to backend test!!");
});

// midleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/tours", tourRoute);
app.use("/api/users", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/booking", bookingRoute);

app.listen(port, () => {
  console.log("server listening on port", port);
});
