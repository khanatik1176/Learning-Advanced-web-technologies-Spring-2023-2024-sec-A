import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    customerEmail: string;

    @Column()
    customerAddress: string;

    @Column()
    customerPhone: string;

    @Column()
    customerGender: string;

}
