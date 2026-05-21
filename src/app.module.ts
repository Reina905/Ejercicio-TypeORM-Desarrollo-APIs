import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'apicurso',
      entities: [User, Task],
      synchronize: true, //crea tablas automaticamente
    }),
    CategoriesModule,
  ],
  providers: [UsersService],
})
export class AppModule {}
