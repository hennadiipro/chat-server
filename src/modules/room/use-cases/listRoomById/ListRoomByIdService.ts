import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class ListRoomByIdService {
  constructor (private roomRepository: RoomRepository) {}

  execute(id: string) {
    return this.roomRepository.listRoom(id);
  }
}

export { ListRoomByIdService };
