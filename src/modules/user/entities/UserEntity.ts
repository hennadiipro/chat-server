import { Schema, model } from "mongoose";
import { IUserDto } from "../dto/IUserDto";

const userSchema = new Schema<IUserDto>({
  email: String,
  password: String,
});

export const User = model('User', userSchema);
