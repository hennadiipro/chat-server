import { Request, Response } from "express";
import { DeleteManyRoomsService } from "./DeleteManyRoomsService";

class DeleteManyRoomsController {
  constructor (private deleteManyRoomsService: DeleteManyRoomsService) {}
  async handle (request: Request, response: Response) {
    const roomIds: string[] = request.body;
    try {
      await this.deleteManyRoomsService.execute(roomIds);
      return response.status(200).send();
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { DeleteManyRoomsController };
