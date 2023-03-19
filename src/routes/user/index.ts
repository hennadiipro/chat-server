import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.json({ message: "User Route" });
});

export { userRoute };
