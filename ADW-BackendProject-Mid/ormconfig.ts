import { Appointment } from 'src/entities/appointment.entity';
import { Feedback } from 'src/entities/feedback.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { HealthTracker } from 'src/entities/healthtracker.entity';
const Ormconfig: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'faisal',
    entities: [Appointment,Feedback,HealthTracker],
    synchronize: true
};

export default Ormconfig;
