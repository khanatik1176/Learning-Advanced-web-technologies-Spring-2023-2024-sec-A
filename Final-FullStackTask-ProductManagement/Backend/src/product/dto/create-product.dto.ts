import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsNotEmpty()
    productDescription: string;

    @IsString()
    @IsNotEmpty()
    productPrice: string;

    



}
