import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';
import { HealthTrackerModule } from './health-tracker/health-tracker.module';
import { SymptomCheckerModule } from './symptom_checker/symptom_checker.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import Ormconfig from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [AppointmentModule, TypeOrmModule.forRoot(Ormconfig), FeedbackModule, HealthTrackerModule, SymptomCheckerModule, MedicalRecordModule, AuthModule, UserModule,  MulterModule.register({
    dest: './uploads',
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
