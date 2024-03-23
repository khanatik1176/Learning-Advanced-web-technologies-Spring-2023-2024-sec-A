import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFeedbackDto
{
    

    @IsString()
    patient_feedback: string;

    @IsNotEmpty()
    @IsNumber()
    patient_rating:number;

    @IsString()
    @IsNotEmpty()
    feedback_date: string;

   
    patient_email: string;  
}