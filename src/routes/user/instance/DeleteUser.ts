import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { DeleteUserController } from "../../../modules/user/use-cases/deleteUser/DeleteUserController";
import { DeleteUserService } from "../../../modules/user/use-cases/deleteUser/DeleteUserService";

const deleteUserRepository = new UserRepository();
const deleteUserService = new DeleteUserService(deleteUserRepository);
const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserController };
