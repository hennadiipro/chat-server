import { ICreateUserDto } from "./ICreateUserDto";

interface IUserDto extends ICreateUserDto {
  _id: string;
}

export { IUserDto };
