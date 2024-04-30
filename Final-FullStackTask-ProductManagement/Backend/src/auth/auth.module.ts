import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecrets } from './strategy/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Auth]), JwtModule.register({
    global: true,
    secret: jwtSecrets.secret,
    signOptions: {expiresIn: '20m'}
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
