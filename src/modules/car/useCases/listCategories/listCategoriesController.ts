import {Request, Response} from 'express'
import { ListCategoriesUseCase } from './litsCategoriesUseCase'



class ListCategoriesController{

  private listCategoriesUseCase: ListCategoriesUseCase

  constructor(listCategoriesUseCase: ListCategoriesUseCase){

    this.listCategoriesUseCase = listCategoriesUseCase
  }




  list(request:Request, response:Response):Response{
    const allCategories = this.listCategoriesUseCase.execute()
    

    return response.status(201).json(allCategories)
  }
}

export{ListCategoriesController}