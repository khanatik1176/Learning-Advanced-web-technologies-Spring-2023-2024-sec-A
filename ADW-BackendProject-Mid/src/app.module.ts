import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';
import { HealthTrackerModule } from './health-tracker/health-tracker.module';
import { PaymentModule } from './payment/payment.module';
import { SymptomCheckerModule } from './symptom_checker/symptom_checker.module';
import Ormconfig from 'ormconfig';


@Module({
  imports: [AppointmentModule, TypeOrmModule.forRoot(Ormconfig), FeedbackModule, HealthTrackerModule, PaymentModule, SymptomCheckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
