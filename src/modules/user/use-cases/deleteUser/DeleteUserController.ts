import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}
  async handle(request: Request, response: Response) {
    const userId: string = request.params.id;

    try {
      const isDeleteSuccess = await this.deleteUserService.execute(userId);

      if (isDeleteSuccess.deletedCount) {
        return response.status(200).send();
      } else {
        return response.status(400).send();
      }
    } catch(e) {
      return response.status(500).send();
    }
  }
}

export { DeleteUserController };
