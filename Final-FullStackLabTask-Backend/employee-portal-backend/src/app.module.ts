<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import Ormconfig from 'ormconfig';

@Module({
  imports: [EmployeeModule, TypeOrmModule.forRoot(Ormconfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
=======
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import Ormconfig from 'ormconfig';

@Module({
  imports: [EmployeeModule, TypeOrmModule.forRoot(Ormconfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
