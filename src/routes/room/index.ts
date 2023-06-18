import { Router } from "express";
import { createRoomController } from "./instance/CreateRoom";
import { listRoomsController } from "./instance/ListAllRooms";
import { listRoomByIdController } from "./instance/ListRoomById";

const roomRoute = Router();

roomRoute.post("/create", (req, res) => 
  createRoomController.handle(req, res));

roomRoute.get("/list", (req, res) => 
  listRoomsController.handle(req, res));

roomRoute.get("/list/:id", (req, res) => 
  listRoomByIdController.handle(req, res));

export { roomRoute };
