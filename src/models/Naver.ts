import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Project from './Project';

@Entity('navers')
class Naver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  job_role: string;

  @Column('date')
  birthdate: Date;

  @Column('date')
  admission_date: Date;

  @ManyToMany(() => Project, project => project.navers)
  @JoinTable()
  projects: Project[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Naver;
