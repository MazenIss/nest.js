import { Body, Controller ,Get, Post} from '@nestjs/common';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';


@Controller('todo')
export class TodoController {
    todos:Todo[]=[new Todo('7', 'mazen')]
    @Get()
    getTodo(): Todo[] {
      return this.todos;
    }
    @Post()
    postTodo(@Body() newTodo:Todo ):Todo[]{
        let todo=new Todo();
        todo.id=uuidv4();
        todo={...todo,...newTodo};
        this.todos.push(todo);
        return this.todos;
        //
    }
}
