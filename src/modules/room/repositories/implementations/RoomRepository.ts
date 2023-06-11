import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../entities/RoomEntity";

class RoomRepository implements IRoomRepository {
  async create(room: ICreateRoomDto): Promise<ICreateRoomDto> {
    const roomDocument = new Room(room);

    return await roomDocument.save();
  }
}

export { RoomRepository };
