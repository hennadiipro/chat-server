import { UserRepository } from "../../repositories/implementation/UserRepository";

class DeleteManyUsersService {
  constructor(private userRepository: UserRepository) {}
  execute(userIds: string[]) {
    return this.userRepository.deleteManyUsers(userIds);
  }
}

export { DeleteManyUsersService };
