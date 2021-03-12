import { EntityRepository, getRepository, Repository } from 'typeorm';

import Project from '../models/Project';

@EntityRepository(Project)
class ProjectRepository extends Repository<Project> {
  public async findProjectIdAndNavers(id: string): Promise<Project[]> {
    const projectRepository = getRepository(Project);

    const project = await projectRepository
      .createQueryBuilder('projects')
      .where('projects.id = :id', { id })
      .leftJoinAndSelect('projects.navers', 'navers')
      .select([
        'projects.id',
        'projects.name',
        'navers.id',
        'navers.name',
        'navers.job_role',
        'navers.birthdate',
        'navers.admission_date',
      ])
      .getMany();

    return project;
  }

  public async findProjectsAndNavers(): Promise<Project[]> {
    const projectRepository = getRepository(Project);

    const projects = await projectRepository
      .createQueryBuilder('projects')
      .leftJoinAndSelect('projects.navers', 'navers')
      .select([
        'projects.id',
        'projects.name',
        'navers.id',
        'navers.name',
        'navers.job_role',
        'navers.birthdate',
        'navers.admission_date',
      ])
      .getMany();

    return projects;
  }

  public async findProjectsCountNavers(): Promise<Project[]> {
    const projectRepository = getRepository(Project);

    const projects = await projectRepository
      .createQueryBuilder('projects')
      .leftJoinAndSelect('projects.navers', 'navers')
      .select(['projects.id', 'projects.name'])
      .addSelect('COUNT(DISTINCT(navers.id)) as navers')
      .groupBy('projects.id')
      .getRawMany();

    return projects;
  }
}

export default ProjectRepository;
