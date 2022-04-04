import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoDto } from 'src/DTO/Todo.dto';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from 'src/todo/todo.model';
import { UpdateTodo } from 'src/DTO/updateTodo.dto';

@Injectable()
export class TodoService {
    todos:Todo[]=[];

getAllTodo():Todo[]{
    return this.todos;
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
    this.todos[todoIdx].name = updatedTodo.name ?? this.todos[todoIdx].name;
    this.todos[todoIdx].description = updatedTodo.description ?? this.todos[todoIdx].description;
    this.todos[todoIdx].status = updatedTodo.status ?? this.todos[todoIdx].status;
return this.todos;
}

}


