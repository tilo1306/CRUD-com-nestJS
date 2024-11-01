import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Essa rota retorna o recado ${id}`;
  }
  @Post()
  created(@Body() body: any) {
    return body;
  }
}
