import { Request, Response } from "express";
import { ListUsersByRoomService } from "./ListUsersByRoomService";

class ListUsersByRoomController {
  constructor(private listUserByRoomService: ListUsersByRoomService) {}
  async handle(request: Request, response: Response) {
    try {
      const roomId: string = request.params.roomId;

      const users = await this.listUserByRoomService.execute(roomId);

      if (users) {
        return response.status(200).json(users);
      } else {
        return response.status(404).send();
      }
    } catch(e) {
      return response.status(500).send();
    }
  }
}

export { ListUsersByRoomController };
