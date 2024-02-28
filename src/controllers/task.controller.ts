import { Request, Response } from "express";
import config from "config";
import {
  createTask,
  getTask,
  updateTask,
  deleteTask
} from "../services/task.service";
import { validatePassword } from "../services/user.service";
import { signJwt } from "../utils/jwt.util";
import { TaskDocument, TaskInput, UpdateTaskInput } from "../models/task.model";

export async function createTaskHandler(req: Request, res: Response) {
    try {
        const input:{title:string}=req.body
        const taskInput:TaskInput={...input, user:res.locals.user._id}
        const task= await createTask(taskInput)
        res.status(200).json(task)
    } catch (error:any) {
        console.error(error)
    }
}


export async function updateTaskHandler(req: Request, res: Response) {
    try {
        const taskId:string= req.params.taskId
        const change:UpdateTaskInput = req.body.change

        const updatedTask= await updateTask({_id:taskId},change)
        res.status(200).json(updateTask) 
    } catch (error) {
        res.status(500).json({message:"error"}) 
        console.error(error)

    }   
  }


export async function getTaskHandler(req: Request, res: Response) {
    try {
        const user:string = res.locals.user._id;
        const tasks=await getTask({user})
        res.status(200).json(tasks)
    } catch (error) {
        console.error(error)
    }
}

export async function deleteTaskHandler(req: Request, res: Response) {
    try {
        const taskId:string= req.params.taskId
        const deletedTask= deleteTask({_id:taskId})
        res.status(200).send("task deleted")
    } catch (error) {
        console.error(error)
    }
}