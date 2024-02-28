"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_controller_1 = require("./controllers/task.controller");
const session_controller_1 = require("./controllers/session.controller");
const user_controller_1 = require("./controllers/user.controller");
const validators_1 = require("./middleware/validators");
function routes(app) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200));
    // signup : done
    app.post("/api/users", validators_1.validateSignup, user_controller_1.createUserHandler);
    //loging in & out : first task
    app.post("/api/sessions", validators_1.validateLogin, session_controller_1.createUserSessionHandler);
    app.delete("/api/sessions", validators_1.validateEmail, session_controller_1.deleteSessionHandler);
    // tasks
    app.post("/api/task", validators_1.validateTask, task_controller_1.createTaskHandler);
    app.put("/api/task/:taskId", task_controller_1.updateTaskHandler);
    app.get("/api/task/", task_controller_1.getTaskHandler);
    app.delete("/api/task/:taskId", task_controller_1.deleteTaskHandler);
}
exports.default = routes;
