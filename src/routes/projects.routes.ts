import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProjectController from '../Controllers/ProjectController';
import ProjectRepository from '../repositories/ProjectsRepository';

const naversRouter = Router();

naversRouter.get('/projectsAndCountNavers', async (request, response) => {
  const projectsRepository = getCustomRepository(ProjectRepository);

  const projects = await projectsRepository.findProjectsCountNavers();

  return response.json(projects);
});

naversRouter.get('/projectsAndNavers', async (request, response) => {
  const projectsRepository = getCustomRepository(ProjectRepository);

  const projects = await projectsRepository.findProjectsAndNavers();

  return response.json(projects);
});

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
