import { Request, Response } from "express";
import { ListUserByIdService } from "./ListUserByIdService";

class ListUserByIdController {
  constructor(private listUserByIdService: ListUserByIdService) {}
  async handle(request: Request, response: Response) {
    try {
      const userId: string = request.params.id;

      const user = await this.listUserByIdService.execute(userId);

      if (user) {
        return response.status(200).json(user);
      } else {
        return response.status(500).send();
      }
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { ListUserByIdController };
