import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { DeleteManyUsersController } from "../../../modules/user/use-cases/deleteManyUsers/DeleteManyUsersController";
import { DeleteManyUsersService } from "../../../modules/user/use-cases/deleteManyUsers/DeleteManyUsersService";

const deleteManyUsersRepository = new UserRepository();
const deleteManyUsersService = new DeleteManyUsersService(deleteManyUsersRepository);
const deleteManyUsersController = new DeleteManyUsersController(deleteManyUsersService);

export { deleteManyUsersController };

