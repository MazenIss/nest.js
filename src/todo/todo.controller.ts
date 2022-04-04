import { Body, Controller ,Delete,Get, Param, Post, Put} from '@nestjs/common';
import { Todo } from './todo.model';
import { TodoService } from 'src/services/todo/todo.service';
import { TodoDto } from 'src/DTO/Todo.dto';
import { UpdateTodo } from 'src/DTO/updateTodo.dto';
import { FusionnePipe } from 'src/pipes/fusionne.pipe';


@Controller('todo')
export class TodoController {
  constructor(public todo:TodoService){};
    
    @Get(':id')
    getTodo(@Param('id') id:string): Todo {
        return this.todo.getTodo(id);
    }
    @Get()
    getAll(): Todo[] {
        return this.todo.getAllTodo();
    }
    @Post('/skills')
   postSkills(@Body(FusionnePipe) skills ){
       return skills;
   } 
    @Post()
    postTodo(@Body() newTodo:TodoDto):Todo[]{
        return this.todo.addTodo(newTodo);
        //
    }
    @Delete(':id')
    deleteTodo(@Param('id') id:string): any {
        return this.todo.deleteTodo(id);
    }
    @Put(':id')
    updateTodo(@Param('id') id:string,@Body() updatedTodo:UpdateTodo): Todo[]{
        return this.todo.updateTodo(id,updatedTodo);
    }
   
}
