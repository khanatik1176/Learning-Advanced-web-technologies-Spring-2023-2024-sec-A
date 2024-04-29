"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("../entities/employee.entity");
const typeorm_2 = require("typeorm");
let EmployeeService = class EmployeeService {
    constructor(employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    async createEmployee(createEmployeeDto) {
        const employee_data = await this.employeeRepo.create(createEmployeeDto);
        return await this.employeeRepo.save(employee_data);
    }
    async findAllEmployee() {
        return this.employeeRepo.find();
    }
    async findEmployeeById(id) {
        const employeeByIdInfo = this.employeeRepo.findOne({ where: { id: id } });
        if (!employeeByIdInfo) {
            return undefined;
        }
        else {
            return employeeByIdInfo;
        }
    }
    async updateEmp(id, updateEmployeeDto) {
        const employee = await this.findEmployeeById(id);
        if (!employee) {
            throw new Error('Employee not found');
        }
        return this.employeeRepo.update(id, updateEmployeeDto);
    }
    async removeEmp(id) {
        const employee = await this.findEmployeeById(id);
        if (!employee) {
            throw new Error('Employee not found');
        }
        console.log(`Employee "${id}" has been deleted`);
        return this.employeeRepo.remove(employee);
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map