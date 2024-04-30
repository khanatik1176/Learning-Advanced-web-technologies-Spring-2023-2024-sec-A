import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    productDescription: string;

    @Column()
    productPrice: string;

}
