import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>,
  )
  {}

  async createCustomer(createCustomerDto: CreateCustomerDto) {

    const customer_data =  await this.customerRepo.create(createCustomerDto);
    return await this.customerRepo.save(customer_data);
  }

  async findAllCustomer() {
    return await this.customerRepo.find();
  }

 async findById(id: number) : Promise<Customer| undefined> {
    
  const customerByIdInfo = await this.customerRepo.findOne({where: {id:id}});

  if(!customerByIdInfo){
      return undefined;
  }

  else
  {
   return customerByIdInfo;
  }
  }

  async updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto) {
   
    const customer = await this.findById(id);
    
    if(!customer){
        throw new Error('Customer not found');
    }
    
    return this.customerRepo.update(id, updateCustomerDto);
  }

  async removeCustomer(id: number) {
    
    const customer = await this.findById(id);

    if(!customer){
        throw new Error('Customer not found');
    }

    console.log(`Customer "${id}" has been deleted`);
    return this.customerRepo.remove(customer);
  }
}
