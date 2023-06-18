import { Router } from "express";
import { createRoomController } from "./instance/CreateRoom";
import { listRoomsController } from "./instance/ListAllRooms";

const roomRoute = Router();

roomRoute.post("/create", (req, res) => 
  createRoomController.handle(req, res));

roomRoute.get("/list", (req, res) => 
  listRoomsController.handle(req, res));

export { roomRoute };
