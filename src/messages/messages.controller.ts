import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): string {
    return 'Essa rota retorna todos os recados';
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): string {
    return `Essa rota retorna o recado ${id}`;
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  created(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }
}
