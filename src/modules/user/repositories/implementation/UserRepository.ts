import { IDeleteDocument } from "../../../interfaces/IDeleteDocument";
import { UserRoom } from "../../../room/dto/IRoomDto";
import { Room } from "../../../room/entities/RoomEntity";
import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { IUserDto } from "../../dto/IUserDto";
import { User } from "../../entities/UserEntity";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  async create(user: ICreateUserDto): Promise<IUserDto> {
    const userDocument = new User(user); 

    return await userDocument.save();
  }
  async listUserById(id: string): Promise<IUserDto | null> {
    return await User.findOne({ _id: id });
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
}

export { UserRepository };
