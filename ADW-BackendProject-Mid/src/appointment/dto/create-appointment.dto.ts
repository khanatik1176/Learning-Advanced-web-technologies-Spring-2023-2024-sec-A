import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentDto {

    @IsNotEmpty()
    @IsAlpha()
    @IsString({ message: 'valid name is required' })
    doctor_name: string;

    @IsNotEmpty()
    @IsString()
    appointment_date: string;

    @IsNotEmpty()
    @IsString()
    appointment_time: string;







}

