import { Request, Response } from "express";

async function getAccessToken(request: Request, response: Response) {
  const token = request.params.token;
}

export { getAccessToken };
