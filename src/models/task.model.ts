import mongoose from "mongoose";

export interface TaskInput {
    user: string;
    title: string;
}
export interface UpdateTaskInput {
    completed?: boolean;
    title?: string;
}
export interface TaskDocument extends TaskInput, mongoose.Document {
    _id: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema=new mongoose.Schema({
    user:{type:String, required: true},
    title:{type:String, required:true},
    completed:{type : Boolean, default:false}
},
{
    timestamps:true
})

const TaskModel= mongoose.model("Task",taskSchema)

export default TaskModel