import { Module } from '@nestjs/common';
import { TodoService } from 'src/services/todo/todo.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers:[TodoService]
})
export class TodoModule {}
