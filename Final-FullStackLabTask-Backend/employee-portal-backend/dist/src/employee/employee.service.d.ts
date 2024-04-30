import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'src/entities/employee.entity';
import { Repository } from 'typeorm';
export declare class EmployeeService {
    private employeeRepo;
    constructor(employeeRepo: Repository<Employee>);
    createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAllEmployee(): Promise<Employee[]>;
    findEmployeeById(id: number): Promise<Employee | undefined>;
    updateEmp(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<import("typeorm").UpdateResult>;
    removeEmp(id: number): Promise<Employee>;
}
