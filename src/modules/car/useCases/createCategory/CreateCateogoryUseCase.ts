import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { InterfaceCategoriesRepository } from "../../repositories/InterfaceCategoriesRepository"




interface IRequest {
  name: string,
  description: string
}

@injectable()
class CreateCateogoryUseCase {



  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: InterfaceCategoriesRepository
  ) { }


  async execute({ name, description }: IRequest) {


    const gategoryAlredyExist = await this.categoriesRepository.AlredyExist(name) // to verify if category alredy existe, finding by name

    if (gategoryAlredyExist) {

      throw new AppError("Category alredy exist")


    }

    this.categoriesRepository.create({ name, description }) // to create a category





  }


}


export { CreateCateogoryUseCase }