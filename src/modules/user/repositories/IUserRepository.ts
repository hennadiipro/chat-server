import { ICreateUserDto } from "../dto/ICreateUserDto";
import { IUserDto } from "../dto/IUserDto";

interface IUserRepository {
  create(user: ICreateUserDto): Promise<IUserDto>;
}

export { IUserRepository };
