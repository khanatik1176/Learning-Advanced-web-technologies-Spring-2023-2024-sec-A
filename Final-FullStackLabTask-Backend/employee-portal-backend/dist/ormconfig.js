"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_entity_1 = require("./src/entities/auth.entity");
const employee_entity_1 = require("./src/entities/employee.entity");
const Ormconfig = {
    type: 'postgres',
    database: 'Employee',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'faisal',
    entities: [employee_entity_1.Employee, auth_entity_1.Auth],
    synchronize: true,
};
exports.default = Ormconfig;
//# sourceMappingURL=ormconfig.js.map