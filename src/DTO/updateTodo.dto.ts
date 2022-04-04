import { PartialType } from "@nestjs/mapped-types";
import { IsEnum, IsOptional } from "class-validator";
import { ErrorMessages } from "src/ErrorMessages/error-messages.enum";
import { TodoStatusEnum } from "src/todo/todo-status.enum";
import { TodoDto } from "./Todo.dto";

export class UpdateTodo extends PartialType(TodoDto){
    @IsEnum(TodoStatusEnum,{
        message:ErrorMessages.enumStatus
    })
    status: TodoStatusEnum;
    
}