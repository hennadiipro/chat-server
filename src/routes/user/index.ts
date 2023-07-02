import { Router } from "express";
import { createUserController } from "./instance/CreateUser";
import { listUserByIdController } from "./instance/ListUserById";
import { listUsersByRoomController } from "./instance/ListUsersByRoomController";
import { deleteUserController } from "./instance/DeleteUser";
import { deleteManyUsersController } from "./instance/DeleteManyUsers";
import { listAllUsersController } from "./instance/ListAllUsers";
import { getGithubAccessToken } from "./middlewares/getGithubAccessToken";
import { getGithubUser } from "./middlewares/getGithubUser";

const userRoute = Router();
// TO DO: Make another middleware to validate if the user already exist on database,
// whether yes, return the user data saved on database
userRoute.post("/create/:code", getGithubAccessToken,
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
