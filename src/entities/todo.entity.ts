import { TimeStampEntities } from "src/shared/time-stamp.entities";
import { TodoStatusEnum } from "src/todo/todo-status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class TodoEntity extends TimeStampEntities {
    @PrimaryGeneratedColumn()
    Id:number;
    @Column()
    Name:string;
    @Column()
    Description:string;
    @Column({
        type:'enum',
        enum:TodoStatusEnum,
    })
    Status:TodoStatusEnum;

}
