import { Request, Response } from "express";
import { DeleteRoomService } from "./DeleteRoomService";

class DeleteRoomController {
  constructor (private deleteRoomService: DeleteRoomService) {}
  async handle(request: Request, response: Response) {
    const roomId = request.params.id;
    try {
      await this.deleteRoomService.execute(roomId);

      return response.status(200).send();
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { DeleteRoomController };
