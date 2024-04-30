<<<<<<< HEAD
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import * as bcrypt from 'bcrypt';

@Entity()
export class Auth {

@PrimaryGeneratedColumn()
id: number;

@Column()
email: string;

@Column()
password: string;

// @BeforeInsert()
// async hashPassword()
// {
//     this.password = await bcrypt.hash(this.password, 10);
// }

    
}
=======
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import * as bcrypt from 'bcrypt';

@Entity()
export class Auth {

@PrimaryGeneratedColumn()
id: number;

@Column()
email: string;

@Column()
password: string;

// @BeforeInsert()
// async hashPassword()
// {
//     this.password = await bcrypt.hash(this.password, 10);
// }

    
}
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
