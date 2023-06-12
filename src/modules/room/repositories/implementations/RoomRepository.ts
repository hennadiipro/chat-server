import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomRepository } from "../IRoomRepository";
import { Room } from "../../entities/RoomEntity";
import { IRoomDto } from "../../dto/IRoomDto";

class RoomRepository implements IRoomRepository {
  async create({ title }: ICreateRoomDto): Promise<IRoomDto> {
    const roomDocument = new Room({ title });

    return await roomDocument.save();
  }
}

export { RoomRepository };
