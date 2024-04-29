import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("../entities/employee.entity").Employee>;
    findAll(): Promise<import("../entities/employee.entity").Employee[]>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("../entities/employee.entity").Employee>;
}
