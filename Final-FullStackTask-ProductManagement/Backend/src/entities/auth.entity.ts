import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerEmail : string;

    @Column()
    customerPassword : string;


    @Column()
    role : string;
    

}
