import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { IUserDto } from "../../dto/IUserDto";
import { User } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  async create(user: ICreateUserDto): Promise<IUserDto> {
    const userDocument = new User(user); 

    return await userDocument.save();
  }
}

export { UserRepository };
