import { CreateProductDto } from './create-product.dto';
import { IsString } from 'class-validator';

export class UpdateProductDto{
    @IsString()
    productName ?: string;

    @IsString()
    productDescription ?: string;

    @IsString()
    productPrice ?: string;
}
