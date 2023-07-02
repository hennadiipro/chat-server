import { Request, Response } from "express";
import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { CreateUserService } from "./CreateUserService";
import { IGithubUser } from "../../dto/IGithubUser";

class CreateUserController {
  constructor (private createUserService: CreateUserService) {}
  async handle(request: Request, response: Response) {
    const user: IGithubUser = request.body;

    try {
      const createdUser = await this.createUserService.execute(user);

      if (createdUser) {
        return response.status(201).json(createdUser);
      } else {
        return response.status(500).send();
      }
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { CreateUserController };
