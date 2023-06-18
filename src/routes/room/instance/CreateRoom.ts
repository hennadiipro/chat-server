import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { CreateRoomService } from "../../../modules/room/use-cases/createRoom/CreateRoomService";
import { CreateRoomController } from "../../../modules/room/use-cases/createRoom/CreateRoomController";

const createRoomRepository = new RoomRepository();
const createRoomService = new CreateRoomService(createRoomRepository);
const createRoomController = new CreateRoomController(createRoomService);

export { createRoomController };