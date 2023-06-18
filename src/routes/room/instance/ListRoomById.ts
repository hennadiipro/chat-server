import { RoomRepository } from "../../../modules/room/repositories/implementations/RoomRepository";
import { ListRoomByIdService } from "../../../modules/room/use-cases/listRoomById/ListRoomByIdService";
import { ListRoomByIdController } from "../../../modules/room/use-cases/listRoomById/ListRoomByIdController";

const listRoomByIdRepository = new RoomRepository();
const listRoomByIdService = new ListRoomByIdService(listRoomByIdRepository);
const listRoomByIdController = new ListRoomByIdController(listRoomByIdService);

export { listRoomByIdController };
