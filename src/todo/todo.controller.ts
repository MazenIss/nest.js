import { Body, Controller ,Delete,Get, Param, Patch, Post, Put, Version} from '@nestjs/common';
import { Todo } from './todo.model';
import { TodoService } from 'src/services/todo/todo.service';
import { TodoDto } from 'src/DTO/Todo.dto';
import { UpdateTodo } from 'src/DTO/updateTodo.dto';
import { FusionnePipe } from 'src/pipes/fusionne.pipe';
import { TodoEntity } from 'src/entities/todo.entity';


@Controller('todo')
export class TodoController {
  constructor(public todo:TodoService){};
    
    @Get(':id')
    getTodo(@Param('id') id:string): Todo {
        return this.todo.getTodo(id);
    }
    @Get()
    @Version('1')
    getAll(): Todo[] {
        return this.todo.getAllTodo();
    }
    @Get()
    @Version('2')
    getAllV2(): Promise<TodoEntity[]> {
        return this.todo.getAllTodoV2();
    }
    @Post('/skills')
   postSkills(@Body(FusionnePipe) skills ){
       return skills;
   } 
    @Post()
    @Version('1')
    postTodo(@Body() newTodo:TodoDto):Todo[]{
        return this.todo.addTodo(newTodo);
        //
    }
    @Post()
    @Version('2')
    postTodoV2(@Body() newTodo:TodoDto):Promise<TodoEntity>{
        return this.todo.addTodoV2(newTodo);
        //
    }
    @Delete(':id')
    deleteTodo(@Param('id') id:string): any {
        return this.todo.deleteTodo(id);
    }
    @Patch(':id')
    @Version('1')
    updateTodo(@Param('id') id:string,@Body() updatedTodo:UpdateTodo): Todo[]{
        return this.todo.updateTodo(id,updatedTodo);
    }
    @Patch(':id')
    @Version('2')
    async updateTodov2(@Param('id') id:string,@Body() updatedTodo:UpdateTodo): Promise<TodoEntity>{
        return await this.todo.updateTodoV2(id,updatedTodo);
    }
   
}
