import { ICreateRoomDto } from "../dto/ICreateRoomDto";
import { IRoomDto } from "../dto/IRoomDto";

interface IDeleteRooms {
  acknowledged: boolean;
  deletedCount: number;
}

interface IRoomRepository {
  create(room: ICreateRoomDto): Promise<ICreateRoomDto>;
  listAllRooms(): Promise<IRoomDto[]>;
  listRoom(id: string): Promise<IRoomDto | null>;
  deleteRoom(id: string): Promise<IDeleteRooms>;
  deleteManyRooms(ids: string[]): Promise<IDeleteRooms>;
  updateRoom(updatedRoom: IRoomDto): Promise<any>;
}

export { IRoomRepository, IDeleteRooms };
