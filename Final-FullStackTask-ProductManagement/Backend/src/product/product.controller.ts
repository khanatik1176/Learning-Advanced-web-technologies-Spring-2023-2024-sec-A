import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guard/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post('addProduct')
  create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @UseGuards(AuthGuard)
  @Roles('customer')
  @Roles('admin')
  @Get('viewProducts')
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findbyId(+id);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Patch('updateProduct/:id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(+id, updateProductDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Delete('deleteProduct/:id')
  async remove(@Param('id') id: string) {
    await this.productService.removeProduct(+id);

    return `Product ID ${id} has been removed`;
  }
}
