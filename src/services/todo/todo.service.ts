import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoDto } from 'src/DTO/Todo.dto';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from 'src/todo/todo.model';
import { UpdateTodo } from 'src/DTO/updateTodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    todos:Todo[]=[];
    constructor(@InjectRepository(TodoEntity) private  todoRepository : Repository<TodoEntity>){}

getAllTodo():Todo[]{
    return this.todos;
}
async getAllTodoV2():Promise<TodoEntity[]>{
    return await this.todoRepository.find();
}

getTodo(id:string):Todo{
    let todoIdx = this.todos.findIndex((todo) => todo.id == id);
    if(todoIdx === -1) throw new NotFoundException();
    return this.todos[todoIdx];
}
addTodo(newtodo:TodoDto):Todo[]{
    let todo=new Todo();
        todo.id=uuidv4();
        todo={...todo,...newtodo};
        this.todos.push(todo);
        return this.todos;
}
async addTodoV2(newtodo:TodoDto):Promise<TodoEntity>{
    let todo=new TodoEntity();
    todo.Name=newtodo.Name;
    todo.Description=newtodo.Description;
    return  await this.todoRepository.save(todo);
    
}
deleteTodo(id:string) :any{
   let t:Todo[]=this.todos.filter((todo:Todo)=>{
       return (todo.id!==id);
   });
   let r=this.todos.length-t.length;
   if(!r) throw new NotFoundException();
   this.todos=t;
   return {"deleted items" : r};

}
updateTodo(id:string,updatedTodo:UpdateTodo):Todo[]{
    let todoIdx = this.todos.findIndex((todo) => todo.id == id);    
    if(todoIdx === -1) throw new NotFoundException();
    this.todos[todoIdx].name = updatedTodo.Name ?? this.todos[todoIdx].name;
    this.todos[todoIdx].description = updatedTodo.Description ?? this.todos[todoIdx].description;
    this.todos[todoIdx].status = updatedTodo.status ?? this.todos[todoIdx].status;
return this.todos;
}
async updateTodoV2(id:string,updatedTodo:UpdateTodo):Promise<TodoEntity>{
const newEntity=await this.todoRepository.preload({
    Id:id,
    ...updatedTodo});
return await this.todoRepository.save(newEntity);
}

}


