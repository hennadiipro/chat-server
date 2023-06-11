import { Schema, model } from "mongoose";
import { ICreateRoomDto } from "../dto/ICreateRoomDto";

const roomSchema = new Schema<ICreateRoomDto>({
  title: String,
  messages: [{
    content: String,
    sender: {
      name: String,
      id: String,
    },
  }],
});

export const Room = model('Room', roomSchema);
