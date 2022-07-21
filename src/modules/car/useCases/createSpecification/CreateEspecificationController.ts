import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateEspecificationUseCase } from './CreateEspecificationUseCase'


export class CreateEspecificationController {


  async createEspecification(request: Request, response: Response): Promise<Response> {

    const { name, description } = request.body


    const createEspecificationUseCase = container.resolve(CreateEspecificationUseCase)
    await createEspecificationUseCase.execute({ name, description })

    return response.status(201).send("ok")








  }
}