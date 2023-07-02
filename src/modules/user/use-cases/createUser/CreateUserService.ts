import { IGithubUser } from "../../dto/IGithubUser";
import { UserRepository } from "../../repositories/implementation/UserRepository";

class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  execute(user: IGithubUser) {
    return this.userRepository.create(user);
  }
}

export { CreateUserService };
