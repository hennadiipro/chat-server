import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { ListRoomsService } from "../../../modules/room/use-cases/listRooms/ListRoomsService";
import { ListRoomsController } from "../../../modules/room/use-cases/listRooms/ListRoomsController";

const listRoomsRepository = new RoomRepository();
const listRoomsService = new ListRoomsService(listRoomsRepository);
const listRoomsController = new ListRoomsController(listRoomsService);

export { listRoomsController };
