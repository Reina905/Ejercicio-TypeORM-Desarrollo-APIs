import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';
import { Category } from './categories/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { CategoriesModule } from './categories/categories.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'apicurso',
      entities: [User, Task, Category],
      synchronize: true, //crea tablas automaticamente
    }),
    CategoriesModule,
    UsersModule,
    TasksModule,
    AuthModule
  ],
  providers: [UsersService, AuthService],
  controllers: [AuthController],
})
export class AppModule {}
