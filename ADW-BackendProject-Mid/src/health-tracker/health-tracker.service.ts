import { Injectable } from '@nestjs/common';
import { CreateHealthTrackerDto } from './dto/create-health-tracker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthTracker } from 'src/entities/healthtracker.entity';
import { Repository } from 'typeorm';
import { UpdateHealthTrackerDto } from './dto/update-health-tracker.dto';
import {Session} from 'express-session';

@Injectable()
export class HealthTrackerService {

  constructor(
    @InjectRepository(HealthTracker)
    private healthTrackerRepo: Repository<HealthTracker>

  ){}


  async enable(createHealthTrackerDto: CreateHealthTrackerDto, session: Session)
  {
    console.log("Health Tracker Enabled");
    createHealthTrackerDto.patient_email = session['email'];
    const healthTracker_data = await this.healthTrackerRepo.create(createHealthTrackerDto);
    return await this.healthTrackerRepo.save(healthTracker_data);
  }

  async calculateBMI(id:number): Promise<{Bmi: number, status: string}>
  {

    const healthTracker_data = await this.healthTrackerRepo.findOne({where:{id:id}});
    const height_InMeters = healthTracker_data.patient_height/100;
    const bmi = (healthTracker_data.patient_weight/(height_InMeters*height_InMeters));

     healthTracker_data.patient_Bmi = Number(bmi.toFixed(1));
     await this.healthTrackerRepo.save(healthTracker_data);

     const Bmi = healthTracker_data.patient_Bmi;
     const age = healthTracker_data.patient_age;

    let status = "";

    if (Bmi<18.5 && age>=18)
    {
      status = "Underweight";
    }

    else if (Bmi >= 18.5 || Bmi < 24.9 && age >= 18)
    {
      status = "Normal";
    }

    else if (Bmi >= 25 || Bmi < 29.9 && age >= 18)
    {
      status = "Overweight";
    }

    else if (Bmi >= 30 && age >= 18)
    {
      status = "Obesity";
    }

    else
    {
      status = 'BMI is not applicable for children and young adults';
    }

    return {Bmi , status};
  }


  async modify(id:number, updateHealthTrackerDto: UpdateHealthTrackerDto)
  {
    console.log("Health Tracker Disabled");
    return await this.healthTrackerRepo.update(id,updateHealthTrackerDto);
  }

  async findAll()
  {
    return await this.healthTrackerRepo.find();
  }
  


}
