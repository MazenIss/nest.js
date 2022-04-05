import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class TimeStampEntities {

    @CreateDateColumn({update:false})
    CreatedAt:Date;
    @UpdateDateColumn()
    UpdatedAt:Date;
    @DeleteDateColumn()
    DeletedAt:Date;
}
