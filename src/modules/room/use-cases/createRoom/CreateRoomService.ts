import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { IRoomDto } from "../../dto/IRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class CreateRoomService {
  constructor (private roomRepository: RoomRepository) {}
  async execute(room: ICreateRoomDto): Promise<IRoomDto> {
    return await this.roomRepository.create(room);
  }
}

export { CreateRoomService };
