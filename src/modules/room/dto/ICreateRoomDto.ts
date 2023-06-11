interface RoomMessage {
  content: string;
  sender: {
    name: string;
    id: string;
  }
}

interface ICreateRoomDto {
  title: string;
  messages: RoomMessage[];
}

export { ICreateRoomDto };