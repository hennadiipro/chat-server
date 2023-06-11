import { Router } from "express";
import { createRoomController } from "./instance";

const roomRoute = Router();

roomRoute.post("/create", (req, res) => 
  createRoomController.handle(req, res));

export { roomRoute };
