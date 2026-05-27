import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
       imports: [
              UsersModule,
              TasksModule,
              JwtModule.register({
                     secret: 'clave-secreta',
                     signOptions: {expiresIn: '1h'}
              })
       ],
       controllers: [AuthController],
       providers: [AuthService],
       exports: [JwtModule]
})
export class AuthModule {}
