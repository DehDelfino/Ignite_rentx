import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

import { Request,Response } from "express";


export class ImportCategoryController{

  constructor(private importCategoryUseCase: ImportCategoryUseCase){}


  handle(request:Request, response:Response):Response{

   try {

    const {file} = request
      
    this.importCategoryUseCase.execute(file)

    return response.status(200).send('ok')


   } catch (error) {

    return response.status(400).json({error:error.message})
    
   }

  }
}