import { Body, Controller, ParseIntPipe, Post, ValidationPipe, Get,Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurard/auth.guard';
import { Roles } from '../decorators/roles.decorator';


@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService){}

    @UseGuards(AuthGuard)
    @Roles('patient')
    @Post('generate')
    create(@Body(ValidationPipe) createFeedbackDto: CreateFeedbackDto, @Req() req: Request)
    {
      return this.feedbackService.create(createFeedbackDto, req.session);
    }

    @UseGuards(AuthGuard)
    @Roles('patient')
    @Get('View')
    findAll()
    {
      return this.feedbackService.findAll();
    }

    @UseGuards(AuthGuard)
    @Roles('patient')
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number)
    {
      return this.feedbackService.findbyId(id);
    }



  
}
