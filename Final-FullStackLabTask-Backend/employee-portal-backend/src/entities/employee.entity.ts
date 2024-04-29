import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employeeName: string;

    @Column()
    employeeEmail: string;

    @Column()
    employeeAddress: string;

    @Column()
    employeePhone: string;

    @Column()
    employeeGender: string;

    @Column()
    employeePosition: string;

    @Column()
    employeeSalary: string;
}
