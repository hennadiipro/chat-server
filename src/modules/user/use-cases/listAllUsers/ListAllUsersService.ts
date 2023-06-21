import { UserRepository } from "../../repositories/implementation/UserRepository";

class ListAllUsersService {
  constructor(private userRepository: UserRepository) {}
  execute() {
    return this.userRepository.listAllUsers();
  }
}

export { ListAllUsersService };
