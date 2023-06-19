import { IRoomDto } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class UpdateRoomService {
  constructor (private roomRepository: RoomRepository) {}
  execute (updatedRoom: IRoomDto) {
    return this.roomRepository.updateRoom(updatedRoom);
  }
}

export { UpdateRoomService };
