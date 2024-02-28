import { FilterQuery, UpdateQuery } from "mongoose";
import TaskModel, { TaskDocument, TaskInput } from "../models/task.model";

export async function createTask( input:TaskInput) {
    try {
        const task = await TaskModel.create(input);
        return task
    } catch (error) {
        console.log(error)
    }
}

export async function getTask(query: FilterQuery<TaskDocument>) {
    return await TaskModel.find(query)
}

export async function updateTask(
  query: FilterQuery<TaskDocument>,
  update: UpdateQuery<TaskDocument>
) {
  return TaskModel.updateOne(query, update);
}


export async function deleteTask(query: FilterQuery<TaskDocument>) {
    return TaskModel.deleteOne(query)
}