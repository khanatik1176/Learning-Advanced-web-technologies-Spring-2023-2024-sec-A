import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { AuthGuard } from '../auth/gurard/auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { Req } from '@nestjs/common';
import { Request } from 'express';



@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Post('schedule')
  create(@Body(ValidationPipe) createAppointmentDto: CreateAppointmentDto, @Req() req: Request) {
    return this.appointmentService.create(createAppointmentDto, req.session);
  }

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Get('View')
  findAll()
  {
    return this.appointmentService.findAll();

  }

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id:number)
  {
    return this.appointmentService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Roles('patient')
  @Delete(':id')
    async remove(@Param('id',ParseIntPipe) id: number)
    {
      await this.appointmentService.cancel(id);

      return {message:'Appointment Canceled'};

    }

  
}
