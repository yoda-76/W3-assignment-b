import {Request, Response, NextFunction} from "express"
import { UserInput } from "../models/user.model"
function checkEmail(email:string, res:Response):void{
    if(!email.includes("@")){
        res.status(400).send("BAD REQUEST: email should contain @")
    }
}
export async function validateSignup(req: Request,res: Response, next: NextFunction){
    const {name,email,password}:UserInput=req.body
    if(!(email&&password&&name)){
        res.status(400).send("BAD REQUEST: all fields are required")   
    }
    checkEmail(email,res)
    next()
}

export async function validateLogin(req: Request,res: Response, next: NextFunction){
    const {email,password}:{email: string, password: string}=req.body
    if(!(email&&password)){
        res.status(400).send("BAD REQUEST: both email and password fields are required")   
    }
    checkEmail(email,res)
    next()
}

export async function validateEmail(req: Request,res: Response, next: NextFunction){
    const {email}:{email: string}=req.body
    if(!email){
        res.status(400).send("BAD REQUEST: email field is required")   
    }
    checkEmail(email,res)
    next()
}


export async function validateTask(req: Request,res: Response, next: NextFunction){
    const {title}:{title: string}=req.body
    if(!(title)){
        res.status(400).send("BAD REQUEST:  Can not leave both title and description empty")   
    }
    next()
}
