import { NextFunction, Request, Response } from "express";
import { IGithubUser } from "../../../modules/user/dto/IGithubUser";
import axios from "axios";

async function getGithubUser (request: Request, response: Response, next: NextFunction) {
  const token: string = request.params.token;

  const githubUser: IGithubUser = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (githubUser) {
    request.body = githubUser;
    next();
  } else {
    return response.status(404).send();
  }

  return response.status(500).send();
}

export { getGithubUser };
