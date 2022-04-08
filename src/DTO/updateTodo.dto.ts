import { IsEnum, IsOptional, MaxLength, MinLength } from "class-validator";
import { ErrorMessages } from "src/ErrorMessages/error-messages.enum";
import { TodoStatusEnum } from "src/todo/todo-status.enum";

export class UpdateTodo{
   @MinLength(3,{
        message:ErrorMessages.minLength3})
   @MaxLength(10,{
        message:ErrorMessages.maxLength10
   })
   @IsOptional()
   Name: string;
   @IsOptional()
   @MinLength(10,{
        message:ErrorMessages.minLength10
   })
   Description: string;
    @IsEnum(TodoStatusEnum,{
        message:ErrorMessages.enumStatus
    })
    @IsOptional()
    status: TodoStatusEnum;
    
}