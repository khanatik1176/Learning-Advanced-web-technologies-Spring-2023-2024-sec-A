import { Module } from '@nestjs/common';
import { SymptomCheckerService } from './symptom_checker.service';
import { SymptomCheckerController } from './symptom_checker.controller';

@Module({
  controllers: [SymptomCheckerController],
  providers: [SymptomCheckerService],
})
export class SymptomCheckerModule {}
