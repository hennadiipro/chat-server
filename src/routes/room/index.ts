import { Router } from "express";
import { io } from "../..";

const roomRoute = Router();

roomRoute.get("/", (req, res) => {
  res.json({ message: "Room route" });
});

export { roomRoute };
