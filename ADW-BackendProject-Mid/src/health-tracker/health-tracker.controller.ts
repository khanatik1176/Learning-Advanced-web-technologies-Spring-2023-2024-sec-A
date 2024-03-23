import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, Put } from '@nestjs/common';
import { HealthTrackerService } from './health-tracker.service';
import { CreateHealthTrackerDto } from './dto/create-health-tracker.dto';
import { UpdateHealthTrackerDto } from './dto/update-health-tracker.dto';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurard/auth.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('healthtracker')
export class HealthTrackerController {
  constructor(private readonly healthTrackerService: HealthTrackerService) {}

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Post('AddHealthTracker')
  create(@Body(ValidationPipe) createHealthTrackerDto: CreateHealthTrackerDto, @Req() req: Request) {
    return this.healthTrackerService.enable(createHealthTrackerDto, req.session);
  }

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Get('BMI/:id')
    findOne (@Param('id',ParseIntPipe) id:number)
    {
      return this.healthTrackerService.calculateBMI(id);
    } 
   
  @UseGuards(AuthGuard)
  @Roles('patient')
  @Put('Modify/:id')
  update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe) updateHealThtrackerDto: UpdateHealthTrackerDto) {
    return this.healthTrackerService.modify(id, updateHealThtrackerDto);
  }

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Get('View')
  findAll()
  {
    return this.healthTrackerService.findAll();
  }




}
