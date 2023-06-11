import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { RoomRepository } from "../../repositories/implementations/RoomRepository";

class CreateRoomService {
  constructor (private roomRepository: RoomRepository) {}
  async execute(room: ICreateRoomDto): Promise<ICreateRoomDto> {
    return await this.roomRepository.create(room);
  }
}

export { CreateRoomService };
