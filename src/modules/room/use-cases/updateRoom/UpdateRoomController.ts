import { Request, Response } from "express";
import { UpdateRoomService } from "./UpdateRoomService";
import { IRoomDto } from "../../dto/IRoomDto";

class UpdateRoomController {
  constructor (private updateRoomService: UpdateRoomService) {}
  async handle(request: Request, response: Response) {
    try {
      const roomId: string = request.params.id;
      const updatedRoom: IRoomDto = request.body;

      const wasRoomUpdated = await this.updateRoomService.execute({...updatedRoom, _id: roomId });
      
      if (wasRoomUpdated) {
        return response.status(200).json(wasRoomUpdated);
      } else {
        return response.status(404).send();
      }
    } catch (e) {
      return response.status(500).json(e);
    }
  }
}

export { UpdateRoomController };
