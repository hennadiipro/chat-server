import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { UserRepository } from "../../repositories/implementation/UserRepository";

class CreateUserService {
  constructor(private userRepository: UserRepository) {}
  execute(user: ICreateUserDto) {
    return this.userRepository.create(user);
  }
}

export { CreateUserService };
