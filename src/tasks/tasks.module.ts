import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {Task} from './task.entity';
import {User} from '../users/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Category } from 'src/categories/category.entity';

@Module({
       imports: [
              TypeOrmModule.forFeature([Task, User, Category]),
              UsersModule,
       ],
       providers: [TasksService],
       controllers: [TasksController]
})
export class TasksModule {}
