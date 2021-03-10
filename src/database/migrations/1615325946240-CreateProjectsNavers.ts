import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProjectsNavers1615325946240
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects_navers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'project_id',
            type: 'varchar',
          },
          {
            name: 'naver_id',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('projects_navers');
  }
}
