import { Request, Response } from "express";
import { ListRoomByIdService } from "./ListRoomByIdService";

class ListRoomByIdController {
  constructor (private listRommByIdService: ListRoomByIdService) {}

  async handle(request: Request, response: Response) {
    const roomId = request.params.id;

    try {
      const room = await this.listRommByIdService.execute(roomId);

      if (room) {
        return response.status(200).json(room);
      } else {
        return response.status(404).send();
      }
    } catch (e) {
      return response.status(500).json(e);
    }
  }
}

export { ListRoomByIdController };
