import { Request, Response } from "express";
import { DeleteRoomService } from "./DeleteRoomService";

class DeleteRoomController {
  constructor (private deleteRoomService: DeleteRoomService) {}
  async handle(request: Request, response: Response) {
    const roomId = request.params.id;
    try {
      const isDeleteSuccess = await this.deleteRoomService.execute(roomId);

      if (isDeleteSuccess.deletedCount) {
        return response.status(200).send();
      } else {
        return response.status(500).send();
      }
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { DeleteRoomController };
