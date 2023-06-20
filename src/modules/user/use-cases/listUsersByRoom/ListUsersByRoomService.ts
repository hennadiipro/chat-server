import { UserRepository } from "../../repositories/implementation/UserRepository";

class ListUsersByRoomService {
  constructor(private listUserByRoomRepository: UserRepository) {}
  execute(roomId: string) {
    return this.listUserByRoomRepository.listUsersByRoom(roomId);
  }
}

export { ListUsersByRoomService };
