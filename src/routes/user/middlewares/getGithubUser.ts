import { NextFunction, Request, Response } from "express";
import axios from "axios";

async function getGithubUser (request: Request, response: Response, next: NextFunction) {
  const token: string = request.params.token;
  
  try {
    if (!token) return;
    const githubUser = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    if (githubUser.data) {
      request.body = githubUser.data;
      next();
    } else {
      return response.status(401).send();
    }
  } catch (e) {
    return response.status(401).send();
  }
}

export { getGithubUser };
