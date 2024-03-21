import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    doctor_name: string;

    @Column()
    appointment_date: string;

    @Column()
    appointment_time: string;

}