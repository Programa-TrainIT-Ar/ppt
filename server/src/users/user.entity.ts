import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Language } from '../languages/language.entity';
import { Skill } from '../skills/skill.entity';

export enum UserStatus {
  ACTIVE = 'active',
  EXPELLED = 'expelled',
  INACTIVE = 'inactive',
}

export interface SocialNetwork {
  platform: string;
  url: string;
  isProfessional?: boolean;
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'phone_number', unique: true })
  phoneNumber: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  hobbies: string;

  @Column({ name: 'country' })
  country: string;

  @Column({ name: 'time_zone' })
  timeZone: string;

  @Column({
    type: 'jsonb',
    default: () => "'[]'",
  })
  socialNetworks: SocialNetwork[];

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Column({ name: 'notes', nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'finish_at' })
  finishAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Language, (language) => language.user, { cascade: true })
  languages: Language[];

  @ManyToMany(() => Skill, (skill) => skill.users, { cascade: true })
  skills: Skill[];
}
