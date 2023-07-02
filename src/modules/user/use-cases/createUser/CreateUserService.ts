import { IGithubUser } from "../../dto/IGithubUser";
import { UserRepository } from "../../repositories/implementation/UserRepository";

class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  async execute(user: IGithubUser) {
    const isThereGithubUser = await this.userRepository.listUserById(user.login);

    if (isThereGithubUser) {
      return isThereGithubUser;
    }

    return this.userRepository.create(user);
  }
}

export { CreateUserService };
