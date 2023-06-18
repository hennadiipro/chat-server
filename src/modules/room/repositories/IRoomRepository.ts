import { ICreateRoomDto } from "../dto/ICreateRoomDto";

interface IRoomRepository {
  create(room: ICreateRoomDto): Promise<ICreateRoomDto>;
  listAllRooms(): Promise<ICreateRoomDto[]>;
}

export { IRoomRepository };
