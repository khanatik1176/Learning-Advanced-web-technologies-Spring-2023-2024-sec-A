import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, Put } from '@nestjs/common';
import { HealthTrackerService } from './health-tracker.service';
import { CreateHealthTrackerDto } from './dto/create-health-tracker.dto';
import { UpdateHealthTrackerDto } from './dto/update-health-tracker.dto';


@Controller('healthtracker')
export class HealthTrackerController {
  constructor(private readonly healthTrackerService: HealthTrackerService) {}

  @Post('AddHealthTracker')
  create(@Body(ValidationPipe) createHealthTrackerDto: CreateHealthTrackerDto) {
    return this.healthTrackerService.enable(createHealthTrackerDto);
  }

  @Get('BMI/:id')
    findOne (@Param('id',ParseIntPipe) id:number)
    {
      return this.healthTrackerService.calculateBMI(id);
    } 
    
  @Put('Modify/:id')
  update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe) updateHealThtrackerDto: UpdateHealthTrackerDto) {
    return this.healthTrackerService.disable(id, updateHealThtrackerDto);
  }

  @Get('View')
  findAll()
  {
    return this.healthTrackerService.findAll();
  }




}
