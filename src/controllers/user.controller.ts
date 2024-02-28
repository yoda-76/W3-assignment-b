import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { UserInput } from "../models/user.model";

export async function createUserHandler(req: Request,res: Response) {
  try {
    const user = await createUser(<UserInput>req.body);
    return res.status(200).send(user);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}