import { Router } from "express";
import { createRoomController } from "./instance/CreateRoom";
import { listRoomsController } from "./instance/ListAllRooms";
import { listRoomByIdController } from "./instance/ListRoomById";
import { deleteRoomController } from "./instance/DeleteRoom";

const roomRoute = Router();

roomRoute.post("/create", (req, res) => 
  createRoomController.handle(req, res));

roomRoute.get("/list", (req, res) => 
  listRoomsController.handle(req, res));

roomRoute.get("/room/list/:id", (req, res) => 
  listRoomByIdController.handle(req, res));

roomRoute.delete("/room/:id", (req, res) => 
  deleteRoomController.handle(req, res));

export { roomRoute };
