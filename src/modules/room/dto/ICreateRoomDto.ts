interface ICreateRoomDto {
  room_id: string;
  isPrivate: boolean;
  password?: string;
}

export { ICreateRoomDto };