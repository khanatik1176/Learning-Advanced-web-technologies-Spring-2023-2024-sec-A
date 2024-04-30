import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import Ormconfig from '../ormconfig';


@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(Ormconfig), ProductModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
