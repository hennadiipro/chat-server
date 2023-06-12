import { ICreateRoomDto } from "./ICreateRoomDto";

interface RoomMessage {
  content: string;
  sender: {
    name: string;
    id: string;
  }
}

interface IRoomDto extends ICreateRoomDto {
  _id: string;
  messages: RoomMessage[];
}

export { IRoomDto };
