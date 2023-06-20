import { Router } from "express";
import { createUserController } from "./instance/CreateUser";

const userRoute = Router();

userRoute.post("/create", (req, res) => {
  return createUserController.handle(req, res);
});

export { userRoute };
