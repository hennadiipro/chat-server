import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../entities/RoomEntity";
import { IRoomDto } from "../../dto/IRoomDto";
import { IDeleteDocument } from "../../../interfaces/IDeleteDocument";

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
  async deleteRoom(id: string): Promise<IDeleteDocument> {
    return await Room.deleteOne({ _id: id });
  }
  async deleteManyRooms(ids: string[]): Promise<IDeleteDocument> {
    return await Room.deleteMany({ _id: ids });
  }
  async updateRoom(updatedRoom: IRoomDto): Promise<any> { 
    return await Room.findByIdAndUpdate(updatedRoom._id, {...updatedRoom});
  }
}

export { RoomRepository };
