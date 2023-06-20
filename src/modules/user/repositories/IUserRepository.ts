import { UserRoom } from "../../room/dto/IRoomDto";
import { ICreateUserDto } from "../dto/ICreateUserDto";
import { IUserDto } from "../dto/IUserDto";

interface IUserRepository {
  create(user: ICreateUserDto): Promise<IUserDto>;
  listUserById(id: string): Promise<IUserDto | null>;
  listUsersByRoom(roomId: string): Promise<UserRoom[]>;
  deleteUser(userId: string): Promise<void>;
  deleteManyUsers(userIds: string[]): Promise<void>;
}

export { IUserRepository };
