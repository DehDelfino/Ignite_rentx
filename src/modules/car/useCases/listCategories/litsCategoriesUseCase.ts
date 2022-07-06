import { Category } from "../../entities/Category"
import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { InterfaceCategoriesRepository } from "../../repositories/InterfaceCategoriesRepository"




class ListCategoriesUseCase {

  private categoriesRepository: InterfaceCategoriesRepository

  constructor(categoriesRepository: InterfaceCategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute(): Promise<Category[]> {

    const allCategories = this.categoriesRepository.teste_return()


    return allCategories
  }


}


export { ListCategoriesUseCase }