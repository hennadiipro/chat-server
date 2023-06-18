import { ICreateRoomDto } from "../dto/ICreateRoomDto";
import { IRoomDto } from "../dto/IRoomDto";

interface IRoomRepository {
  create(room: ICreateRoomDto): Promise<ICreateRoomDto>;
  listAllRooms(): Promise<IRoomDto[]>;
  listRoom(id: string): Promise<IRoomDto | null>;
  deleteRoom(id: string): Promise<void>;
}

export { IRoomRepository };
