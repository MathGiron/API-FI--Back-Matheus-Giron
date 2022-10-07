import "reflect-metadata"
import { DataSource } from "typeorm"
import { SistemaMG } from "./entity/SistemaMG"
import { UserMG } from "./entity/UserMG"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "coxinha110103",
    database: "Faculdade",
    synchronize: true,
    logging: true,
    entities: [UserMG, SistemaMG],
    subscribers: [],
    migrations: [],
})