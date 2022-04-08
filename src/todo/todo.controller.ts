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
    @Get(':status')
    @Version('3')
    async  countRowsByStatus(@Param('status') s:string): Promise<number> {
        if(s==="actif"){
          const e=await this.todo.countStatusActif();
         // console.log(e);
          return e;}
       if(s==="waiting"){
            const e=await this.todo.countStatusWaiting();
            //console.log(e);
            return e;}
     if(s==="done"){
        const e=await this.todo.countStatusDone();
        //console.log(e);
         return e;}

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
    @Version('1')
    deleteTodo(@Param('id') id:string): any {
        return this.todo.deleteTodo(id);
    }
    @Delete(':id')
    @Version('2')
    deleteTodoV2(@Param('id') id:string): any {
        return this.todo.deleteTodoV2(id);
    }
    @Delete(':id')
    @Version('3')
    deleteTodoV3(@Param('id') id:string): any {
        return this.todo.softDeleteTodo(id);
    }
    @Patch('/restore/:id')
    @Version('3')
    restoreTodo(@Param('id') id:string): any{
        return this.todo.restoreTodo(id);
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
