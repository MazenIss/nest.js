import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get()
    getHello(): string {
      return 'this is get';
    }
    @Post()
    postHello(): string {
      return 'this is post';
    }
    @Put()
    putHello(): string {
      return 'this is put';
    }
    @Delete()
    deleteHello(): string {
      return 'this is delete';
    }
}


