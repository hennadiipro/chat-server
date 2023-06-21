import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { ListAllUsersController } from "../../../modules/user/use-cases/listAllUsers/ListAllUsersController";
import { ListAllUsersService } from "../../../modules/user/use-cases/listAllUsers/ListAllUsersService";

const listAllUsersRepository = new UserRepository();
const listAllUsersService = new ListAllUsersService(listAllUsersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersService);

export { listAllUsersController };
