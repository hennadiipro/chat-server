import axios from "axios";
import { NextFunction, Request, Response } from "express";

export async function checkGithubToken(
  request: Request, 
  response: Response, 
  next: NextFunction) {
  const token = request.params.token;

  const body = {
    access_token: token,
  }

  try {
    const githubOauthBasicAuthorization = await axios.post(
        "https://api.github.com/authorization", 
        body, 
        { auth: 
          { 
           username: process.env.GITHUB_CLIENT_ID || '',
           password: process.env.GITHUB_CLIENT_SECRET || ''
          }
        }
      );

    if (githubOauthBasicAuthorization.status === 200) {
      next();
    } else {
      return response.status(401).send();
    }
  } catch (e) {
    return response.status(500).send();
  } 
}