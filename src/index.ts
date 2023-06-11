import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { userRoute } from "./routes/user";
import { roomRoute } from "./routes/room";

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use("/rooms", roomRoute);
app.use("/users", userRoute);

mongoose.connect((`mongodb://admin:7v7HRAE2&fm5@localhost:27017/`)).then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 5000");
    });
  });
