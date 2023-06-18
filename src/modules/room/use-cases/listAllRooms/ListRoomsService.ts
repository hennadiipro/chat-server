import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class ListRoomsService {
  constructor (private roomRepository: RoomRepository) {}
  execute() {
    return this.roomRepository.listAllRooms();
  }
}

export { ListRoomsService };