import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from '../auth/guard/auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post('createCustomer')
  create(@Body(ValidationPipe) createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Get('ViewAllCustomers')
  findAll() {
    return this.customerService.findAllCustomer();
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findById(+id);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Patch('updateCustomer/:id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateCustomerDto: UpdateCustomerDto) {
    console.log(`"${id}" is being Updated`);
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Delete('deleteCusomer/:id')
  remove(@Param('id') id: string) {
    console.log(`"${id}" is being deleted`);
    return this.customerService.removeCustomer(+id);
  }
}
