import { IDeleteDocument } from "../../interfaces/IDeleteDocument";
import { UserRoom } from "../../room/dto/IRoomDto";
import { IGithubUser } from "../dto/IGithubUser";

interface IUserRepository {
  create(user: IGithubUser): Promise<IGithubUser>;
  listUserById(id: string): Promise<IGithubUser | null>;
  listUsersByRoom(roomId: string): Promise<UserRoom[]>;
  listAllUsers(): Promise<IGithubUser[]>;
  deleteUser(userId: string): Promise<IDeleteDocument>;
  deleteManyUsers(userIds: string[]): Promise<IDeleteDocument>;
}

export { IUserRepository };
