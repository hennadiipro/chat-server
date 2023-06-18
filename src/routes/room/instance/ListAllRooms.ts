import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { ListRoomsService } from "../../../modules/room/use-cases/listAllRooms/ListRoomsService";
import { ListRoomsController } from "../../../modules/room/use-cases/listAllRooms/ListRoomsController";

const listRoomsRepository = new RoomRepository();
const listRoomsService = new ListRoomsService(listRoomsRepository);
const listRoomsController = new ListRoomsController(listRoomsService);

export { listRoomsController };
