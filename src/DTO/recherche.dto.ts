import { IsEnum, IsOptional } from "class-validator";
import { ErrorMessages } from "src/ErrorMessages/error-messages.enum";
import { TodoStatusEnum } from "src/todo/todo-status.enum";

export class rechercheDTO{

@IsOptional()
Chaine:string;
@IsOptional()
@IsEnum(TodoStatusEnum,{
    message:ErrorMessages.enumStatus
})
status:TodoStatusEnum;
}