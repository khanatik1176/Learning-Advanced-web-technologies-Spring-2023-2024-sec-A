<<<<<<< HEAD
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('createEmp')
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get('findAllEmp')
  findAll() {
    return this.employeeService.findAllEmployee();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }

  @Patch('updateEmp/:id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {

    console.log(`"${id}" is being Updated`);

    return this.employeeService.updateEmp(+id, updateEmployeeDto);
  }

  @Delete('deleteEmp/:id')
  remove(@Param('id') id: string) {
    return this.employeeService.removeEmp(+id);
  }
}
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('createEmp')
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get('findAllEmp')
  findAll() {
    return this.employeeService.findAllEmployee();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }

  @Patch('updateEmp/:id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {

    console.log(`"${id}" is being Updated`);

    return this.employeeService.updateEmp(+id, updateEmployeeDto);
  }

  @Delete('deleteEmp/:id')
  remove(@Param('id') id: string) {
    return this.employeeService.removeEmp(+id);
  }
}
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
