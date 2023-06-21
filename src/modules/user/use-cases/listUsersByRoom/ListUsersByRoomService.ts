import { UserRepository } from "../../repositories/implementation/UserRepository";

class ListUsersByRoomService {
  constructor(private userRepository: UserRepository) {}
  execute(roomId: string) {
    return this.userRepository.listUsersByRoom(roomId);
  }
}

export { ListUsersByRoomService };
