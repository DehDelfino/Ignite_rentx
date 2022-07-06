import { ListEspecificationsUseCase } from "./listCategoriesUseCase";
import { Request,Response } from "express";



export class ListEspecificationsController{


  constructor(private listEspecificationUseCase: ListEspecificationsUseCase){

  }

  list(request:Request, response:Response):Response{

    try {

      const allEspecifications =this.listEspecificationUseCase.execute()
      

      return response.status(201).json(allEspecifications)

    } catch (error) {

      return response.status(400).json({error: error.message})
      
    }
  }
}