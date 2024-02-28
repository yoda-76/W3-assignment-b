import { Express, Request, Response } from "express";
import {createTaskHandler,getTaskHandler,updateTaskHandler,deleteTaskHandler,} from "./controllers/task.controller";
import {createUserSessionHandler,deleteSessionHandler} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import {validateSignup, validateLogin, validateEmail, validateTask} from "./middleware/validators";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // signup : done
  app.post("/api/users", validateSignup, createUserHandler);

  //loging in & out : first task
  app.post("/api/sessions",validateLogin,createUserSessionHandler);
  app.delete("/api/sessions",validateEmail, deleteSessionHandler);

  // tasks
  app.post("/api/task",validateTask,createTaskHandler);
  app.put("/api/task/:taskId",updateTaskHandler);
  app.get("/api/task/", getTaskHandler);
  app.delete("/api/task/:taskId", deleteTaskHandler);
}

export default routes;