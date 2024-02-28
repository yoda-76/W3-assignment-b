"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
async function createTask(input) {
    try {
        const task = await task_model_1.default.create(input);
        return task;
    }
    catch (error) {
        console.log(error);
    }
}
exports.createTask = createTask;
async function getTask(query) {
    return await task_model_1.default.find(query);
}
exports.getTask = getTask;
async function updateTask(query, update) {
    return task_model_1.default.updateOne(query, update);
}
exports.updateTask = updateTask;
async function deleteTask(query) {
    return task_model_1.default.deleteOne(query);
}
exports.deleteTask = deleteTask;
