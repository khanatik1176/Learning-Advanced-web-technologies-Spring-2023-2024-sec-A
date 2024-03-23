import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/entities/appointment.entity';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import {Session} from 'express-session';

@Injectable()
export class AppointmentService {

  constructor(
    @InjectRepository(Appointment)
    private Appointmentrepo: Repository<Appointment>
  ) {}


  async create(createAppointmentDto: CreateAppointmentDto, session: Session)
  {
    
    createAppointmentDto.patient_email = session['email'];
    const appointment_data = await this.Appointmentrepo.create(createAppointmentDto);
    return await this.Appointmentrepo.save(appointment_data);
  }

  async findAll()
  {
    return this.Appointmentrepo.find({});
  }

  async findById(id:number): Promise<Appointment| undefined>
  {
    const idInfo = this.Appointmentrepo.findOne({where: {id: id}});

    if(idInfo === null)
    {

    }

    return idInfo;
  }

  async cancel(id: number)
  {
    const appointment_Remover = await this.Appointmentrepo.findOne({where: {id:id}});

    return await this.Appointmentrepo.remove(appointment_Remover);
  }

}
