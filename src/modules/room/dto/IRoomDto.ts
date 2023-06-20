import { ICreateRoomDto } from "./ICreateRoomDto";

interface UserRoom {
  name: string;
  id: string;
}

interface RoomMessage {
  content: string;
  sender: UserRoom;
}

interface IRoomDto extends ICreateRoomDto {
  _id: string;
  messages: RoomMessage[];
  owner: UserRoom;
  groupPeople: UserRoom[];
}

export { IRoomDto, UserRoom };
