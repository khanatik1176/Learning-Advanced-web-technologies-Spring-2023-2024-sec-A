
import { IsOptional,IsString,IsNotEmpty,Matches,IsEmail,Length } from 'class-validator';

export class UpdateEmployeeDto{
    
    @IsString()
    @Matches(/^[a-zA-Z\s]+$/, 
    { message: 'Name must contain only letters' })
    @Length(3,30, { message: 'Name must be between 3 and 30 characters'})
    employeeName ?: string;

    @IsEmail()
    employeeEmail ?: string;

    @IsString()
    @Length(5,50,{message: 'Address must be between 5 to 50 characters'} )
    employeeAddress ?: string;

    @IsString()
    @Length(11,11, {message: 'Phone number must be 11 characters'})
    employeePhone ?: string;

    @IsString()
    employeeGender ?: string;


    @IsString()
    employeePosition ?: string;

    @IsString()
    employeeSalaray ?: string;


}
