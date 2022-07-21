import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateCateogoryUseCase } from "./CreateCateogoryUseCase"

class CreateCategoryController {



  createCategory(request: Request, response: Response): Response {

    const { name, description } = request.body



    const createCategoryUseCase = container.resolve(CreateCateogoryUseCase)

    const category = createCategoryUseCase.execute({ name, description })

    return response.status(201).json({ category })




  }

}


export { CreateCategoryController }