import { TodoStatusEnum } from "./todo-status.enum";

export class Todo{
    constructor(public id:string ='' ,
         public name:string ='',
         public description:string ='',
         public createdAt:Date =new Date() ,
         public status:TodoStatusEnum =TodoStatusEnum.waiting ){}
}