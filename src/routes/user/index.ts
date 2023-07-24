import { Router } from "express";
import { createUserController } from "./instance/CreateUser";
import { listUserByIdController } from "./instance/ListUserById";
import { listUsersByRoomController } from "./instance/ListUsersByRoomController";
import { deleteUserController } from "./instance/DeleteUser";
import { deleteManyUsersController } from "./instance/DeleteManyUsers";
import { listAllUsersController } from "./instance/ListAllUsers";
import { getGithubAccessToken } from "../../modules/middlewares/getGithubAccessToken";
import { getGithubUser } from "../../modules/middlewares/getGithubUser";

const userRoute = Router();
userRoute.post("/login/:code", getGithubAccessToken,
  getGithubUser, (req, res) => 
    createUserController.handle(req, res));

userRoute.get("/", (req, res) =>
  listAllUsersController.handle(req, res));

userRoute.get("/user/:id/list", (req, res) =>
  listUserByIdController.handle(req, res));

userRoute.get("/room/:roomId/list", (req, res) =>
  listUsersByRoomController.handle(req, res));

userRoute.delete("/user/:id", (req, res) =>
  deleteUserController.handle(req, res));

userRoute.delete("/", (req, res) =>
  deleteManyUsersController.handle(req, res));

export { userRoute };
