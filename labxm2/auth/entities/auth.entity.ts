import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Auth {

 @PrimaryGeneratedColumn()
 id:number;
 
 @Column({nullable:false})
 fullName:string;

 @Column({nullable:false})
 username:string;

 @Column({nullable:false})
 email:string;

 @Column({nullable:false})
 city:string;

 @Column({nullable:false})
 country:string;

 @Column({nullable:false})
 Compnay_name:string;

 @Column({nullable:false})
 phone_number:number;

 @Column({nullable:false})
 password: string;
 






}
