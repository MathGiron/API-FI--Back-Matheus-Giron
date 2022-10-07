import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserMG {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nome: string

}
