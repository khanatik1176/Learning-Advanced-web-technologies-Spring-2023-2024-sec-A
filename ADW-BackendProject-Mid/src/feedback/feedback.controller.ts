import { Body, Controller, ParseIntPipe, Post, ValidationPipe, Get,Param } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService){}

    @Post()
    create(@Body(ValidationPipe) createFeedbackDto: CreateFeedbackDto)
    {
      return this.feedbackService.create(createFeedbackDto);
    }

    @Get('View')
    findAll()
    {
      return this.feedbackService.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number)
    {
      return this.feedbackService.findbyId(id);
    }



  
}
