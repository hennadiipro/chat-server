import { UserRepository } from "../../repositories/implementation/UserRepository";

class DeleteUserService {
  constructor(private userRepository: UserRepository) {}
  execute(userId: string) {
    return this.userRepository.deleteUser(userId);
  }
}

export { DeleteUserService };
