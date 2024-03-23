import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req , Put,ParseIntPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Request } from 'express';
import { UpdateAuthDto } from './dto/update-auth.dto';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @Post('signup')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async logIn(@Body() data: any, @Req() req : Request )
  {
    return this.authService.logIn(data,req.session);
  }

  @Put('forgetpassword/:id')
  update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe) updateAuthDto: UpdateAuthDto) {
    return this.authService.forgetPassword(id, updateAuthDto);
  }

}
