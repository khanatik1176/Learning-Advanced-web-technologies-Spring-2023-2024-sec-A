import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';


@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('schedule')
  create(@Body(ValidationPipe) createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get('View')
  findAll()
  {
    return this.appointmentService.findAll();

  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id:number)
  {
    return this.appointmentService.findById(id);
  }

  @Delete(':id')
    async remove(@Param('id',ParseIntPipe) id: number)
    {
      await this.appointmentService.cancel(id);

      return {message:'Appointment Canceled'};

    }

  
}
