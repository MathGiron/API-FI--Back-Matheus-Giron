import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { UserMG } from "./entity/UserMG"
import { SistemaMG } from "./entity/SistemaMG"
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMG, {
            Nome: "Teclado RedDragon Kumara",
            Quantidade: 20,
            Preço: 180,
            Marca: "RedDragon",
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMG, {
            Nome: "Mouse Razer Viper Mini",
            Quantidade: 30,
            Preço: 150,
            Marca: "Razer",
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMG, {
            Nome: "HeadSet HyperX Cloud 2",
            Quantidade: 30,
            Preço: 380,
            Marca: "HyperX",
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMG, {
            Nome: "Mouse Gamer Wireless G502 Lightspeed",
            Quantidade: 23,
            Preço: 600,
            Marca: "Logitech",
        })
    )
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserMG, {
            id : 1,
            Nome : "Matheus Gabriel Giron"
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/userMG to see results")

}).catch(error => console.log(error))
