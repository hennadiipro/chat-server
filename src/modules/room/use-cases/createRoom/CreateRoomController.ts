import { Request, Response } from "express";
import { ICreateRoomDto } from "../../dto/ICreateRoomDto";
import { CreateRoomService } from "./CreateRoomService";

class CreateRoomController {
  constructor (private createRoomService: CreateRoomService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const room: ICreateRoomDto = request.body;

    try {
      const createdRoom = await this.createRoomService.execute(room);

      return response.status(200).json(createdRoom);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export { CreateRoomController };