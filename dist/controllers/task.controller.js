"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskHandler = exports.getTaskHandler = exports.updateTaskHandler = exports.createTaskHandler = void 0;
const task_service_1 = require("../services/task.service");
async function createTaskHandler(req, res) {
    try {
        const input = req.body;
        const taskInput = { ...input, user: res.locals.user._id };
        const task = await (0, task_service_1.createTask)(taskInput);
        res.status(200).json(task);
    }
    catch (error) {
        console.error(error);
    }
}
exports.createTaskHandler = createTaskHandler;
async function updateTaskHandler(req, res) {
    try {
        const taskId = req.params.taskId;
        const change = req.body.change;
        const updatedTask = await (0, task_service_1.updateTask)({ _id: taskId }, change);
        res.status(200).json({ message: "task updated" });
    }
    catch (error) {
        res.status(500).json({ message: "error" });
        console.error(error);
    }
}
exports.updateTaskHandler = updateTaskHandler;
async function getTaskHandler(req, res) {
    try {
        const user = res.locals.user._id;
        const tasks = await (0, task_service_1.getTask)({ user });
        res.status(200).json(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
exports.getTaskHandler = getTaskHandler;
async function deleteTaskHandler(req, res) {
    try {
        const taskId = req.params.taskId;
        const deletedTask = (0, task_service_1.deleteTask)({ _id: taskId });
        res.status(200).send("task deleted");
    }
    catch (error) {
        console.error(error);
    }
}
exports.deleteTaskHandler = deleteTaskHandler;
