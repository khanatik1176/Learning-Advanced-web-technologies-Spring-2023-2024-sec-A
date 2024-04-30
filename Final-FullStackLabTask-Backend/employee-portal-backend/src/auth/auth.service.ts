<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/entities/auth.entity';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepo: Repository<Auth>,
  ) {}

  async logInEmp(login_data: any)
  {
    const user = await this.authRepo.findOne({where:{email: login_data.email}});

    if(!user)
      {
        console.log(user);
        return {message: 'User not found'};
        
      }

    else if(user && user.password === login_data.password)
      {
        console.log(user);
        return {message: 'Login successful'};
      }


  }
}
=======
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from 'src/entities/auth.entity';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepo: Repository<Auth>,
  ) {}

  async logInEmp(login_data: any)
  {
    const user = await this.authRepo.findOne({where:{email: login_data.email}});

    if(!user)
      {
        console.log(user);
        return {message: 'User not found'};
        
      }

    else if(user && user.password === login_data.password)
      {
        console.log(user);
        return {message: 'Login successful'};
      }


  }
}
>>>>>>> 9b80cc982a685f39dd834561fb77d7f6a0bf00cc
