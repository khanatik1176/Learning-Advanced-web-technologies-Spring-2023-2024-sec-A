import { IsEmail, IsNotEmpty, IsString,Matches } from "class-validator";

export class CreateAuthDto {


    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character',
      })
      password: string;



}
