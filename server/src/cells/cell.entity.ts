import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Edition } from '../editions/edition.entity';

@Entity('cells')
export class Cell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'edition_id' })
  editionId: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ name: 'repository_url', nullable: true })
  repositoryUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Edition, (edition) => edition.cells, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'edition_id' })
  edition: Edition;
}
