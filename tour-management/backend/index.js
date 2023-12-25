import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "dotenv";
env.config();

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

const app = express();
const port = process.env.PORT;
// add domain 
const corsOptions = {
  origin: ["https://imsidaas.vercel.app"],
  method: ["POST", "GET"],
  credentials: true,
};

// data base connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

app.get('/', (req, res) => {
  res.send("welcome to backend test!!")
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
  connect();
  console.log("server listening on port", port);
});
