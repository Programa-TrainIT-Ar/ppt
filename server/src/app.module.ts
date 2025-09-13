import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Project } from './projects/project.entity';
import { Skill } from './skills/skill.entity';
import { Edition } from './editions/edition.entity';
import { Cell } from './cells/cell.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ptp',
      username: 'admin',
      password: 'admin',
      entities: [User, Cell, Edition, Project, Skill],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
