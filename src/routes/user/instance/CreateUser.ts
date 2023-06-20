import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { CreateUserController } from "../../../modules/user/use-cases/createUser/CreateUserController";
import { CreateUserService } from "../../../modules/user/use-cases/createUser/CreateUserService";

const createUserRepository = new UserRepository();
const createUserService = new CreateUserService(createUserRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
