import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MesssageService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private messageService: MesssageService) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message)
      throw new NotFoundException(`Message with id ${id} not found`);

    return message;
  }
}
