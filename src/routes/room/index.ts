import { Router } from "express";
import { createRoomController } from "./instance";

const roomRoute = Router();

roomRoute.post("/create", createRoomController.handle);

export { roomRoute };
