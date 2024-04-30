import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/entities/auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepo: Repository<Auth>,
    private jwtService: JwtService
  )
  {}

  async login(loginData: any)
  {
    const user = await this.authRepo.findOne({where:{customerEmail: loginData.customerEmail}});
    
    if(!user)
      {
        throw new Error('User not found');
      }

      const payload = {customerEmail: user.customerEmail, role: user.role};

      if(user && user.customerPassword === loginData.customerPassword)
      {
          const token = await this.jwtService.signAsync(payload);

          return {token, user};

       
      }

  }



  
}
