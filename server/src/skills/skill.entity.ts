import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from '../users/user.entity';

export enum Level {
  BEGINNER = 'beginner',
  MIDDLE = 'middle',
  EXPERT = 'expert',
}

export enum Type {
  TECHNICAL = 'technical',
  SOFT = 'soft',
}

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'enum', enum: Level, default: Level.BEGINNER })
  level: Level;

  @Column({ nullable: true })
  experience: number;

  @Column({ type: 'enum', enum: Type, default: Type.TECHNICAL })
  type: Type;

  @ManyToMany(() => User, (user) => user.skills, { cascade: true })
  users: User[];
}
