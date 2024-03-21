import { PartialType } from '@nestjs/mapped-types';
import { CreateSymptomCheckerDto } from './create-symptom_checker.dto';

export class UpdateSymptomCheckerDto extends PartialType(CreateSymptomCheckerDto) {}
