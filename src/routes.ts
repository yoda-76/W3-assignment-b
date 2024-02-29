import { Express, Request, Response } from "express";
import {createTaskHandler,getTaskHandler,updateTaskHandler,deleteTaskHandler,} from "./controllers/task.controller";
import {createUserSessionHandler,deleteSessionHandler} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import {validateSignup, validateLogin, validateEmail, validateTask} from "./middleware/validators";

function routes(app: Express) {

  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: ok
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              type: object
 *              required:
 *                - email
 *                - name
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                  default: jane.doe@example.com
 *                name:
 *                  type: string
 *                  default: Jane Doe
 *                password:
 *                  type: string
 *                  default: stringPassword123
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                name:
 *                  type: string
 *                _id:
 *                  type: string
 *                createdAt:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
  app.post("/api/users", validateSignup, createUserHandler);

/**
 * @openapi
 * '/api/sessions':
 *  post:
 *    tags:
 *    - Session
 *    summary: Create a session
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: jane.doe@example.com
 *              password:
 *                type: string
 *                default: stringPassword123
 *    responses:
 *      200:
 *        description: Session created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - accessToken
 *              properties:
 *                accessToken:
 *                  type: string
 *      401:
 *        description: Unauthorized
 *  delete:
 *    tags:
 *    - Session
 *    summary: Delete a session
 *    responses:
 *      200:
 *        description: Session deleted
 *      403:
 *        description: Forbidden
 */
  app.post("/api/sessions",validateLogin,createUserSessionHandler);
  app.delete("/api/sessions",validateEmail, deleteSessionHandler);

/**
 * @openapi
 * '/api/task':
 *  post:
 *     tags:
 *     - task
 *     summary: Create a new task
 *     requestHeaders:
 *       required: true
 *       content:
 *         access-token:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - title
 *             properties:
 *               title:
 *                 type: string
 *                 default: "Make your bed."
 *     responses:
 *       200:
 *         description: task created
 *         content:
 *          application/json:
 *           schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  default: <srting> 642a0de05f16e6dad68efdad
 *                title:
 *                  type: string
 *                  default: <srting> Make your bed.
 *                user:
 *                  type: string
 *                  default: <srting> 642a0de05f16e6dad68efdad
 *                createdAt:
 *                  type: date
 *                  default: <date> 2024-02-28T17:55:47.939+00:00
 *                updatedAt:
 *                  type: string
 *                  default: <date> 2024-02-28T17:55:47.939+00:00
 */

/**
 * @openapi
 * '/api/task':
 *  get:
 *     tags:
 *     - task
 *     summary: Get all the tasks by that user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: array
 *              items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     default: <srting> 642a0de05f16e6dad68efdad
 *                   title:
 *                     type: string
 *                     default: <srting> Make your bed.
 *                   user:
 *                     type: string
 *                     default: <srting> 642a0de05f16e6dad68efdad
 *                   createdAt:
 *                     type: date
 *                     default: <date> 2024-02-28T17:55:47.939+00:00
 *                   updatedAt:
 *                     type: string
 *                     default: <date> 2024-02-28T17:55:47.939+00:00
 *       404:
 *         description: task not found
 *     security:
 *       - access-token: []
 *     headers:
 *       access-token:
 *         description: Access token for authorization
 *         required: true
 *         schema:
 *           type: string
 */
/**
 * @openapi
 * '/api/task/{taskID}':
 *  put:
 *     tags:
 *     - task
 *     summary: Update a single task
 *     parameters:
 *      - name: taskId
 *        in: path
 *        description: The id of the task
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               taskId:
 *                 type: string
 *                 default: <srting> 642a0de05f16e6dad68efdad
 *               change:
*                  oneOf:
*                    - type: object
*                      properties:
*                        title:
*                          type: string
*                          default: <srting> Make your bed now.
*                    - type: object
*                      properties:
*                        completed: 
*                          type: boolean
*                          default: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     default: <srting> 642a0de05f16e6dad68efdad
 *                   title:
 *                     type: string
 *                     default: <srting> (changed) Make your bed now.
 *                   user:
 *                     type: string
 *                     default: <srting> 642a0de05f16e6dad68efdad
 *                   createdAt:
 *                     type: date
 *                     default: <date> 2024-02-28T17:55:47.939+00:00
 *                   updatedAt:
 *                     type: string
 *                     default: <date> 2024-02-28T17:55:47.939+00:00
 *       403:
 *         description: Forbidden
 *       404:
 *         description: task not found
 *  delete:
 *     tags:
 *     - task
 *     summary: Delete a single task
 *     parameters:
 *      - name: taskId
 *        in: path
 *        description: The id of the task
 *        required: true
 *     responses:
 *       200:
 *         description: task deleted
 *       403:
 *         description: Forbidden
 *       404:
 *         description: task not found
 */
  app.post("/api/task",validateTask,createTaskHandler);
  app.put("/api/task/:taskId",updateTaskHandler);
  app.get("/api/task/", getTaskHandler);
  app.delete("/api/task/:taskId", deleteTaskHandler);
}

export default routes;