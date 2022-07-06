import {Request, Response} from 'express'
import { CreateEspecificationUseCase } from './CreateEspecificationUseCase'

export class CreateEspecificationController{


  constructor(private createEspecificationUseCase: CreateEspecificationUseCase ){

  }



  createEspecification(request:Request, response:Response):Response{
    
    const {name, description} = request.body
    try {
      

      this.createEspecificationUseCase.execute({name,description})

      return response.status(201).send("ok")



    } catch (error) {
      
      return response.status(400).json({error: error.messa})
    }

  }
}