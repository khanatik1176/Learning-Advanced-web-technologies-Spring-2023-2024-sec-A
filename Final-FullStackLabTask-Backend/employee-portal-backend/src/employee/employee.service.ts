<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}
    
  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    
    const employee_data =  await this.employeeRepo.create(createEmployeeDto);
    return await this.employeeRepo.save(employee_data);

  }

   async findAllEmployee() {
    
    return this.employeeRepo.find();
  }

 async findEmployeeById(id: number) : Promise<Employee | undefined>  {
    
     const employeeByIdInfo = this.employeeRepo.findOne({where: {id:id}});

     if(!employeeByIdInfo){
         return undefined;
     }

     else
     {
      return employeeByIdInfo;
     }
  }

  async updateEmp(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.findEmployeeById(id);
    
    if(!employee){
        throw new Error('Employee not found');
    }
    
    return this.employeeRepo.update(id, updateEmployeeDto);
}
  async removeEmp(id: number) {

    const employee = await this.findEmployeeById(id);

    if(!employee){
        throw new Error('Employee not found');
    }

    console.log(`Employee "${id}" has been deleted`);
    return this.employeeRepo.remove(employee);
  }
}
=======
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}
    
  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    
    const employee_data =  await this.employeeRepo.create(createEmployeeDto);
    return await this.employeeRepo.save(employee_data);

  }

   async findAllEmployee() {
    
    return this.employeeRepo.find();
  }

 async findEmployeeById(id: number) : Promise<Employee | undefined>  {
    
     const employeeByIdInfo = this.employeeRepo.findOne({where: {id:id}});

     if(!employeeByIdInfo){
         return undefined;
     }

     else
     {
      return employeeByIdInfo;
     }
  }

  async updateEmp(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.findEmployeeById(id);
    
    if(!employee){
        throw new Error('Employee not found');
    }
    
    return this.employeeRepo.update(id, updateEmployeeDto);
}
  async removeEmp(id: number) {

    const employee = await this.findEmployeeById(id);

    if(!employee){
        throw new Error('Employee not found');
    }

    console.log(`Employee "${id}" has been deleted`);
    return this.employeeRepo.remove(employee);
  }
}
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
