import { EntityRepository, getRepository, Repository } from 'typeorm';

import Naver from '../models/Naver';

@EntityRepository(Naver)
class ProjectRepository extends Repository<Naver> {
  public async findProjectId(id: string): Promise<Naver[]> {
    const naverRepository = getRepository(Naver);

    const naver = await naverRepository
      .createQueryBuilder('navers')
      .where('navers.id = :id', { id })
      .leftJoinAndSelect('navers.projects', 'projects')
      .select([
        'navers.id',
        'navers.name',
        'navers.job_role',
        'navers.birthdate',
        'navers.admission_date',
        'projects.id',
        'projects.name',
      ])
      .getMany();

    return naver;
  }
}

export default ProjectRepository;
