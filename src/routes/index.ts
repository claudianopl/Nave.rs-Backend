import { Router } from 'express';
import naversRouter from './navers.routes';
import projectsRouter from './projects.routes';

const routes = Router();

routes.use('/navers', naversRouter);

routes.use('/projects', projectsRouter);

export default routes;
