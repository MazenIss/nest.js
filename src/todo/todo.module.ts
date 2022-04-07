import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/entities/todo.entity';
import { TodoService } from 'src/services/todo/todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports:[TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers:[TodoService]
})
export class TodoModule {}
