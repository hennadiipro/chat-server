import { Router } from "express";

const roomRoute = Router();

roomRoute.get("/", (req, res) => {
  res.json({ message: "Room route" });
});

export { roomRoute };
