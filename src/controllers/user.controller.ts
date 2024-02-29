import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { UserInput } from "../models/user.model";

export async function createUserHandler(req: Request,res: Response) {
  try {
    const user = await createUser(<UserInput>req.body);
    if(user){
      res.status(200).send(user);
    }else{
      res.status(203).send("email is already is in use")
    }
    
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}