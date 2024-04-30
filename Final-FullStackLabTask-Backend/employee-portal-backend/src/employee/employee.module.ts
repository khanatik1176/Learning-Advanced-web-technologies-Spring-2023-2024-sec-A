<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]) ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
=======
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]) ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
export class EmployeeModule {}