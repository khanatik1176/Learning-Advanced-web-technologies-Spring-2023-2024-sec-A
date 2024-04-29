import { Auth } from 'src/entities/auth.entity';
import { Employee } from 'src/entities/employee.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const Ormconfig: PostgresConnectionOptions = {

    type: 'postgres',
    database: 'Employee',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'faisal',
    entities: [Employee,Auth],
    synchronize: true,
    



}

export default Ormconfig;