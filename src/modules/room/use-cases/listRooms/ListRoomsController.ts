import { Request, Response } from "express";
import { ListRoomsService } from "./ListRoomsService";

class ListRoomsController {
  constructor (private listRoomsService: ListRoomsService) {}

  async handle(request: Request, response: Response) {
    try {
      const allRooms = await this.listRoomsService.execute();

      return response.status(200).json(allRooms);
    } catch (e) {
      return response.status(500).send();
    }
  }
}

export { ListRoomsController };