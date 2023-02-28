import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MesssageService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MesssageService],
})
export class MessagesModule {}
