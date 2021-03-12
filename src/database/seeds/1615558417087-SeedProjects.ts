import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import Naver from '../../models/Naver';
import Project from '../../models/Project';

export default class SeedProjects1615558417087 implements MigrationInterface {
  public async up(): Promise<void> {
    const projectRepository = getRepository(Project);
    const naversRepository = getRepository(Naver);

    const naverOne = naversRepository.create({
      name: 'John Doe',
      birthdate: new Date('1995-04-05'),
      admission_date: new Date('2021-03-09'),
      job_role: 'Developer',
    });
    await naversRepository.save(naverOne);

    const projectOne = projectRepository.create({
      name: 'host configuration',
      navers: [naverOne],
    });
    await projectRepository.save(projectOne);

    const projectTwo = projectRepository.create({
      name: 'Web prototyping',
    });
    await projectRepository.save(projectTwo);

    const naverTwo = naversRepository.create({
      name: 'so-and-so',
      birthdate: new Date('1999-09-12'),
      admission_date: new Date('2020-05-21'),
      job_role: 'UI Designer',
      projects: [projectTwo],
    });
    await naversRepository.save(naverTwo);

    const naverThree = naversRepository.create({
      name: 'Jane Doe',
      birthdate: new Date('2000-04-10'),
      admission_date: new Date('2018-04-21'),
      job_role: 'Devops',
    });
    await naversRepository.save(naverThree);

    const naverFour = naversRepository.create({
      name: 'Claudiano Lima',
      birthdate: new Date('2000-04-27'),
      admission_date: new Date('2021-03-22'),
      job_role: 'Back-end developer',
    });
    await naversRepository.save(naverFour);

    const projectThree = projectRepository.create({
      name: 'Backend challenge',
      navers: [naverOne, naverFour],
    });
    await projectRepository.save(projectThree);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('navers_projects_projects');

    await queryRunner.query('TRUNCATE TABLE navers CASCADE');
    await queryRunner.query('TRUNCATE TABLE projects CASCADE');
  }
}
