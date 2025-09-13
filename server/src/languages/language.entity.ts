import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('languages')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  code: string; // ISO code like 'es', 'en', etc.

  @ManyToOne(() => User, (user) => user.languages, { cascade: true })
  user: User[];
}
