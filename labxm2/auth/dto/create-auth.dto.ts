import { IsAlpha, IsAlphanumeric, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, Matches } from "class-validator";

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
  }

export class CreateAuthDto {

    @IsString()
    @IsNotEmpty()
    @Length(3,30 {message: 'Invalid FUll name. Please provide valid length'})
    @IsAlpha()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    @Length(10,50 {message: 'Invalid Email. Please provide valid email'})
    email:string;

    @IsString()
    @IsNotEmpty()
    @Length(3,20 {message:'The length should be between 3 to 20'})
    city:string;

    @IsString()
    @IsNotEmpty()
    @Length(3,20 {message:'The length should be between 3 to 20'})
    country :string;

    @IsString()
    @IsNotEmpty()
    @Length(3,20 {message:'The length should be between 3 to 20'})
    company_name :string;

    @IsNumber()
    @IsNotEmpty()
    @Length(11,15 {message: 'Invalid Phone Number'})
    phone_number: number;

    @IsAlphanumeric()
    @IsNotEmpty()
    @Length(8,20 {message:'Password length must be between 8 to 20'})
    password: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @Length(8,20 {message:'Password length must be between 8 to 20'})
    @Matches('password')
    confirm_password:string;

    @IsEnum(Status)
    status: Status = Status.ACTIVE;




}
