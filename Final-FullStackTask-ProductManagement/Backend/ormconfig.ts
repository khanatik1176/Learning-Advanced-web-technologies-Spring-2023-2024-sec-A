import { Auth } from 'src/entities/auth.entity';
import { Customer } from 'src/entities/customer.entity';
import { Product } from 'src/entities/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


const Ormconfig: PostgresConnectionOptions = 
{
    type: 'postgres',
    database: 'Product',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'faisal',
    entities: [Product, Customer,Auth],
    synchronize: true,
}

export default Ormconfig;