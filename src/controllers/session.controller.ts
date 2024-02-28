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
  
  try{
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    
    const session = await createSession(user._id, req.get("user-agent") || "");

    const accessToken = signJwt(
      { ...user, session: session._id } 
    );
    return res.status(200).send({ message:"Session created",accessToken });}catch(e){
      res.status(401).send("Unautharised")
    }
}


export async function deleteSessionHandler(req: Request, res: Response) {
  console.log(res.locals)
  try{
    const sessionId = res.locals.user.session;

    await updateSession({ _id: sessionId }, { valid: false });

    return res.status(200).send("Session deleted");}catch(e){
      res.status(403).send("Forbidden")

    }
}