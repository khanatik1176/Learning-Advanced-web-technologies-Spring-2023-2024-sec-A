<<<<<<< HEAD
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
=======
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
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
