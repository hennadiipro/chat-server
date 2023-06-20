import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { ListUserByIdController } from "../../../modules/user/use-cases/listUserById/ListUserByIdController";
import { ListUserByIdService } from "../../../modules/user/use-cases/listUserById/ListUserByIdService";

const listUserByIdRepository = new UserRepository();
const listUserByIdService = new ListUserByIdService(listUserByIdRepository);
const listUserByIdController = new ListUserByIdController(listUserByIdService);

export { listUserByIdController };
