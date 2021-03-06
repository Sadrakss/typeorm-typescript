import { Router, Request, Response } from "express";

import {getTasks,
  createTask, 
  getTask,
  updateTask,
  finishedTask,
  removeTask
} from "./controller/TasksController";

const routes = Router();

routes.get("/", (request: Request, reponse: Response) => {
  return reponse.json({ Message: "Hello World!" });
});

routes.get('/tasks',getTasks);
routes.get('/tasks/:id',getTask);
routes.post('/tasks',createTask);
routes.put('/tasks/:id',updateTask);
routes.patch('/tasks/:id',finishedTask);
routes.delete('/tasks/:id',removeTask);





export { routes };
