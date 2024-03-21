import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    patient_name:string;

    @Column()
    patient_feedback:string;

    @Column()
    patient_rating:number;

    @Column()
    feedback_date:string;
}