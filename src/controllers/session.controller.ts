import { Request, Response } from "express";
import config from "config";
import {
  createSession,
  findSessions,
  updateSession
} from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { signJwt } from "../utils/jwt.util";

export async function createUserSessionHandler(req: Request, res: Response) {
  
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  
  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJwt(
    { ...user, session: session._id } 
  );
  return res.status(200).send({ message:"Logged in",accessToken });
}

// export async function getUserSessionsHandler(req: Request, res: Response) {
//   const userId = res.locals.user._id;

//   const sessions = await findSessions({ user: userId, valid: true });

//   return res.send(sessions);
// }

export async function deleteSessionHandler(req: Request, res: Response) {
  console.log(res.locals)
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    message:"Logged out",accessToken: null
  });
}