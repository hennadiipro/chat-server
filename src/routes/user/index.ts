import { Router } from "express";
import { createUserController } from "./instance/CreateUser";
import { listUserByIdController } from "./instance/ListUserById";
import { listUsersByRoomController } from "./instance/ListUsersByRoomController";

const userRoute = Router();

userRoute.post("/create", (req, res) => 
  createUserController.handle(req, res));

userRoute.get("/user/:id/list", (req, res) =>
  listUserByIdController.handle(req, res));

userRoute.get("/room/:roomId/list", (req, res) =>
  listUsersByRoomController.handle(req, res));

export { userRoute };
