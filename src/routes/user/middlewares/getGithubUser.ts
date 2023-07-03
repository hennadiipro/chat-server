import { NextFunction, Request, Response } from "express";
import { Octokit } from "@octokit/core";

async function getGithubUser (request: Request, response: Response, next: NextFunction) {
  const token: string = request.params.token;
  const octokit = new Octokit({ auth: token });

  const githubUser = await octokit.request("GET /user");

  if (githubUser) {
    request.body = githubUser;
    next();
  } else {
    return response.status(404).send();
  }

  return response.status(500).send();
}

export { getGithubUser };
