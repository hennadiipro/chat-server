import { UserRepository } from "../../../modules/user/repositories/implementation/UserRepository";
import { ListUsersByRoomController } from "../../../modules/user/use-cases/listUsersByRoom/ListUsersByRoomController";
import { ListUsersByRoomService } from "../../../modules/user/use-cases/listUsersByRoom/ListUsersByRoomService";

const listUsersByRoomRepository = new UserRepository();
const listUsersByRoomService = new ListUsersByRoomService(listUsersByRoomRepository);
const listUsersByRoomController = new ListUsersByRoomController(listUsersByRoomService);

export { listUsersByRoomController };
