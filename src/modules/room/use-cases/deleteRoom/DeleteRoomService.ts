import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class DeleteRoomService {
  constructor (private roomRepository: RoomRepository) {}
  execute (id: string) {
    return this.roomRepository.deleteRoom(id);
  }
}

export { DeleteRoomService };
