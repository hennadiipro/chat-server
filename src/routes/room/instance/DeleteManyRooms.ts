import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { DeleteManyRoomsService } from "../../../modules/room/use-cases/deleteManyRooms/DeleteManyRoomsService";
import { DeleteManyRoomsController } from "../../../modules/room/use-cases/deleteManyRooms/DeleteManyRoomsController";

const deleteManyRoomsRepository = new RoomRepository();
const deleteManyRoomsService = new DeleteManyRoomsService(deleteManyRoomsRepository);
const deleteManyRoomsController = new DeleteManyRoomsController(deleteManyRoomsService);

export { deleteManyRoomsController };
