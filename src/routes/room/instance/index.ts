import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { CreateRoomController } from "../../../modules/room/use-cases/createRoom/CreateRoomController";
import { CreateRoomService } from "../../../modules/room/use-cases/createRoom/CreateRoomService";

const createRoomRepository = new RoomRepository();
const createRoomService = new CreateRoomService(createRoomRepository);
const createRoomController = new CreateRoomController(createRoomService);

export { createRoomController };