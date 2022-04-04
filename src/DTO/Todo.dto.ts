import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ErrorMessages } from "src/ErrorMessages/error-messages.enum";
import { TodoStatusEnum } from "src/todo/todo-status.enum";

export class TodoDto{
     @IsNotEmpty({
          message :ErrorMessages.NisEmpty
     })
     @MinLength(3,{
          message:ErrorMessages.minLength3})
     @MaxLength(10,{
          message:ErrorMessages.maxLength10
     })
     name: string;
     @IsNotEmpty({
          message:ErrorMessages.DisEmpty
     }) 
     @MinLength(10,{
          message:ErrorMessages.minLength10
     })
     description: string;
     
}