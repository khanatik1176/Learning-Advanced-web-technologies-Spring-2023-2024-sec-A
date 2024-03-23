import { Appointment } from 'src/entities/appointment.entity';
import { Feedback } from 'src/entities/feedback.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { HealthTracker } from 'src/entities/healthtracker.entity';
import { SymptomChecker } from 'src/entities/symptomChecker.entity';
import { Auth } from 'src/entities/auth.entity';
import { User } from 'src/entities/user.entity';
import { MedicalRecord } from 'src/entities/medicalrecord.entity';
const Ormconfig: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'faisal',
    entities: [Appointment,Feedback,HealthTracker,SymptomChecker,Auth,User,MedicalRecord],
    synchronize: true
};

export default Ormconfig;
