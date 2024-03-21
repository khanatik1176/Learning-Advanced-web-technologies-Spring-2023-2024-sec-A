import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HealthTracker 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    patient_height: number;

    @Column()
    patient_weight: number;

    @Column()
    patient_age: number;

    @Column()
    healthTracker_Status: string;
    
    @Column('float', {nullable: true})
    patient_Bmi : number;

}