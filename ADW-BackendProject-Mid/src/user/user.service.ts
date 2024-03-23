import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const user_data = await this.userRepo.create(createUserDto);
        return await this.userRepo.save(user_data);
    }

}
