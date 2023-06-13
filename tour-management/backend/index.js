import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from"dotenv"
env.config();

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js'

const app = express();
const port = process.env.PORT;

// data base connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// midleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth', authRoute); 
app.use('/tour', tourRoute ); 
app.use('/users', userRoute ); 

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
