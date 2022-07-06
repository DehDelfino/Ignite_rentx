import { Request,Response } from "express"
import { CreateCateogoryUseCase } from "./CreateCateogoryUseCase"

class CreateCategoryController{

  private createCategoryUseCase: CreateCateogoryUseCase

  constructor(createCategoryUseCase: CreateCateogoryUseCase){
    this.createCategoryUseCase = createCategoryUseCase
  }



  createCategory(request:Request, response:Response):Response{

    const {name, description} = request.body
    
    try {

      const category = this.createCategoryUseCase.execute({name,description})
    
      return response.status(201).json({category})
      
    } catch (error) {
      return response.status(400).json({error:error.message})
    }
  
    
  }

}


export {CreateCategoryController}