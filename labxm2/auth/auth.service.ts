import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  
  async signUp(CreateAuthDto: CreateAuthDto)
  {
    const users = await this.
  }

}
