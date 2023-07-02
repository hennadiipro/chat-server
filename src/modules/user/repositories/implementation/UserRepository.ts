import { IDeleteDocument } from "../../../interfaces/IDeleteDocument";
import { UserRoom } from "../../../room/dto/IRoomDto";
import { Room } from "../../../room/entities/RoomEntity";
import { IGithubUser } from "../../dto/IGithubUser";
import { User } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  async create(user: IGithubUser): Promise<IGithubUser> {
    const userDocument = new User(user); 

    return await userDocument.save();
  }
  async listUserById(id: string): Promise<IGithubUser | null> {
    return await User.findOne({ login: id });
  }
  async listUsersByRoom(roomId: string): Promise<UserRoom[]> {
    const room = await Room.findOne({ _id: roomId });

    return room?.groupPeople || [];
  }
  async deleteUser(userId: string): Promise<IDeleteDocument> {
    return await User.deleteOne({ _id: userId });
  }
  async deleteManyUsers(userIds: string[]): Promise<IDeleteDocument> {
    return await User.deleteMany({ _id: userIds });
  }
  async listAllUsers(): Promise<IGithubUser[]> {
    return await User.find({});
  }
}

export { UserRepository };
