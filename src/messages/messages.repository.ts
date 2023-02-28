import { Injectable } from '@nestjs/common';
import { readFile, readFileSync, writeFile, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessagesRepository {
  promiseOfMessages = '';

  async findOne(id: string) {
    let messages: any = {};

    const data = await readFileSync('messages.json');

    if (data.toString()) messages = JSON.parse(data.toString());

    return messages[id];
  }

  findAll() {
    let messages: any = {};

    const data = readFileSync('messages.json');

    if (data.toString()) messages = JSON.parse(data.toString());

    return messages;
  }

  create(content: string) {
    let messages: any = {};

    const data = readFileSync('messages.json');

    if (data.toString()) messages = JSON.parse(data.toString());

    const id = uuidv4();

    messages[id] = {
      id,
      content,
    };

    const messagesAsJson = JSON.stringify(messages);

    writeFileSync('messages.json', messagesAsJson);

    return messages[id];
  }
}
