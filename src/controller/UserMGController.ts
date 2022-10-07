import { NextFunction, Request, Response } from "express"
import { UserMG } from "../entity/UserMG"
import { AppDataSource } from "../data-source"
import { SistemaMG } from "../entity/SistemaMG";
export class UserMGController {

    private UserMGRepository = AppDataSource.getRepository(UserMG)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.UserMGRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.UserMGRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.UserMGRepository.save(request.body)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const cod = request.params
        const user = await AppDataSource.getRepository(UserMG).update(cod,request.body)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(UserMG).findOneBy(cod)
            response.json(userUpdated)
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let UserMGToRemove = await this.UserMGRepository.findOneBy({ id: request.params.id })
        await this.UserMGRepository.remove(UserMGToRemove)
    }

}

//sistema de controle

export class SistemaMGController {  
  private SistemaMGController = AppDataSource.getRepository(SistemaMG);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.SistemaMGController.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
  
 
    const id = request.params
    const user = await AppDataSource.getRepository(SistemaMG).findOneBy(id)
    return response.json (user)    
}

  async save(request: Request, response: Response, next: NextFunction) {
    return this.SistemaMGController.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = request.params
    const user = await AppDataSource.getRepository(SistemaMG).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(SistemaMG).findOneBy(id)
        response.json(userUpdated)
    }
} 
  
async remove(request: Request, response: Response, next: NextFunction) {

    const Nome = request.params
        const user = await AppDataSource.getRepository(SistemaMG).delete(Nome)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(SistemaMG).findOneBy(Nome)
            response.json(userUpdated)
            }}
            
}

