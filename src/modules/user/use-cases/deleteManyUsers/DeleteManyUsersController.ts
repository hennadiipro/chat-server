import { Request, Response } from "express";
import { DeleteManyUsersService } from "./DeleteManyUsersService";

class DeleteManyUsersController {
  constructor(private deleteManyUsersService: DeleteManyUsersService) {}
  async handle(request: Request, response: Response) {
    try {
      const userIds: string[] = request.body;

      const isDeleteSuccess = await this.deleteManyUsersService.execute(userIds);

      if (isDeleteSuccess.deletedCount) {
        return response.status(200).send();
      } else {
        return response.status(500).send();
      }
    } catch(e) {
      return response.status(500).send();
    }
  }
}

export { DeleteManyUsersController };
