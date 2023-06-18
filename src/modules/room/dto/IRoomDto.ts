import { ICreateRoomDto } from "./ICreateRoomDto";

interface User {
  name: string;
  id: string;
}

interface RoomMessage {
  content: string;
  sender: User;
}

interface IRoomDto extends ICreateRoomDto {
  _id: string;
  messages: RoomMessage[];
  owner: User;
  groupPeople: User[];
}

export { IRoomDto };
