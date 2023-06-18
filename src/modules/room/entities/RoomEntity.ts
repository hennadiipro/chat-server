import { Schema, model } from "mongoose";
import { IRoomDto } from "../dto/IRoomDto";

const roomSchema = new Schema<IRoomDto>({
  title: String,
  messages: [{
    content: String,
    sender: {
      name: String,
      id: String,
    },
  }],
  // owner
  // groupPeople
});

export const Room = model('Room', roomSchema);
