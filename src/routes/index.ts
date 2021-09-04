import { Router } from 'express';
// Controllers (route handlers)
import * as homeController from '../controllers/home';

const routes = Router();

routes.get("/", homeController.index);

// routes.use('/users', usersRouter);

export default routes;
