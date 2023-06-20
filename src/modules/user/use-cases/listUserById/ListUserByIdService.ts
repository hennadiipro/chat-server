import { UserRepository } from "../../repositories/implementation/UserRepository";

class ListUserByIdService {
  constructor(private userRepository: UserRepository) {}
  execute(id: string) {
    return this.userRepository.listUserById(id);
  }
}

export { ListUserByIdService };
