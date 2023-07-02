import { Schema, model } from "mongoose";
import { IUserDto } from "../dto/IUserDto";
import { IGithubUser } from "../dto/IGithubUser";

const userSchema = new Schema<IGithubUser>({
  avatar_url: String,
  login: String,
  name: String,
  url: String,
});

export const User = model('User', userSchema);
