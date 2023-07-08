import axios from "axios";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { IGithubToken } from "../../../modules/user/dto/IGithubUser";

dotenv.config();

async function getGithubAccessToken (request: Request, response: Response, next: NextFunction) {
  const code: string = request.params.code;

  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code,
  }

  try {
    const userToken = await axios.post<IGithubToken>
      ("https://github.com/login/oauth/access_token", body, {
        headers: {
          "Accept": "application/json"
        }
      });

    if (userToken.data.access_token) {
      request.params.token = userToken.data.access_token;
      next();
    } else {
      return response.status(404).send();
    }
  } catch (e) {
    return response.status(500).send();
  }
}

export { getGithubAccessToken };
