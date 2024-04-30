import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
  @InjectRepository(Product)
  private productRepo: Repository<Product>
  ){}

  async createProduct(createProductDto: CreateProductDto) {
    
    const productData = this.productRepo.create(createProductDto);
    return await this.productRepo.save(productData);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findbyId(id: number): Promise<Product| undefined > {
    
    const productInfo = await this.productRepo.findOne({where: {id:id}});

    if(!productInfo){
      return undefined;
    }

    else
    {
      return productInfo;
    
    }

  }

 async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    
  
    return await this.productRepo.update(id, updateProductDto);

  }

  async removeProduct(id: number) {
    const product_remover = await this.productRepo.findOne({where: {id:id}});

    console.log(`Product ID ${id} is being removed`);
    return await this.productRepo.remove(product_remover);
  }
}
