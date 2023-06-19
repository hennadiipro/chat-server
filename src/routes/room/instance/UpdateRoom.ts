import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { UpdateRoomController } from "../../../modules/room/use-cases/updateRoom/UpdateRoomController";
import { UpdateRoomService } from "../../../modules/room/use-cases/updateRoom/UpdateRoomService";

const updateRoomRepository = new RoomRepository();
const updateRoomService = new UpdateRoomService(updateRoomRepository);
const updateRoomController = new UpdateRoomController(updateRoomService);

export { updateRoomController };
