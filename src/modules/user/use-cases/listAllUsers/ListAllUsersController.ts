import { Request, Response } from "express";
import { ListAllUsersService } from "./ListAllUsersService";
import { IUserDto } from "../../dto/IUserDto";

class ListAllUsersController {
  constructor(private listAllUsersService: ListAllUsersService) {}
  async handle(request: Request, response: Response) {
    try {
      const users: IUserDto[] = await this.listAllUsersService.execute();

      if (users) {
        return response.status(200).json(users);
      } else {
        return response.status(500).send();
      }
    } catch(e){
      return response.status(500).send();
    }
  }
}

export { ListAllUsersController };
