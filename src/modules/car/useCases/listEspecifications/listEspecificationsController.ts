import { ListEspecificationsUseCase } from "./listCategoriesUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class ListEspecificationsController {


  async list(request: Request, response: Response): Promise<Response> {

    try {

      const listEspecificationUseCase = container.resolve(ListEspecificationsUseCase)

      const allEspecifications = await listEspecificationUseCase.execute()


      return response.status(201).json(allEspecifications)

    } catch (error) {

      return response.status(400).json({ error: error.message })

    }
  }
}