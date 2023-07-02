import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

import { userRoute } from "./routes/user";
import { roomRoute } from "./routes/room";

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/rooms", roomRoute);
app.use("/users", userRoute);

const mongoUri = `mongodb://${process.env.MONGO_USERNAME}:
${process.env.MONGO_PASSWORD}@localhost:27017/`

mongoose.connect((mongoUri)).then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 5000");
    });
  });
