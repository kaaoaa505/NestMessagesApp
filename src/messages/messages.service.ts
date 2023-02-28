import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MesssageService {
  constructor(private messagesRepository: MessagesRepository) {}

  async findOne(id: string) {
    return await this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(body: CreateMessageDto) {
    return this.messagesRepository.create(body.content);
  }
}
