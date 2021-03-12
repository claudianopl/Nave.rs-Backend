import { getCustomRepository } from 'typeorm';
import Project from '../models/Project';
import AppError from '../errors/AppError';

import ProjectRepository from '../repositories/ProjectsRepository';
import NaversRepository from '../repositories/NaversRepository';

interface StoreProps {
  name: string;
  navers: [];
}

class ProjectController {
  public async Index(): Promise<Project[]> {
    const projectRepository = getCustomRepository(ProjectRepository);

    const projects = await projectRepository.find({ select: ['id', 'name'] });

    return projects;
  }

  public async Show(id: string): Promise<Project[]> {
    const projectRepository = getCustomRepository(ProjectRepository);

    const project = await projectRepository.findProjectId(id);

    if (!project) {
      throw new AppError('Project do not exists!', 404);
    }

    return project;
  }

  public async Store({ name, navers }: StoreProps): Promise<Project> {
    const projectRepository = getCustomRepository(ProjectRepository);
    const naverRepository = getCustomRepository(NaversRepository);

    const findNaverIds = await naverRepository.findByIds(navers);

    if (findNaverIds) {
      const project = projectRepository.create({
        name,
        navers: findNaverIds,
      });
      await projectRepository.save(project);

      return project;
    }

    const project = projectRepository.create({
      name,
    });

    await projectRepository.save(project);

    return project;
  }
}

export default ProjectController;
