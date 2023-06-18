import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class DeleteManyRoomsService {
  constructor (private roomRepository: RoomRepository) {}
  execute (ids: string[]) {
    return this.roomRepository.deleteManyRooms(ids);
  }
}

export { DeleteManyRoomsService };
