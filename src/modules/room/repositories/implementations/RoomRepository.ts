import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../entities/RoomEntity";
import { IRoomDto } from "../../dto/IRoomDto";

class RoomRepository implements IRoomRepository {
  async create({ title }: ICreateRoomDto): Promise<IRoomDto> {
    const roomDocument = new Room({ title });

    return await roomDocument.save();
  }
  async listAllRooms(): Promise<IRoomDto[]> {
    return await Room.find({});
  }
  async listRoom(id: string): Promise<IRoomDto | null> {
    return await Room.findOne({ _id: id });
  }
  async deleteRoom(id: string): Promise<void> {
    await Room.deleteOne({ _id: id });
  }
  async deleteManyRooms(ids: string[]): Promise<void> {
    await Room.deleteMany({ _id: ids });
  }
}

export { RoomRepository };
