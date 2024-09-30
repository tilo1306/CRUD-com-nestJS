import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }
  @Get(':id')
  findOne(): string {
    return `Essa rota retorna o recado `;
  }
}
