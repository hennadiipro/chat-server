import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: String,
  name: String,
  username: String,
  password: String,
  icon: Image,
});

model('User', userSchema);
