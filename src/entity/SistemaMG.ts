import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaMG {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Nome: string

    @Column()
    Quantidade: number

    @Column()
    Preço: number
    
    @Column()
    Marca: string

}
