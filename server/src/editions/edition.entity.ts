import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Project } from '../projects/project.entity';
import { Cell } from '../cells/cell.entity';

@Entity('editions')
export class Edition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'project_id' })
  projectId: number;

  @Column({ name: 'edition_number' })
  editionNumber: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'date', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'date', name: 'end_date' })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Project, (project) => project.editions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToMany(() => Cell, (cell) => cell.edition, { cascade: true })
  cells: Cell[];
}
