import { inject, injectable } from "tsyringe"
import { Category } from "../../infra/typeorm/entities/Category"
import { InterfaceCategoriesRepository } from "../../repositories/InterfaceCategoriesRepository"



@injectable()
class ListCategoriesUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: InterfaceCategoriesRepository
  ) { }

  async execute(): Promise<Category[]> {

    const allCategories = await this.categoriesRepository.teste_return()


    return allCategories
  }


}


export { ListCategoriesUseCase }