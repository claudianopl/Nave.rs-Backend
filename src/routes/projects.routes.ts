import { Router } from 'express';
import ProjectController from '../Controllers/ProjectController';

const naversRouter = Router();

naversRouter.get('/', async (request, response) => {
  const findProjects = new ProjectController();

  const projects = await findProjects.Index();

  return response.json(projects);
});

naversRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const findOneProject = new ProjectController();

  const project = await findOneProject.Show(id);

  return response.json(project);
});

naversRouter.post('/', async (request, response) => {
  const { name, navers } = request.body;

  const createProject = new ProjectController();

  const project = await createProject.Store({ name, navers });

  return response.json(project);
});

export default naversRouter;
