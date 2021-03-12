import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Naver from '../models/Naver';
import ProjectRepository from '../repositories/ProjectsRepository';
import NaversRepository from '../repositories/NaversRepository';

interface StoreProps {
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  projects: [];
}

class NaverController {
  public async Index(): Promise<Naver[]> {
    const naverRepository = getCustomRepository(NaversRepository);

    const navers = await naverRepository.find({
      select: ['id', 'name', 'birthdate', 'admission_date', 'job_role'],
    });

    return navers;
  }

  public async Show(id: string): Promise<Naver[]> {
    const naverRepository = getCustomRepository(NaversRepository);

    const naver = await naverRepository.findProjectId(id);

    if (!naver) {
      throw new AppError('Naver do not exists!', 404);
    }

    return naver;
  }

  public async Store({
    name,
    birthdate,
    admission_date,
    job_role,
    projects,
  }: StoreProps): Promise<Omit<StoreProps, 'projects'>> {
    const naverRepository = getCustomRepository(NaversRepository);
    const projectRepository = getCustomRepository(ProjectRepository);

    const findProjectsIds = await projectRepository.findByIds(projects);

    if (findProjectsIds) {
      const naver = naverRepository.create({
        name,
        birthdate,
        admission_date,
        job_role,
        projects: findProjectsIds,
      });

      await naverRepository.save(naver);

      return naver;
    }

    const naver = naverRepository.create({
      name,
      birthdate,
      admission_date,
      job_role,
    });

    await naverRepository.save(naver);

    return naver;
  }
}

export default NaverController;
