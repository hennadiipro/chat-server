import { IDeleteDocument } from "../../interfaces/IDeleteDocument";
import { UserRoom } from "../../room/dto/IRoomDto";
import { ICreateUserDto } from "../dto/ICreateUserDto";
import { IUserDto } from "../dto/IUserDto";

interface IUserRepository {
  create(user: ICreateUserDto): Promise<IUserDto>;
  listUserById(id: string): Promise<IUserDto | null>;
  listUsersByRoom(roomId: string): Promise<UserRoom[]>;
  listAllUsers(): Promise<IUserDto[]>;
  deleteUser(userId: string): Promise<IDeleteDocument>;
  deleteManyUsers(userIds: string[]): Promise<IDeleteDocument>;
}

export { IUserRepository };
