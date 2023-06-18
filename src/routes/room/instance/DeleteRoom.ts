import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { DeleteRoomService } from "../../../modules/room/use-cases/deleteRoom/DeleteRoomService";
import { DeleteRoomController } from "../../../modules/room/use-cases/deleteRoom/DeleteRoomController";

const deleteRoomRepository = new RoomRepository();
const deleteRoomService = new DeleteRoomService(deleteRoomRepository);
const deleteRoomController = new DeleteRoomController(deleteRoomService);

export { deleteRoomController };
